const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gramsetu';
    
    // Mask sensitive credentials in logs
    const maskedUri = mongoUri.replace(/:([^:@]{4})[^:@]*@/, ':****@');
    console.log(`🔌 Connecting to MongoDB: ${maskedUri}...`);

    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4 // IPv4 preference
    });

    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('💡 Tip: Ensure your MONGODB_URI in backend/.env is valid and your IP is allowed in MongoDB Atlas Network Access (0.0.0.0/0).');
    // Allow app to boot in dev or retry
    return null;
  }
};

module.exports = connectDB;
