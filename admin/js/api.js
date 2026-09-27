/**
 * GramSetu Admin API Client & Toast System
 */
const AdminAPI = (() => {
  const getBaseUrl = () => {
    return (window.APP_CONFIG && window.APP_CONFIG.API_BASE_URL) || 'http://localhost:5000/api';
  };

  const getHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem('gramsetu_admin_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  };

  const handleResponse = async (response) => {
    let data;
    try {
      data = await response.json();
    } catch (e) {
      data = { success: false, message: 'Server returned a non-JSON response.' };
    }

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('gramsetu_admin_token');
        localStorage.removeItem('gramsetu_admin_user');
        if (!window.location.pathname.endsWith('index.html')) {
          window.location.href = 'index.html?session=expired';
        }
      }
      const errorMsg = data.message || `Request failed with status ${response.status}`;
      throw new Error(errorMsg);
    }

    return data;
  };

  return {
    async get(endpoint) {
      const response = await fetch(`${getBaseUrl()}${endpoint}`, {
        method: 'GET',
        headers: getHeaders()
      });
      return await handleResponse(response);
    },

    async post(endpoint, body) {
      const response = await fetch(`${getBaseUrl()}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
      });
      return await handleResponse(response);
    },

    async patch(endpoint, body) {
      const response = await fetch(`${getBaseUrl()}${endpoint}`, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify(body)
      });
      return await handleResponse(response);
    },

    async put(endpoint, body) {
      const response = await fetch(`${getBaseUrl()}${endpoint}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(body)
      });
      return await handleResponse(response);
    }
  };
})();

function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
