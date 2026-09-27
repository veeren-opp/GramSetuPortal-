/**
 * GramSetu — Digital Gram Panchayat Portal
 * Core Application Framework & LocalStorage Data Layer
 * File: js/app.js
 */

// =============================================================================
// 1. LOCALSTORAGE KEYS & CONFIGURATION
// =============================================================================
const STORAGE_KEYS = {
  USERS: 'gramsetu_users',
  COMPLAINTS: 'gramsetu_complaints',
  ANNOUNCEMENTS: 'gramsetu_announcements',
  PROJECTS: 'gramsetu_projects',
  CURRENT_USER: 'gramsetu_current_user',
  COMPLAINT_COUNTER: 'gramsetu_complaint_counter'
};

// Category metadata with standard civic taxonomy and emojis
const CATEGORY_MAP = {
  'Roads': { icon: '🛣️', label: 'Roads & Connectivity' },
  'Street Lights': { icon: '💡', label: 'Street Lights & Electricity' },
  'Water Supply': { icon: '💧', label: 'Drinking Water & Handpumps' },
  'Sanitation': { icon: '🧹', label: 'Village Sanitation & Toilets' },
  'Drainage': { icon: '🌊', label: 'Drainage & Sewage Overflow' },
  'Electricity': { icon: '⚡', label: 'Power Grid & Transformers' },
  'Waste Management': { icon: '🗑️', label: 'Solid Waste & Garbage Collection' },
  'Other': { icon: '📋', label: 'Other Village Grievance' }
};

// Status labels & CSS classes
const STATUS_CONFIG = {
  'Submitted': { class: 'pill-submitted', label: 'Submitted', icon: '📝' },
  'Under Review': { class: 'pill-under-review', label: 'Under Review', icon: '🔍' },
  'In Progress': { class: 'pill-in-progress', label: 'In Progress', icon: '⚡' },
  'Resolved': { class: 'pill-resolved', label: 'Resolved', icon: '✓' },
  'Rejected': { class: 'pill-rejected', label: 'Rejected', icon: '✕' }
};

// SVG-based realistic placeholder base64 thumbnails for initial demo complaints
// (Pure inline data URLs so no external server or image files are required)
const DEMO_IMAGES = {
  streetlight: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231a261d"/><circle cx="200" cy="110" r="45" fill="%23384f3c"/><circle cx="200" cy="110" r="28" fill="%23c4841d" opacity="0.6"/><path d="M195,110 L195,270 L205,270 L205,110 Z" fill="%236b7280"/><rect x="175" y="270" width="50" height="15" fill="%234b5563"/><text x="200" y="294" font-family="sans-serif" font-size="12" fill="%23e5e7eb" text-anchor="middle">GramSetu Field Photo: Street Light Pole #14</text></svg>',
  handpump: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23243329"/><rect x="185" y="80" width="30" height="180" fill="%234b5563"/><path d="M150,130 L185,120 L185,140 Z" fill="%23374151"/><rect x="190" y="100" width="110" height="12" rx="4" transform="rotate(-15 190 100)" fill="%23b4432e"/><ellipse cx="200" cy="265" rx="70" ry="18" fill="%23334155"/><text x="200" y="294" font-family="sans-serif" font-size="12" fill="%23e5e7eb" text-anchor="middle">GramSetu Field Photo: Broken Handpump Handle</text></svg>',
  drainage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%232b352e"/><rect x="40" y="180" width="320" height="70" fill="%232d6e8e" opacity="0.8"/><circle cx="150" cy="210" r="14" fill="%231e40af"/><circle cx="260" cy="220" r="20" fill="%231e40af"/><text x="200" y="294" font-family="sans-serif" font-size="12" fill="%23e5e7eb" text-anchor="middle">GramSetu Field Photo: Waterlogging & Silt</text></svg>',
  pothole: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23374151"/><ellipse cx="200" cy="160" rx="110" ry="55" fill="%231f2937"/><ellipse cx="190" cy="155" rx="80" ry="35" fill="%23111827"/><text x="200" y="294" font-family="sans-serif" font-size="12" fill="%23e5e7eb" text-anchor="middle">GramSetu Field Photo: Road Damage / Pothole</text></svg>',
  waste: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%2328362d"/><rect x="150" y="120" width="100" height="120" rx="8" fill="%2315803d"/><rect x="140" y="105" width="120" height="15" rx="4" fill="%23166534"/><text x="200" y="294" font-family="sans-serif" font-size="12" fill="%23e5e7eb" text-anchor="middle">GramSetu Field Photo: Community Dustbin</text></svg>'
};

// =============================================================================
// 2. LOCALSTORAGE INITIAL SEEDING (RUNS ONCE ON FIRST LOAD)
// =============================================================================
function initDemoData() {
  // 2.1 Demo Users (1 Citizen, 1 Admin)
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const demoUsers = [
      {
        id: 'usr_admin_01',
        name: 'Rajesh Soni',
        email: 'admin@gramsetu.com',
        password: 'admin123',
        role: 'admin',
        designation: 'Gram Sevak / Administrative Officer',
        phone: '+91 94250 88101',
        createdAt: '2026-01-01T09:00:00.000Z'
      },
      {
        id: 'usr_citizen_01',
        name: 'Ramesh Patil',
        email: 'citizen@gramsetu.com',
        password: 'citizen123',
        role: 'citizen',
        ward: 'Ward 4 - Gandhi Chowk',
        phone: '+91 98220 12345',
        createdAt: '2026-01-10T10:30:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(demoUsers));
  }

  // 2.2 Complaint Sequence Counter
  if (!localStorage.getItem(STORAGE_KEYS.COMPLAINT_COUNTER)) {
    localStorage.setItem(STORAGE_KEYS.COMPLAINT_COUNTER, '5');
  }

  // 2.3 Initial Citizen Complaints
  if (!localStorage.getItem(STORAGE_KEYS.COMPLAINTS)) {
    const demoComplaints = [
      {
        id: 'CMP-2026-0001',
        citizenId: 'citizen@gramsetu.com',
        citizenName: 'Ramesh Patil',
        citizenPhone: '+91 98220 12345',
        title: 'Broken Street Light near Primary School',
        category: 'Street Lights',
        ward: 'Ward 2 - Shanti Nagar',
        location: 'Near Zilla Parishad Primary School, Pole #14',
        priority: 'High',
        description: 'The street light fixture has been malfunctioning and sparking during rainfall. The road is pitch dark at night, posing safety issues for children and villagers.',
        image: DEMO_IMAGES.streetlight,
        status: 'In Progress',
        adminRemark: 'Maintenance team dispatched. Replacement 45W LED fixture ordered from PWD vendor.',
        assignedOfficer: 'Er. Suresh Kale (PWD)',
        createdAt: '2026-09-18T14:20:00.000Z',
        updatedAt: '2026-09-20T11:00:00.000Z'
      },
      {
        id: 'CMP-2026-0002',
        citizenId: 'citizen@gramsetu.com',
        citizenName: 'Ramesh Patil',
        citizenPhone: '+91 98220 12345',
        title: 'Drinking Water Handpump Handle Broken',
        category: 'Water Supply',
        ward: 'Ward 4 - Gandhi Chowk',
        location: 'Near Old Banyan Tree, Gandhi Chowk',
        priority: 'High',
        description: 'The iron handle of the community India Mark II handpump broke off. Over 40 households depend on this point for daily drinking water.',
        image: DEMO_IMAGES.handpump,
        status: 'Resolved',
        adminRemark: 'Handpump chain, cylinder washer, and handle replaced by Jal Nigam mechanic. Water supply restored.',
        assignedOfficer: 'Mahendra Yadav (Jal Nigam)',
        createdAt: '2026-09-15T09:15:00.000Z',
        updatedAt: '2026-09-17T16:45:00.000Z'
      },
      {
        id: 'CMP-2026-0003',
        citizenId: 'sunita.shinde@example.com',
        citizenName: 'Sunita Shinde',
        citizenPhone: '+91 97654 33210',
        title: 'Clogged Open Drain Overflowing on Road',
        category: 'Drainage',
        ward: 'Ward 1 - Shivaji Nagar',
        location: 'Behind Weekly Haat Bazar Lane',
        priority: 'Medium',
        description: 'Heavy silt and plastic bags have choked the main drainage channel. Foul-smelling wastewater is overflowing onto the pedestrian pathway.',
        image: DEMO_IMAGES.drainage,
        status: 'Under Review',
        adminRemark: 'Ward Member and Sanitation Supervisor inspected the site. Silt clearing drive scheduled for Friday.',
        assignedOfficer: 'Kishore Jadhav (Sanitation Lead)',
        createdAt: '2026-09-21T08:40:00.000Z',
        updatedAt: '2026-09-22T10:15:00.000Z'
      },
      {
        id: 'CMP-2026-0004',
        citizenId: 'anil.deshmukh@example.com',
        citizenName: 'Anil Deshmukh',
        citizenPhone: '+91 94231 77654',
        title: 'Dangerous Potholes on Main Approach Road',
        category: 'Roads',
        ward: 'Ward 3 - Bazar Peth',
        location: 'Main connecting road towards State Highway 24',
        priority: 'Medium',
        description: 'Recent monsoon downpours created deep potholes measuring over 1 foot wide. Two-wheelers frequently skid and suffer punctures.',
        image: DEMO_IMAGES.pothole,
        status: 'Submitted',
        adminRemark: '',
        assignedOfficer: 'Pending Assignment',
        createdAt: '2026-09-23T16:05:00.000Z',
        updatedAt: '2026-09-23T16:05:00.000Z'
      },
      {
        id: 'CMP-2026-0005',
        citizenId: 'citizen@gramsetu.com',
        citizenName: 'Ramesh Patil',
        citizenPhone: '+91 98220 12345',
        title: 'Garbage Accumulation near Village Community Hall',
        category: 'Waste Management',
        ward: 'Ward 5 - Ambedkar Colony',
        location: 'Adjacent to Samaj Mandir Community Hall',
        priority: 'Low',
        description: 'Solid waste and post-function leftovers were dumped near the boundary wall attracting stray animals.',
        image: DEMO_IMAGES.waste,
        status: 'Resolved',
        adminRemark: 'Sanitation squad completed clearance. Two community waste bins installed with weekly lifting schedule.',
        assignedOfficer: 'Kishore Jadhav (Sanitation Lead)',
        createdAt: '2026-09-12T11:20:00.000Z',
        updatedAt: '2026-09-14T15:30:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(demoComplaints));
  }

  // 2.4 Village Announcements
  if (!localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS)) {
    const demoAnnouncements = [
      {
        id: 'ANN-001',
        title: 'Quarterly Gram Sabha General Body Meeting',
        category: 'Meeting',
        date: '2026-10-02',
        description: 'All adult residents of Sundarpur are invited to attend the Gandhi Jayanti Gram Sabha at 10:00 AM in the Panchayat Bhawan. Agenda: Village development audit, water conservation scheme, and beneficiary selection.',
        postedBy: 'Sarpanch / Gram Sevak Office'
      },
      {
        id: 'ANN-002',
        title: 'Scheduled Drinking Water Pipeline Maintenance',
        category: 'Water Supply',
        date: '2026-09-28',
        description: 'Drinking water distribution in Ward 2 and Ward 4 will remain shut off from 8:00 AM to 4:00 PM due to mainline valve replacement near the overhead water tank. Please store adequate water.',
        postedBy: 'Rural Water Supply Dept'
      },
      {
        id: 'ANN-003',
        title: 'Swachh Village Cleanliness & Tree Plantation Drive',
        category: 'Cleanliness',
        date: '2026-10-05',
        description: 'Joint voluntary shramdaan by village youth and self-help groups. 200 saplings will be planted along the village ring road. Tools and gloves will be provided by Panchayat.',
        postedBy: 'Village Sanitation Committee'
      },
      {
        id: 'ANN-004',
        title: 'Special Mission Indradhanush Child Immunization Camp',
        category: 'Health',
        date: '2026-10-10',
        description: 'Free vaccination camp for children aged 0-5 years and pregnant mothers at the Primary Health Sub-Centre, Ward 1. Timings: 9:00 AM to 2:00 PM.',
        postedBy: 'Primary Health Centre (PHC)'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(demoAnnouncements));
  }

  // 2.5 Village Development Projects
  if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
    const demoProjects = [
      {
        id: 'PRJ-2026-01',
        name: 'Solar-Powered RO Drinking Water Purification Plant',
        scheme: 'Jal Jeevan Mission (Har Ghar Jal)',
        category: 'Water Supply',
        ward: 'Ward 2 & Ward 3',
        budgetLakhs: 18.50,
        spentLakhs: 14.20,
        progressPercent: 78,
        status: 'Ongoing',
        startDate: '2026-04-15',
        targetDate: '2026-11-30',
        contractor: 'M/s GreenVolt Water Solutions',
        officer: 'Er. Rajesh Soni (Gram Sevak)',
        description: 'Installation of a 1,000 LPH solar dual-powered RO filter with 4 dispensing points to guarantee pure fluorosis-free drinking water.'
      },
      {
        id: 'PRJ-2026-02',
        name: 'Cement Concrete Road & Paver Blocks in Internal Lanes',
        scheme: '15th Finance Commission Tied Grant',
        category: 'Roads',
        ward: 'Ward 4 - Gandhi Chowk',
        budgetLakhs: 32.00,
        spentLakhs: 32.00,
        progressPercent: 100,
        status: 'Completed',
        startDate: '2026-01-10',
        targetDate: '2026-07-20',
        contractor: 'Sharda Civil Infrastructure Ltd.',
        officer: 'Er. Suresh Kale (PWD)',
        description: 'Construction of 1.4 km concrete pavement with interlocking storm-water edge blocks and LED street lighting conduits.'
      },
      {
        id: 'PRJ-2026-03',
        name: 'Underground Drainage & Sullage Pipeline Phase-1',
        scheme: 'Swachh Bharat Mission (Gramin)',
        category: 'Drainage',
        ward: 'Ward 1 & Ward 5',
        budgetLakhs: 24.00,
        spentLakhs: 9.60,
        progressPercent: 40,
        status: 'Ongoing',
        startDate: '2026-06-01',
        targetDate: '2027-01-15',
        contractor: 'Vikas Engineering Works',
        officer: 'Kishore Jadhav (Sanitation Lead)',
        description: 'Laying 2.8 km of closed PVC drainage lines to stop open wastewater flow into residential compounds and fields.'
      },
      {
        id: 'PRJ-2026-04',
        name: 'Digital Panchayat Citizen Facilitation Centre & Library',
        scheme: 'Panchayat Development Fund',
        category: 'Digital Services',
        ward: 'Ward 1 - Panchayat Bhawan',
        budgetLakhs: 12.00,
        spentLakhs: 2.40,
        progressPercent: 20,
        status: 'Planned',
        startDate: '2026-09-01',
        targetDate: '2027-03-31',
        contractor: 'State IT Infrastructure Agency',
        officer: 'Rajesh Soni (Gram Sevak)',
        description: 'Establishing 6 computer workstations, broadband fiber connectivity, digital certificate printing, and student competitive exam reading room.'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(demoProjects));
  }
}

// Call on module load
initDemoData();

// =============================================================================
// 3. STORAGE ACCESSORS & HELPERS
// =============================================================================
function getStorage(key, defaultValue = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return defaultValue;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error(`Error writing ${key} to localStorage:`, err);
    if (err.name === 'QuotaExceededError' || err.code === 22) {
      showToast('Storage limit reached! Please use a smaller image or clean older data.', 'error');
    } else {
      showToast('Failed to save data. Please check browser storage settings.', 'error');
    }
    return false;
  }
}

/**
 * Generates a unique sequential complaint ID formatted as CMP-2026-0001
 */
function generateComplaintId() {
  const year = new Date().getFullYear();
  let count = parseInt(localStorage.getItem(STORAGE_KEYS.COMPLAINT_COUNTER) || '0', 10);
  count += 1;
  localStorage.setItem(STORAGE_KEYS.COMPLAINT_COUNTER, count.toString());
  const padded = String(count).padStart(4, '0');
  return `CMP-${year}-${padded}`;
}

// =============================================================================
// 4. IMAGE PROCESSING & CLIENT-SIDE COMPRESSION
// =============================================================================
/**
 * Uses HTML5 Canvas to scale and compress user-uploaded photos before saving to localStorage.
 * This guarantees that even 5MB smartphone camera photos fit safely within localStorage quota!
 */
function compressImage(file, maxWidth = 900, maxHeight = 700, quality = 0.75) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }
    // Check type
    if (!file.type.match(/image\/(jpeg|jpg|png|webp)/i)) {
      reject(new Error('Only JPG, JPEG, and PNG images are supported.'));
      return;
    }
    // Check original file size limit (max 3MB before compression)
    if (file.size > 3 * 1024 * 1024) {
      reject(new Error('File is too large. Please select an image under 3 MB.'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Invalid image content.'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Maintain aspect ratio
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to optimized JPEG data URL
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// =============================================================================
// 5. TOAST NOTIFICATION SYSTEM
// =============================================================================
function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  else if (type === 'error') icon = '⚠️';
  else if (type === 'warning') icon = '🔔';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-msg">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, duration);
}

// =============================================================================
// 6. MODAL HELPERS
// =============================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal-backdrop.open');
    openModals.forEach((m) => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// Full-screen image lightbox inspector
function viewFullImage(src, title = 'Photograph') {
  let viewer = document.getElementById('imageViewerModal');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.id = 'imageViewerModal';
    viewer.className = 'modal-backdrop image-viewer-modal';
    viewer.innerHTML = `
      <div class="modal-box">
        <button class="modal-close" onclick="closeModal('imageViewerModal')">×</button>
        <h4 id="imageViewerTitle" style="color:#EFE8D6; margin-bottom:1rem; font-family:var(--sans);">Photograph View</h4>
        <img id="imageViewerImg" src="" alt="Full view" class="image-viewer-display">
      </div>
    `;
    document.body.appendChild(viewer);
  }
  document.getElementById('imageViewerTitle').textContent = title;
  document.getElementById('imageViewerImg').src = src;
  openModal('imageViewerModal');
}

// =============================================================================
// 7. FORMATTERS & SANITIZATION
// =============================================================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(isoString) {
  if (!isoString) return '—';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch (e) {
    return isoString;
  }
}

function formatDateTime(isoString) {
  if (!isoString) return '—';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return isoString;
  }
}

function getStatusBadge(status) {
  const conf = STATUS_CONFIG[status] || { class: 'pill-submitted', label: status, icon: '•' };
  return `<span class="pill ${conf.class}">${conf.icon} ${conf.label}</span>`;
}

function getPriorityBadge(priority) {
  const p = (priority || 'Medium').toLowerCase();
  let icon = '🟡';
  if (p === 'high') icon = '🔴';
  else if (p === 'low') icon = '🟢';
  return `<span class="priority-tag priority-${p}">${icon} ${priority}</span>`;
}

function getCategoryIcon(cat) {
  return CATEGORY_MAP[cat] ? CATEGORY_MAP[cat].icon : '📋';
}

// =============================================================================
// 8. HEADER AUTH STATE & MOBILE NAV SYNC
// =============================================================================
function syncHeaderAuth() {
  const user = getStorage(STORAGE_KEYS.CURRENT_USER, null);
  const container = document.getElementById('headerAuthContainer');
  if (!container) return;

  if (user) {
    const isAdmin = user.role === 'admin';
    const dashboardLink = isAdmin ? 'admin.html' : 'citizen.html';
    const roleBadgeText = isAdmin ? '🔑 Admin' : '🧑‍🌾 Citizen';
    const chipClass = isAdmin ? 'user-chip admin-badge' : 'user-chip';
    const initial = (user.name || 'U').charAt(0).toUpperCase();

    container.innerHTML = `
      <a href="${dashboardLink}" class="${chipClass}" title="Go to ${user.role} dashboard">
        <span class="user-chip-avatar">${initial}</span>
        <span>${escapeHtml(user.name.split(' ')[0])} <small style="font-weight:400; opacity:0.8;">(${roleBadgeText})</small></span>
      </a>
      <a href="${dashboardLink}" class="btn btn-outline btn-sm">Dashboard</a>
      <button class="btn btn-sm btn-outline-ochre" onclick="Auth.logout()">Log out</button>
    `;
  } else {
    container.innerHTML = `
      <a href="login.html" class="btn btn-primary btn-sm">Log in</a>
    `;
  }
}

// Initialize navigation toggler on page load
document.addEventListener('DOMContentLoaded', () => {
  syncHeaderAuth();

  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.site-nav');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});
