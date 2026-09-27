require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { Region } = require('../models/Location');

const seedAdmin = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gramsetu';
    console.log(`🔌 Connecting to MongoDB: ${mongoUri.replace(/:([^:@]{4})[^:@]*@/, ':****@')}...`);
    await mongoose.connect(mongoUri);

    // Look for an existing Gram Panchayat region or create a default one
    let region = await Region.findOne({ name: /Rampur/i });
    if (!region) {
      console.log('⚠️ No existing region found. Running initial seedData first is recommended.');
      region = await Region.findOne();
    }

    if (!region) {
      console.error('❌ Please run `npm run seed` first to establish the hierarchical location system.');
      process.exit(1);
    }

    const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin.rampur@gramsetu.gov.in';
    const adminMobile = process.env.SEED_ADMIN_MOBILE || '9800000001';
    const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'Admin@123';
    const adminName = process.env.SEED_ADMIN_NAME || 'Dr. Alok Verma';
    const adminDesignation = process.env.SEED_ADMIN_DESIG || 'Panchayat Development Officer (PDO)';

    console.log(`🌱 Seeding Administrator: ${adminName} (${adminEmail})...`);

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(adminPassword, salt);

    // Upsert admin
    await User.findOneAndUpdate(
      { $or: [{ email: adminEmail.toLowerCase() }, { mobile: adminMobile }] },
      {
        name: adminName,
        email: adminEmail.toLowerCase(),
        mobile: adminMobile,
        passwordHash,
        role: 'regional_admin',
        region: region._id,
        taluka: region.talukaId,
        designation: adminDesignation,
        isVerified: true
      },
      { upsert: true, new: true }
    );

    console.log('=======================================================');
    console.log('✅ REGIONAL ADMINISTRATOR ACCOUNT CREATED SUCCESSFULLY!');
    console.log(`🏢 Assigned Region: ${region.name}`);
    console.log(`📧 Official Email:  ${adminEmail}`);
    console.log(`📱 Mobile Number:   ${adminMobile}`);
    console.log(`🔑 Login Password:  ${adminPassword}`);
    console.log('=======================================================');

    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to seed admin:', error.message);
    process.exit(1);
  }
};

seedAdmin();
