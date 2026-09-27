const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    index: true,
    trim: true
  },
  otpHash: {
    type: String,
    required: true
  },
  attempts: {
    type: Number,
    default: 0
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 } // MongoDB TTL index: automatically deletes document upon expiry
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
