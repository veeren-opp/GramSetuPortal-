require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { State, District, Taluka, Region, Ward } = require('../models/Location');
const User = require('../models/User');
const Complaint = require('../models/Complaint');
const Otp = require('../models/Otp');

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gramsetu';
    console.log(`🔌 Connecting to MongoDB: ${mongoUri.replace(/:([^:@]{4})[^:@]*@/, ':****@')}...`);
    await mongoose.connect(mongoUri);

    console.log('🧹 Clearing previous demonstration data...');
    await Promise.all([
      State.deleteMany({}),
      District.deleteMany({}),
      Taluka.deleteMany({}),
      Region.deleteMany({}),
      Ward.deleteMany({}),
      User.deleteMany({}),
      Complaint.deleteMany({}),
      Otp.deleteMany({})
    ]);

    console.log('📍 Seeding Hierarchical Panchayati Raj Location System...');

    // 1. States
    const stateUP = await State.create({ name: 'Uttar Pradesh', code: 'UP' });
    const stateMH = await State.create({ name: 'Maharashtra', code: 'MH' });

    // 2. Districts
    const distLucknow = await District.create({ name: 'Lucknow', stateId: stateUP._id });
    const distPune = await District.create({ name: 'Pune', stateId: stateMH._id });

    // 3. Talukas / Blocks
    const talukaBKT = await Taluka.create({ name: 'Bakshi Ka Talab', districtId: distLucknow._id });
    const talukaHaveli = await Taluka.create({ name: 'Haveli', districtId: distPune._id });

    // 4. Gram Panchayats / Regions
    const gpRampur = await Region.create({
      name: 'Rampur Gram Panchayat',
      talukaId: talukaBKT._id,
      code: 'GP-UP-001',
      pincode: '226201'
    });

    const gpShivapur = await Region.create({
      name: 'Khed Shivapur Gram Panchayat',
      talukaId: talukaHaveli._id,
      code: 'GP-MH-002',
      pincode: '412205'
    });

    // 5. Wards for Rampur Gram Panchayat
    const rampurWards = await Ward.insertMany([
      { name: 'Ward 1 - Station Road', wardNumber: 1, regionId: gpRampur._id },
      { name: 'Ward 2 - Gandhi Chowk', wardNumber: 2, regionId: gpRampur._id },
      { name: 'Ward 3 - Primary School Tola', wardNumber: 3, regionId: gpRampur._id },
      { name: 'Ward 4 - Kisan Basti', wardNumber: 4, regionId: gpRampur._id }
    ]);

    // Wards for Khed Shivapur Gram Panchayat
    const shivapurWards = await Ward.insertMany([
      { name: 'Ward 1 - Main Bazaar Peth', wardNumber: 1, regionId: gpShivapur._id },
      { name: 'Ward 2 - Shiva Temple Lane', wardNumber: 2, regionId: gpShivapur._id },
      { name: 'Ward 3 - Gaothan West', wardNumber: 3, regionId: gpShivapur._id }
    ]);

    console.log('✅ Location hierarchy seeded successfully.');

    console.log('🌱 Seeding Authenticated Users & Password Hashes...');
    const adminHash = await bcrypt.hash('Admin@123', 10);
    const citizenHash = await bcrypt.hash('Citizen@123', 10);

    // Regional Admin 1: Rampur Gram Panchayat
    const adminRampur = await User.create({
      name: 'Dr. Alok Verma',
      email: 'admin.rampur@gramsetu.gov.in',
      mobile: '9800000001',
      passwordHash: adminHash,
      role: 'regional_admin',
      state: stateUP._id,
      district: distLucknow._id,
      taluka: talukaBKT._id,
      region: gpRampur._id,
      designation: 'Panchayat Development Officer (PDO)',
      isVerified: true
    });

    // Regional Admin 2: Khed Shivapur Gram Panchayat
    const adminShivapur = await User.create({
      name: 'Smt. Sunita Rao',
      email: 'admin.shivapur@gramsetu.gov.in',
      mobile: '9800000002',
      passwordHash: adminHash,
      role: 'regional_admin',
      state: stateMH._id,
      district: distPune._id,
      taluka: talukaHaveli._id,
      region: gpShivapur._id,
      designation: 'Block Development Officer (BDO)',
      isVerified: true
    });

    // Citizen 1: Rampur
    const citizenRamesh = await User.create({
      name: 'Ramesh Kumar Sharma',
      mobile: '9876543210',
      email: 'ramesh.sharma@example.com',
      passwordHash: citizenHash,
      role: 'citizen',
      state: stateUP._id,
      district: distLucknow._id,
      taluka: talukaBKT._id,
      region: gpRampur._id,
      ward: rampurWards[1]._id, // Ward 2
      isVerified: true
    });

    // Citizen 2: Khed Shivapur
    const citizenPooja = await User.create({
      name: 'Pooja Patel',
      mobile: '9123456780',
      email: 'pooja.patel@example.com',
      passwordHash: citizenHash,
      role: 'citizen',
      state: stateMH._id,
      district: distPune._id,
      taluka: talukaHaveli._id,
      region: gpShivapur._id,
      ward: shivapurWards[0]._id, // Ward 1
      isVerified: true
    });

    console.log('🌱 Seeding Realistic Civic Complaints with Cloud Photographic Evidence...');

    const complaints = [
      // Complaints in Rampur Gram Panchayat (Dr. Alok Verma's Jurisdiction)
      {
        complaintId: 'CMP-2026-000001',
        citizen: citizenRamesh._id,
        citizenName: citizenRamesh.name,
        citizenMobile: citizenRamesh.mobile,
        title: 'Broken Main Drinking Water Pipeline at Market Square',
        category: 'Water Supply',
        description: 'The underground supply PVC pipeline has ruptured near the weekly market ground. Clean potable water has been flooding the street since yesterday morning, causing severe water pressure drop in 80 households.',
        location: 'Opposite Community Hall, Main Bazaar Road',
        state: stateUP._id,
        district: distLucknow._id,
        taluka: talukaBKT._id,
        region: gpRampur._id,
        ward: rampurWards[1]._id,
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=900&q=80',
        imagePublicId: 'seed/water_pipe_leak',
        status: 'Under Review',
        adminRemark: 'Inspection team dispatched by Jal Nigam field engineering division.',
        assignedOfficer: 'Er. Rajesh Mishra (Water Supply Dept)',
        statusHistory: [
          { status: 'Submitted', changedBy: citizenRamesh.name, remarks: 'Grievance ticket created with site photograph.', timestamp: new Date(Date.now() - 86400000 * 2) },
          { status: 'Under Review', changedBy: 'Dr. Alok Verma (PDO)', remarks: 'Inspection team dispatched by Jal Nigam field engineering division.', timestamp: new Date(Date.now() - 86400000) }
        ],
        createdAt: new Date(Date.now() - 86400000 * 2)
      },
      {
        complaintId: 'CMP-2026-000002',
        citizen: citizenRamesh._id,
        citizenName: citizenRamesh.name,
        citizenMobile: citizenRamesh.mobile,
        title: 'High Voltage Street Light Pole Sparking Hazard',
        category: 'Street Lights',
        description: 'Pole number LP-14 has open loose wiring sparking after rain. The entire street is in darkness and poses an electrocution threat to pedestrians and schoolchildren.',
        location: 'Near Primary Girls School, Ward 2',
        state: stateUP._id,
        district: distLucknow._id,
        taluka: talukaBKT._id,
        region: gpRampur._id,
        ward: rampurWards[1]._id,
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
        imagePublicId: 'seed/streetlight_spark',
        status: 'In Progress',
        adminRemark: 'Lineman on site with replacement LED luminaire fixture.',
        assignedOfficer: 'Suresh Yadav (Lineman)',
        statusHistory: [
          { status: 'Submitted', changedBy: citizenRamesh.name, remarks: 'Grievance submitted.', timestamp: new Date(Date.now() - 86400000 * 3) },
          { status: 'In Progress', changedBy: 'Dr. Alok Verma (PDO)', remarks: 'Lineman on site with replacement LED luminaire fixture.', timestamp: new Date(Date.now() - 86400000) }
        ],
        createdAt: new Date(Date.now() - 86400000 * 3)
      },
      {
        complaintId: 'CMP-2026-000003',
        citizen: citizenRamesh._id,
        citizenName: citizenRamesh.name,
        citizenMobile: citizenRamesh.mobile,
        title: 'Severe Crater Potholes on Station Link Approach Road',
        category: 'Roads',
        description: 'A 50-meter stretch of the link road has collapsed due to heavy tractor traffic, creating deep potholes causing two-wheelers to slip.',
        location: 'Station Link Road, KM 3 Milestone',
        state: stateUP._id,
        district: distLucknow._id,
        taluka: talukaBKT._id,
        region: gpRampur._id,
        ward: rampurWards[1]._id,
        imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=900&q=80',
        imagePublicId: 'seed/damaged_road',
        status: 'Submitted',
        adminRemark: '',
        assignedOfficer: '',
        statusHistory: [
          { status: 'Submitted', changedBy: citizenRamesh.name, remarks: 'Grievance filed via citizen portal.', timestamp: new Date() }
        ],
        createdAt: new Date()
      },

      // Complaints in Khed Shivapur Gram Panchayat (Smt. Sunita Rao's Jurisdiction)
      {
        complaintId: 'CMP-2026-000004',
        citizen: citizenPooja._id,
        citizenName: citizenPooja.name,
        citizenMobile: citizenPooja.mobile,
        title: 'Severe Stormwater Drain Clog Overflowing Onto Road',
        category: 'Drainage',
        description: 'The stormwater drainage channel behind the temple is completely choked with solid silt and plastic debris. Sewage is backing up into residential verandas.',
        location: 'Behind Shiva Temple, Lane 2',
        state: stateMH._id,
        district: distPune._id,
        taluka: talukaHaveli._id,
        region: gpShivapur._id,
        ward: shivapurWards[0]._id,
        imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80',
        imagePublicId: 'seed/clogged_drain',
        status: 'Under Review',
        adminRemark: 'Sanitation squad requisitioned for mechanized desilting drive.',
        assignedOfficer: 'Mahesh Kumar (Sanitation Inspector)',
        statusHistory: [
          { status: 'Submitted', changedBy: citizenPooja.name, remarks: 'Complaint submitted.', timestamp: new Date(Date.now() - 86400000 * 4) },
          { status: 'Under Review', changedBy: 'Smt. Sunita Rao (BDO)', remarks: 'Sanitation squad requisitioned for mechanized desilting drive.', timestamp: new Date(Date.now() - 86400000 * 2) }
        ],
        createdAt: new Date(Date.now() - 86400000 * 4)
      },
      {
        complaintId: 'CMP-2026-000005',
        citizen: citizenPooja._id,
        citizenName: citizenPooja.name,
        citizenMobile: citizenPooja.mobile,
        title: 'Uncollected Solid Garbage Dump at Main Market Square',
        category: 'Waste Management',
        description: 'The collection tipper truck has not serviced this disposal point for four days. Stray animals are scattering waste all over the pedestrian pavement.',
        location: 'Crossroad Junction near Milk Dairy',
        state: stateMH._id,
        district: distPune._id,
        taluka: talukaHaveli._id,
        region: gpShivapur._id,
        ward: shivapurWards[0]._id,
        imageUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80',
        imagePublicId: 'seed/garbage_dump',
        status: 'Resolved',
        adminRemark: 'Special tractor trolley dispatched. Waste cleared and area disinfected with lime.',
        assignedOfficer: 'Raju Swamy (Sanitation Supervisor)',
        statusHistory: [
          { status: 'Submitted', changedBy: citizenPooja.name, remarks: 'Initial filing.', timestamp: new Date(Date.now() - 86400000 * 5) },
          { status: 'In Progress', changedBy: 'Smt. Sunita Rao (BDO)', remarks: 'Collection truck reassigned.', timestamp: new Date(Date.now() - 86400000 * 2) },
          { status: 'Resolved', changedBy: 'Smt. Sunita Rao (BDO)', remarks: 'Special tractor trolley dispatched. Waste cleared and area disinfected with lime.', timestamp: new Date(Date.now() - 86400000) }
        ],
        resolvedAt: new Date(Date.now() - 86400000),
        createdAt: new Date(Date.now() - 86400000 * 5)
      }
    ];

    await Complaint.insertMany(complaints);

    console.log('\n======================================================');
    console.log('🎉 GRAMSETU DEMO DATABASE SEEDED SUCCESSFULLY!');
    console.log('======================================================');
    console.log('📍 LOCATION SYSTEM ESTABLISHED:');
    console.log('   • Region 1: Rampur Gram Panchayat (Bakshi Ka Talab, Lucknow, UP)');
    console.log('   • Region 2: Khed Shivapur Gram Panchayat (Haveli, Pune, MH)');
    console.log('------------------------------------------------------');
    console.log('🏢 REGIONAL ADMIN CREDENTIALS:');
    console.log('   1) Dr. Alok Verma (Rampur Gram Panchayat)');
    console.log('      Email:    admin.rampur@gramsetu.gov.in');
    console.log('      Password: Admin@123');
    console.log('      Has 3 assigned complaints (Water, Streetlight, Road)');
    console.log('');
    console.log('   2) Smt. Sunita Rao (Khed Shivapur Gram Panchayat)');
    console.log('      Email:    admin.shivapur@gramsetu.gov.in');
    console.log('      Password: Admin@123');
    console.log('      Has 2 assigned complaints (Drainage, Waste)');
    console.log('------------------------------------------------------');
    console.log('👤 VERIFIED CITIZEN CREDENTIALS:');
    console.log('   1) Ramesh Kumar Sharma (Rampur GP)');
    console.log('      Mobile:   9876543210');
    console.log('      Password: Citizen@123');
    console.log('');
    console.log('   2) Pooja Patel (Khed Shivapur GP)');
    console.log('      Mobile:   9123456780');
    console.log('      Password: Citizen@123');
    console.log('======================================================\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Database seeding failed:', error.message);
    process.exit(1);
  }
};

seedData();
