const express = require('express');
const { Pool } = require('pg');

const app = express();

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'village_db',
    password: 'postgres', // change if your password is different
    port: 5432,
});

// Root route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Get all states
app.get('/states', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM state');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching states');
    }
});

// Get districts by state
app.get('/districts', async (req, res) => {
    const { state } = req.query;

    try {
        const result = await pool.query(
            'SELECT * FROM district WHERE state = $1',
            [state]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching districts');
    }
});

// Get subdistricts by district
app.get('/subdistricts', async (req, res) => {
    const { district } = req.query;

    try {
        const result = await pool.query(
            'SELECT * FROM subdistrict WHERE district = $1',
            [district]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching subdistricts');
    }
});

// Get villages by subdistrict
app.get('/villages', async (req, res) => {
    const { subdistrict } = req.query;

    try {
        const result = await pool.query(
            'SELECT * FROM village WHERE subdistrict = $1',
            [subdistrict]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching villages');
    }
});

// 🔥 SEARCH API (autocomplete feature)
app.get('/search', async (req, res) => {
    const { q } = req.query;

    try {
        const result = await pool.query(
            `SELECT * FROM village WHERE name ILIKE $1 LIMIT 10`,
            [`%${q}%`]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error searching villages');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});