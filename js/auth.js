/**
 * GramSetu — Digital Gram Panchayat Portal
 * Authentication & Access Control Module
 * File: js/auth.js
 */

const Auth = {
  /**
   * Retrieves the currently logged-in user profile from localStorage
   */
  getCurrentUser() {
    return getStorage(STORAGE_KEYS.CURRENT_USER, null);
  },

  /**
   * Validates user credentials against the registered users directory
   * @param {string} email
   * @param {string} password
   * @param {string} role 'citizen' | 'admin' | null
   */
  login(email, password, role = null) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    if (!cleanEmail || !cleanPass) {
      return { success: false, message: 'Please provide both email address and password.' };
    }

    const users = getStorage(STORAGE_KEYS.USERS, []);
    const user = users.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.password === cleanPass
    );

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password. Please verify credentials or use demo accounts.'
      };
    }

    // Role check if explicitly requested
    if (role && user.role !== role) {
      return {
        success: false,
        message: `Account found, but role is "${user.role}". Please switch role to ${user.role}.`
      };
    }

    // Save session in localStorage
    const sessionUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      ward: user.ward || '',
      phone: user.phone || '',
      designation: user.designation || '',
      loginAt: new Date().toISOString()
    };
    setStorage(STORAGE_KEYS.CURRENT_USER, sessionUser);

    return { success: true, user: sessionUser };
  },

  /**
   * Clears session and redirects to login page
   */
  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    showToast('Logged out successfully.', 'info');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 400);
  },

  /**
   * Protection guard for secure pages
   * @param {string} requiredRole 'citizen' | 'admin' | null
   */
  requireAuth(requiredRole = null) {
    const user = this.getCurrentUser();
    if (!user) {
      // Save attempted page for back redirect if needed
      sessionStorage.setItem('gramsetu_redirect_after_login', window.location.pathname);
      window.location.href = 'login.html';
      return null;
    }

    if (requiredRole && user.role !== requiredRole) {
      if (user.role === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'citizen.html';
      }
      return null;
    }

    return user;
  },

  /**
   * If user is already logged in, redirect them directly to their respective portal
   */
  redirectIfLoggedIn() {
    const user = this.getCurrentUser();
    if (user) {
      if (user.role === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'citizen.html';
      }
    }
  }
};
