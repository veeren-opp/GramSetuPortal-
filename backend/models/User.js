const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: ''
  },
  passwordHash: {
    type: String,
    required: [true, 'Password hash is required']
  },
  role: {
    type: String,
    enum: ['citizen', 'regional_admin', 'super_admin'],
    default: 'citizen'
  },
  // Location Hierarchy References
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State'
  },
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District'
  },
  taluka: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Taluka'
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required: true
  },
  ward: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ward'
  },
  // Designation for Admin users
  designation: {
    type: String,
    default: ''
  },
  // Verification status
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Compare password method
userSchema.methods.comparePassword = async function(plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

// Remove passwordHash from JSON responses
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.passwordHash;
  return obj;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
