const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'village_db',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;