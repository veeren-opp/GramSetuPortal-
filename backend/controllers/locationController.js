const { State, District, Taluka, Region, Ward } = require('../models/Location');

/**
 * GET /api/locations/states
 */
exports.getStates = async (req, res, next) => {
  try {
    const states = await State.find().sort({ name: 1 }).select('name code');
    res.json({
      success: true,
      count: states.length,
      states
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/locations/districts/:stateId
 */
exports.getDistricts = async (req, res, next) => {
  try {
    const { stateId } = req.params;
    const districts = await District.find({ stateId }).sort({ name: 1 }).select('name stateId');
    res.json({
      success: true,
      count: districts.length,
      districts
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/locations/talukas/:districtId
 */
exports.getTalukas = async (req, res, next) => {
  try {
    const { districtId } = req.params;
    const talukas = await Taluka.find({ districtId }).sort({ name: 1 }).select('name districtId');
    res.json({
      success: true,
      count: talukas.length,
      talukas
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/locations/regions/:talukaId
 * Returns Gram Panchayats / Regions in a Taluka
 */
exports.getRegions = async (req, res, next) => {
  try {
    const { talukaId } = req.params;
    const regions = await Region.find({ talukaId }).sort({ name: 1 }).select('name talukaId code pincode');
    res.json({
      success: true,
      count: regions.length,
      regions
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/locations/wards/:regionId
 * Returns Wards in a Gram Panchayat / Region
 */
exports.getWards = async (req, res, next) => {
  try {
    const { regionId } = req.params;
    const wards = await Ward.find({ regionId }).sort({ wardNumber: 1 }).select('name wardNumber regionId');
    res.json({
      success: true,
      count: wards.length,
      wards
    });
  } catch (error) {
    next(error);
  }
};
