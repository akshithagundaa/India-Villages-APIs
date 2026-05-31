const pool = require('../db/db');

exports.searchVillages = async (req, res) => {
    try {
        const { q } = req.query;

        const result = await pool.query(`
            SELECT 
                v.name AS village,
                sd.name AS subdistrict,
                d.name AS district,
                s.name AS state
            FROM village v
            JOIN subdistrict sd ON v.subdistrict = sd.name
            JOIN district d ON sd.district = d.name
            JOIN state s ON d.state = s.name
            WHERE v.name ILIKE $1
            LIMIT 10
        `, [`%${q}%`]);

        const formatted = result.rows.map(row => ({
            value: row.village,
            fullAddress: `${row.village}, ${row.subdistrict}, ${row.district}, ${row.state}, India`,
            hierarchy: {
                village: row.village,
                subdistrict: row.subdistrict,
                district: row.district,
                state: row.state
            }
        }));

        res.json({ data: formatted });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


