const express = require('express');
const cors = require('cors');

const app = express();

const locationRoutes = require('./routes/locationRoutes');

app.use(cors()); // 🔥 THIS LINE IS CRITICAL

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Village API is running');
});

app.use('/api', locationRoutes);

module.exports = app;