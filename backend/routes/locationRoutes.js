const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Cascading hierarchical location endpoints
router.get('/states', locationController.getStates);
router.get('/districts/:stateId', locationController.getDistricts);
router.get('/talukas/:districtId', locationController.getTalukas);
router.get('/regions/:talukaId', locationController.getRegions);
router.get('/wards/:regionId', locationController.getWards);

module.exports = router;
