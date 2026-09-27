/**
 * GramSetu Citizen API Client & Toast Notification System
 */
const GramSetuAPI = (() => {
  const getBaseUrl = () => {
    return (window.APP_CONFIG && window.APP_CONFIG.API_BASE_URL) || 'http://localhost:5000/api';
  };

  const getHeaders = (isMultipart = false) => {
    const headers = {};
    if (!isMultipart) {
      headers['Content-Type'] = 'application/json';
    }
    const token = localStorage.getItem('gramsetu_citizen_token');
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
        localStorage.removeItem('gramsetu_citizen_token');
        localStorage.removeItem('gramsetu_citizen_user');
        const isAuthPage = window.location.pathname.endsWith('login.html') ||
                           window.location.pathname.endsWith('register.html') ||
                           window.location.pathname.endsWith('index.html');
        if (!isAuthPage) {
          window.location.href = 'login.html?session=expired';
        }
      }
      const errorMsg = data.message || `Request failed (${response.status})`;
      throw new Error(errorMsg);
    }

    return data;
  };

  return {
    async get(endpoint) {
      try {
        const response = await fetch(`${getBaseUrl()}${endpoint}`, {
          method: 'GET',
          headers: getHeaders()
        });
        return await handleResponse(response);
      } catch (err) {
        console.error(`API GET ${endpoint} Error:`, err);
        throw err;
      }
    },

    async post(endpoint, body) {
      try {
        const response = await fetch(`${getBaseUrl()}${endpoint}`, {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify(body)
        });
        return await handleResponse(response);
      } catch (err) {
        console.error(`API POST ${endpoint} Error:`, err);
        throw err;
      }
    },

    async postMultipart(endpoint, formData) {
      try {
        const response = await fetch(`${getBaseUrl()}${endpoint}`, {
          method: 'POST',
          headers: getHeaders(true),
          body: formData
        });
        return await handleResponse(response);
      } catch (err) {
        console.error(`API POST Multipart ${endpoint} Error:`, err);
        throw err;
      }
    },

    async put(endpoint, body) {
      try {
        const response = await fetch(`${getBaseUrl()}${endpoint}`, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify(body)
        });
        return await handleResponse(response);
      } catch (err) {
        console.error(`API PUT ${endpoint} Error:`, err);
        throw err;
      }
    }
  };
})();

/**
 * Toast Notification System
 */
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
