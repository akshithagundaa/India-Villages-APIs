const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationController');

router.get('/autocomplete', controller.searchVillages);

module.exports = router;


