const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const locationRoutes = require('./routes/locationRoutes');
app.use('/api', locationRoutes);

// test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
