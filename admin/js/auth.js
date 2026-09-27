/**
 * GramSetu Regional Admin Auth & Navbar Controller
 */
const AdminAuth = {
  TOKEN_KEY: 'gramsetu_admin_token',
  USER_KEY: 'gramsetu_admin_user',

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  },

  getUser() {
    try {
      const data = localStorage.getItem(this.USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  setSession(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  },

  clearSession() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  },

  isAuthenticated() {
    const token = this.getToken();
    const user = this.getUser();
    return !!(token && user && (user.role === 'regional_admin' || user.role === 'super_admin'));
  },

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  },

  logout() {
    try {
      AdminAPI.post('/auth/logout', {}).catch(() => {});
    } finally {
      this.clearSession();
      window.location.href = 'index.html?action=logged_out';
    }
  },

  initHeader() {
    const user = this.getUser();
    if (!user) return;

    // Update Jurisdiction Pill
    const badge = document.getElementById('header-jurisdiction-badge');
    if (badge) {
      const regionName = user.region ? (user.region.name || user.region) : 'Assigned Jurisdiction';
      badge.textContent = `📍 ${regionName}`;
    }

    // Update Admin Profile display
    const nameEl = document.getElementById('header-admin-name');
    if (nameEl) nameEl.textContent = user.name;

    const desigEl = document.getElementById('header-admin-desig');
    if (desigEl) desigEl.textContent = user.designation || 'Regional Officer';

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
    const links = document.querySelectorAll('.admin-nav-link');
    links.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.pathname.endsWith('index.html')) {
    AdminAuth.initHeader();
  }
});
