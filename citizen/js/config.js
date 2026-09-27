/**
 * GramSetu Citizen Portal Configuration
 * Configure backend API endpoint.
 * Local development: 'http://localhost:5000/api'
 * Production deployment (e.g. Render): 'https://your-gramsetu-api.onrender.com/api'
 */
window.APP_CONFIG = {
  API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api'
    : 'http://localhost:5000/api', // Replace with production Render backend URL when deployed
  PORTAL_NAME: 'GramSetu Citizen Portal',
  VERSION: '1.0.0'
};
