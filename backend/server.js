require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const authRoutes = require('./routes/authRoutes');
const locationRoutes = require('./routes/locationRoutes');
const citizenRoutes = require('./routes/citizenRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Ensure local uploads directory exists (fallback when Cloudinary is not configured)
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 1. Security Headers (Helmet)
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false // Allows loading images across cloud CDNs
  })
);

// 2. CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:5000',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:8080',
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  process.env.CITIZEN_URL,
  process.env.ADMIN_URL
].filter(Boolean);

const expandedOrigins = allowedOrigins.flatMap((o) =>
  o.includes(',') ? o.split(',').map((item) => item.trim()) : o
);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      const isAllowed =
        expandedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.endsWith('.netlify.app') ||
        origin.endsWith('.onrender.com') ||
        origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:');

      if (isAllowed) {
        callback(null, true);
      } else {
        // Permissive in development mode
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

app.options('*', cors());

// 3. Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again after 15 minutes.'
  }
});
app.use('/api/', apiLimiter);

// 4. Request Body Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 5. Static uploads directory for local image fallback
app.use('/uploads', express.static(uploadsDir));

// 6. Base & Health Endpoints
app.get('/', (req, res) => {
  res.json({
    project: 'GramSetu Civic Redressal API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      auth: '/api/auth',
      locations: '/api/locations',
      citizen: '/api/citizen',
      complaints: '/api/complaints',
      admin: '/api/admin',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: require('mongoose').connection.readyState === 1 ? 'connected' : 'disconnected',
    storageMode: process.env.CLOUDINARY_CLOUD_NAME ? 'Cloudinary Cloud Storage' : 'Local Disk Fallback',
    otpMode: process.env.OTP_MODE || 'development'
  });
});

// 7. Route Mounting
app.use('/api/auth', authRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/citizen', citizenRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/admin', adminRoutes);

// 8. 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' not found.`
  });
});

// 9. Centralized Error Handler
app.use(errorHandler);

// 10. Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 GramSetu Civic API running on http://localhost:${PORT}`);
    console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`☁️ Cloudinary: ${process.env.CLOUDINARY_CLOUD_NAME ? 'Configured' : 'Local Fallback'}`);
    console.log(`📱 OTP Mode:   ${process.env.OTP_MODE || 'development'}`);
    console.log(`=======================================================`);
  });
};

startServer();

module.exports = app;
