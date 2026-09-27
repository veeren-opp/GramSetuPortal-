const mongoose = require('mongoose');

// 1. State Schema
const stateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, unique: true },
  code: { type: String, required: true, trim: true, uppercase: true }
}, { timestamps: true });

// 2. District Schema
const districtSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true }
}, { timestamps: true });
districtSchema.index({ stateId: 1, name: 1 }, { unique: true });

// 3. Taluka / Block Schema
const talukaSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true }
}, { timestamps: true });
talukaSchema.index({ districtId: 1, name: 1 }, { unique: true });

// 4. Region / Gram Panchayat Schema
const regionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  talukaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Taluka', required: true },
  code: { type: String, trim: true },
  pincode: { type: String, trim: true }
}, { timestamps: true });
regionSchema.index({ talukaId: 1, name: 1 }, { unique: true });

// 5. Ward / Local Area Schema
const wardSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  wardNumber: { type: Number, required: true },
  regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true }
}, { timestamps: true });
wardSchema.index({ regionId: 1, wardNumber: 1 }, { unique: true });

const State = mongoose.model('State', stateSchema);
const District = mongoose.model('District', districtSchema);
const Taluka = mongoose.model('Taluka', talukaSchema);
const Region = mongoose.model('Region', regionSchema);
const Ward = mongoose.model('Ward', wardSchema);

module.exports = {
  State,
  District,
  Taluka,
  Region,
  Ward
};
