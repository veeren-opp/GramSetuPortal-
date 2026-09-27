/**
 * GramSetu Citizen Authentication & Navbar Controller
 */
const CitizenAuth = {
  TOKEN_KEY: 'gramsetu_citizen_token',
  USER_KEY: 'gramsetu_citizen_user',

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
    return !!(token && user && user.role === 'citizen');
  },

  requireAuth() {
    if (!this.isAuthenticated()) {
      const currentUrl = encodeURIComponent(window.location.pathname);
      window.location.href = `login.html?redirect=${currentUrl}`;
      return false;
    }
    return true;
  },

  redirectIfAuthenticated() {
    if (this.isAuthenticated()) {
      window.location.href = 'dashboard.html';
      return true;
    }
    return false;
  },

  logout() {
    try {
      GramSetuAPI.post('/auth/logout', {}).catch(() => {});
    } finally {
      this.clearSession();
      window.location.href = 'login.html?action=logged_out';
    }
  },

  initNav() {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) return;

    const user = this.getUser();
    if (this.isAuthenticated() && user) {
      navMenu.innerHTML = `
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="dashboard.html" class="nav-link">Dashboard</a></li>
        <li><a href="submit-complaint.html" class="nav-link">Report a Problem</a></li>
        <li><a href="complaints.html" class="nav-link">My Complaints</a></li>
        <li><a href="profile.html" class="nav-link">Profile</a></li>
        <li style="display: flex; align-items: center; gap: 0.5rem; margin-left: 0.5rem;">
          <span style="font-size: 0.8125rem; font-weight: 700; color: #1e293b; background: #f1f5f9; padding: 0.35rem 0.65rem; border-radius: 9999px;">
            👤 ${user.name.split(' ')[0]}
          </span>
          <button onclick="CitizenAuth.logout()" class="btn btn-secondary btn-sm">Logout</button>
        </li>
      `;
    } else {
      navMenu.innerHTML = `
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="index.html#services" class="nav-link">Services</a></li>
        <li><a href="index.html#about" class="nav-link">About</a></li>
        <li><a href="index.html#help" class="nav-link">Help</a></li>
        <li><a href="login.html" class="nav-link">Login</a></li>
        <li><a href="register.html" class="btn btn-primary btn-sm">Register</a></li>
      `;
    }

    // Set active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = navMenu.querySelectorAll('.nav-link');
    links.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CitizenAuth.initNav();
});
