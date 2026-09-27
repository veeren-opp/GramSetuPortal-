# GramSetu (ग्राम सेतु) — Complete Consolidated Source Code

This single file contains the complete source code for all project sub-files, organized and clearly demarcated.

## Table of Contents
- [css/style.css](#file-css_style_css)
- [js/app.js](#file-js_app_js)
- [js/auth.js](#file-js_auth_js)
- [js/citizen.js](#file-js_citizen_js)
- [js/complaint.js](#file-js_complaint_js)
- [js/track.js](#file-js_track_js)
- [js/admin.js](#file-js_admin_js)
- [index.html](#file-index_html)
- [login.html](#file-login_html)
- [citizen.html](#file-citizen_html)
- [complaint.html](#file-complaint_html)
- [track.html](#file-track_html)
- [admin.html](#file-admin_html)
- [gramsetu_single_file.html](#file-gramsetu_single_file_html)
- [README.md](#file-readme_md)

---

## File: `css/style.css` <a id="file-css_style_css"></a>

```css
/* ==========================================================================
   GramSetu — Digital Gram Panchayat & Smart Village Portal
   Comprehensive Shared Stylesheet (HTML5, CSS3, Vanilla JS)
   ========================================================================== */

:root {
  /* Earthy Green & Ochre Government Theme */
  --primary-950: #0e2014;
  --primary-900: #16301F;
  --primary-800: #1a442d;
  --primary-700: #1F5C3F;
  --primary-600: #2a7350;
  --primary-500: #3D8A63;
  --primary-300: #88c2a3;
  --primary-100: #E4EFE7;
  --primary-50:  #F2F8F4;

  --accent-ochre: #C4841D;
  --accent-ochre-dark: #A66A12;
  --accent-ochre-light: #FBEED8;
  --accent-blue: #2D6E8E;
  --accent-blue-light: #E8EEF3;

  --success-color: #2F7A4F;
  --success-bg: #E1F2E6;
  --warning-color: #C4841D;
  --warning-bg: #FDF3E3;
  --danger-color: #B4432E;
  --danger-bg: #FCE8E6;
  --info-color: #2D6E8E;
  --info-bg: #E8EEF3;

  --cream-bg: #FBF7EE;
  --paper: #FFFDF8;
  --paper-card: #FFFFFF;
  --text-ink: #202A1F;
  --text-muted: #6B6355;
  --border-soil: #E4DCC8;
  --border-light: #EFE7D8;

  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 3px rgba(22, 48, 31, 0.08);
  --shadow-md: 0 4px 12px rgba(22, 48, 31, 0.08);
  --shadow-lg: 0 10px 25px rgba(22, 48, 31, 0.12);
  --shadow-xl: 0 20px 35px rgba(22, 48, 31, 0.18);

  --serif: 'Lora', Georgia, serif;
  --sans: 'Hind', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  --transition: all 0.2s ease-in-out;
}

/* Base & Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--sans);
  color: var(--text-ink);
  background: var(--cream-bg);
  line-height: 1.55;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--serif);
  color: var(--primary-900);
  margin-top: 0;
  font-weight: 600;
  line-height: 1.25;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

p:last-child {
  margin-bottom: 0;
}

a {
  color: var(--primary-700);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--accent-ochre-dark);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
}

.wrap {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.main-content {
  flex: 1;
}

/* ==========================================================================
   TOP GOVERNMENT BANNER
   ========================================================================== */
.top-gov-strip {
  background: var(--primary-900);
  color: #EFE8D6;
  font-size: 0.8rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(239, 232, 214, 0.15);
}

.top-gov-strip .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.top-gov-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.top-gov-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.panchayat-pill {
  background: rgba(239, 232, 214, 0.12);
  padding: 0.15rem 0.6rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: #D8CFAE;
  border: 1px solid rgba(239, 232, 214, 0.2);
}

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
.site-header {
  background: var(--paper);
  border-bottom: 1px solid var(--border-soil);
  position: sticky;
  top: 0;
  z-index: 40;
  box-shadow: 0 2px 8px rgba(22, 48, 31, 0.04);
}

.site-header .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.5rem;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.brand-emblem {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  border: 1.5px solid var(--primary-500);
  flex-shrink: 0;
  box-shadow: inset 0 0 0 2px #FFFDF8;
}

.brand-title {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-900);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.brand-name small {
  display: block;
  font-family: var(--sans);
  font-weight: 500;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

/* Nav links */
.site-nav {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.site-nav a {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-ink);
  padding: 0.35rem 0;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.site-nav a:hover,
.site-nav a.active {
  color: var(--primary-700);
  border-bottom-color: var(--accent-ochre);
}

.nav-right-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* User profile chip in header */
.user-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  background: var(--primary-50);
  border: 1px solid var(--primary-100);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary-900);
}

.user-chip-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary-700);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.user-chip.admin-badge {
  background: var(--accent-ochre-light);
  border-color: #EAD3A5;
  color: var(--accent-ochre-dark);
}

.user-chip.admin-badge .user-chip-avatar {
  background: var(--accent-ochre-dark);
}

/* Mobile Nav Toggle */
.mobile-nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--primary-900);
}

/* ==========================================================================
   BUTTONS
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  font-family: var(--sans);
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.25;
  transition: var(--transition);
  white-space: nowrap;
}

.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  background: var(--primary-700);
  color: #fff;
  border-color: var(--primary-700);
}
.btn-primary:hover {
  background: var(--primary-900);
  border-color: var(--primary-900);
  color: #fff;
}

.btn-ochre {
  background: var(--accent-ochre);
  color: #241800;
  border-color: var(--accent-ochre);
}
.btn-ochre:hover {
  background: var(--accent-ochre-dark);
  border-color: var(--accent-ochre-dark);
  color: #fff;
}

.btn-outline {
  background: transparent;
  border-color: var(--primary-500);
  color: var(--primary-700);
}
.btn-outline:hover {
  background: var(--primary-100);
  color: var(--primary-900);
}

.btn-outline-ochre {
  background: transparent;
  border-color: var(--accent-ochre);
  color: var(--accent-ochre-dark);
}
.btn-outline-ochre:hover {
  background: var(--accent-ochre-light);
}

.btn-danger {
  background: var(--danger-color);
  color: #fff;
  border-color: var(--danger-color);
}
.btn-danger:hover {
  background: #963321;
}

.btn-sm {
  font-size: 0.78rem;
  padding: 0.38rem 0.8rem;
  border-radius: var(--radius-xs);
}

.btn-lg {
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-md);
}

.btn-block {
  width: 100%;
}

.btn:disabled,
.btn[disabled] {
  opacity: 0.55;
  cursor: not-allowed;
  pointer-events: none;
}

/* ==========================================================================
   BADGES & PILLS
   ========================================================================== */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
}

/* Status variants */
.pill-submitted {
  background: #E8EEF3;
  color: var(--accent-blue);
  border: 1px solid #CBDCE6;
}

.pill-under-review,
.pill-under_review {
  background: var(--accent-ochre-light);
  color: var(--accent-ochre-dark);
  border: 1px solid #EAD3A5;
}

.pill-in-progress,
.pill-in_progress {
  background: var(--primary-100);
  color: var(--primary-700);
  border: 1px solid #C4DFC9;
}

.pill-resolved {
  background: var(--success-bg);
  color: var(--success-color);
  border: 1px solid #B8E4C5;
}

.pill-rejected {
  background: var(--danger-bg);
  color: var(--danger-color);
  border: 1px solid #F3C4BE;
}

/* Priority variants */
.priority-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-xs);
}
.priority-low {
  background: #EFF6FF;
  color: #1D4ED8;
}
.priority-medium {
  background: #FFFBEB;
  color: #B45309;
}
.priority-high {
  background: #FEF2F2;
  color: #B91C1C;
}

/* Category badge */
.category-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--cream-bg);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-full);
  padding: 0.2rem 0.6rem;
  font-size: 0.76rem;
  color: var(--text-ink);
  font-weight: 500;
}

/* ==========================================================================
   CARD SYSTEM
   ========================================================================== */
.card {
  background: var(--paper);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-md);
  padding: 1.4rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.card-title {
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
}

.card-subtitle {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.card-footer {
  margin-top: 1.25rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--border-soil);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
}

/* KPI Card Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.kpi-card {
  background: var(--paper);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-md);
  padding: 1.2rem 1.3rem;
  border-top: 3px solid var(--primary-500);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.kpi-card.kpi-pending {
  border-top-color: var(--accent-ochre);
}
.kpi-card.kpi-progress {
  border-top-color: var(--accent-blue);
}
.kpi-card.kpi-resolved {
  border-top-color: var(--success-color);
}
.kpi-card.kpi-citizens {
  border-top-color: var(--primary-800);
}

.kpi-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kpi-val {
  font-family: var(--serif);
  font-size: 1.85rem;
  font-weight: 700;
  color: var(--primary-900);
  margin-top: 0.4rem;
  line-height: 1.1;
}

.kpi-val.amber {
  color: var(--accent-ochre-dark);
}
.kpi-val.blue {
  color: var(--accent-blue);
}
.kpi-val.success {
  color: var(--success-color);
}

.kpi-subtext {
  font-size: 0.74rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

/* ==========================================================================
   TABLES
   ========================================================================== */
.table-panel {
  background: var(--paper);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

table.data-table th {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  font-weight: 700;
  padding: 0.85rem 1.1rem;
  background: var(--primary-100);
  border-bottom: 1px solid var(--border-soil);
  white-space: nowrap;
}

table.data-table td {
  padding: 0.9rem 1.1rem;
  font-size: 0.88rem;
  border-bottom: 1px solid var(--border-soil);
  vertical-align: middle;
}

table.data-table tbody tr:last-child td {
  border-bottom: none;
}

table.data-table tbody tr:hover td {
  background: #FCFAF3;
}

.ticket-id {
  font-family: var(--serif);
  font-weight: 700;
  color: var(--primary-700);
  white-space: nowrap;
}

.table-thumb {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-xs);
  object-fit: cover;
  border: 1px solid var(--border-soil);
  background: var(--cream-bg);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.table-thumb:hover {
  transform: scale(1.08);
}

.table-thumb-placeholder {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-xs);
  border: 1px dashed var(--border-soil);
  background: var(--cream-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--text-muted);
}

.empty-state {
  text-align: center;
  padding: 3rem 1.5rem;
  color: var(--text-muted);
}
.empty-state-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.empty-state-title {
  font-family: var(--serif);
  font-size: 1.15rem;
  color: var(--primary-900);
  margin-bottom: 0.3rem;
}

/* ==========================================================================
   FORMS
   ========================================================================== */
.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-ink);
  margin-bottom: 0.4rem;
}

.form-group label .req {
  color: var(--danger-color);
  margin-left: 0.2rem;
}

.form-control {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  background: var(--cream-bg);
  font-size: 0.92rem;
  color: var(--text-ink);
  transition: var(--transition);
}

.form-control:focus {
  outline: 2px solid var(--primary-500);
  outline-offset: 1px;
  border-color: var(--primary-500);
  background: #FFFFFF;
}

.form-control.is-invalid {
  border-color: var(--danger-color);
  background: #FFF9F8;
}

.form-error-msg {
  display: block;
  font-size: 0.76rem;
  color: var(--danger-color);
  margin-top: 0.35rem;
  font-weight: 500;
}

.form-hint {
  display: block;
  font-size: 0.76rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

textarea.form-control {
  resize: vertical;
  min-height: 90px;
}

/* Image Dropzone & Preview */
.upload-dropzone {
  border: 2px dashed var(--border-soil);
  border-radius: var(--radius-md);
  background: var(--cream-bg);
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}

.upload-dropzone:hover,
.upload-dropzone.dragover {
  border-color: var(--primary-500);
  background: var(--primary-50);
}

.upload-icon {
  font-size: 2rem;
  margin-bottom: 0.4rem;
}

.upload-prompt {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--primary-900);
}

.upload-sub {
  font-size: 0.76rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.file-preview-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--paper);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  padding: 0.75rem;
  margin-top: 0.85rem;
}

.file-preview-img {
  width: 68px;
  height: 68px;
  border-radius: var(--radius-xs);
  object-fit: cover;
  border: 1px solid var(--border-soil);
  flex-shrink: 0;
}

.file-preview-info {
  flex: 1;
  min-width: 0;
}

.file-preview-name {
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-preview-size {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

.file-preview-status {
  display: inline-block;
  font-size: 0.72rem;
  color: var(--success-color);
  font-weight: 600;
  margin-top: 0.25rem;
}

.btn-remove-file {
  background: none;
  border: none;
  color: var(--danger-color);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: var(--radius-xs);
}
.btn-remove-file:hover {
  background: var(--danger-bg);
}

/* ==========================================================================
   TOOLBAR (Search, Filter, Export)
   ========================================================================== */
.toolbar {
  background: var(--paper);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-md);
  padding: 1rem 1.2rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.4rem;
  box-shadow: var(--shadow-sm);
}

.toolbar-search {
  flex: 2;
  min-width: 220px;
  position: relative;
}

.toolbar-search input {
  width: 100%;
  padding: 0.6rem 0.85rem 0.6rem 2.2rem;
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  background: var(--cream-bg);
  font-size: 0.88rem;
}

.toolbar-search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 0.9rem;
  pointer-events: none;
}

.toolbar-filter {
  flex: 1;
  min-width: 140px;
}

.toolbar select {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  background: var(--cream-bg);
  font-size: 0.85rem;
  color: var(--text-ink);
}

/* ==========================================================================
   VISUAL TRACKING TIMELINE
   ========================================================================== */
.tracking-timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 2.2rem 0 2rem;
  padding: 0 1rem;
}

.tracking-timeline::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 3rem;
  right: 3rem;
  height: 4px;
  background: var(--border-soil);
  z-index: 1;
}

.timeline-progress-bar {
  position: absolute;
  top: 20px;
  left: 3rem;
  height: 4px;
  background: var(--primary-700);
  z-index: 2;
  transition: width 0.4s ease;
}

.timeline-step {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 80px;
}

.timeline-step-bubble {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--paper);
  border: 3px solid var(--border-soil);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  transition: var(--transition);
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.timeline-step.completed .timeline-step-bubble {
  background: var(--primary-700);
  border-color: var(--primary-700);
  color: #fff;
}

.timeline-step.active .timeline-step-bubble {
  background: var(--accent-ochre);
  border-color: var(--accent-ochre);
  color: #241800;
  box-shadow: 0 0 0 5px var(--accent-ochre-light);
  animation: pulse-ring 2s infinite;
}

.timeline-step-title {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.timeline-step.active .timeline-step-title,
.timeline-step.completed .timeline-step-title {
  color: var(--primary-900);
}

.timeline-step-date {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(196, 132, 29, 0.4); }
  70% { box-shadow: 0 0 0 8px rgba(196, 132, 29, 0); }
  100% { box-shadow: 0 0 0 0 rgba(196, 132, 29, 0); }
}

/* ==========================================================================
   PROGRESS BAR
   ========================================================================== */
.progress-bar-wrap {
  width: 100%;
  height: 9px;
  background: var(--border-soil);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: 0.5rem 0;
}

.progress-bar-fill {
  height: 100%;
  background: var(--primary-700);
  border-radius: var(--radius-full);
  transition: width 0.5s ease-in-out;
}

.progress-bar-fill.ochre {
  background: var(--accent-ochre);
}

.progress-bar-fill.success {
  background: var(--success-color);
}

/* ==========================================================================
   MODALS
   ========================================================================== */
.modal-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(22, 48, 31, 0.65);
  backdrop-filter: blur(3px);
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.modal-backdrop.open {
  display: flex;
  opacity: 1;
}

.modal-box {
  background: var(--paper);
  border-radius: var(--radius-md);
  max-width: 580px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.8rem;
  position: relative;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-soil);
  transform: translateY(15px);
  transition: transform 0.25s ease;
}

.modal-backdrop.open .modal-box {
  transform: translateY(0);
}

.modal-box.modal-lg {
  max-width: 820px;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1.1rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-xs);
}
.modal-close:hover {
  background: var(--primary-100);
  color: var(--primary-900);
}

.modal-header {
  margin-bottom: 1.25rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--border-soil);
}

.modal-title {
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
}

.modal-subtitle {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.modal-actions {
  margin-top: 1.6rem;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  border-top: 1px solid var(--border-soil);
  padding-top: 1.1rem;
}

/* Lightbox Image Preview Modal */
.image-viewer-modal .modal-box {
  background: #111814;
  color: #fff;
  border: none;
  text-align: center;
  max-width: 900px;
  padding: 1.2rem;
}
.image-viewer-modal .modal-close {
  color: #fff;
}
.image-viewer-display {
  max-height: 75vh;
  max-width: 100%;
  margin: 0 auto;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
#toastContainer {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  pointer-events: none;
  max-width: 380px;
}

.toast {
  background: var(--primary-950);
  color: #EFE8D6;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  box-shadow: 0 8px 24px rgba(22, 48, 31, 0.35);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-left: 4px solid var(--accent-ochre);
  pointer-events: auto;
  animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.toast.toast-success {
  border-left-color: var(--success-color);
}
.toast.toast-error {
  border-left-color: var(--danger-color);
}
.toast.toast-info {
  border-left-color: var(--accent-blue);
}

.toast-icon {
  font-size: 1.15rem;
  flex-shrink: 0;
}
.toast-msg {
  flex: 1;
  line-height: 1.35;
}

@keyframes toast-in {
  from {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
.site-footer {
  background: var(--paper);
  border-top: 1px solid var(--border-soil);
  margin-top: 4rem;
  padding: 3rem 0 1.5rem;
  color: var(--text-ink);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-brand h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.footer-brand p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.footer-col h5 {
  font-family: var(--sans);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-900);
  font-weight: 700;
  margin-bottom: 0.85rem;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col ul a {
  font-size: 0.84rem;
  color: var(--text-muted);
}
.footer-col ul a:hover {
  color: var(--primary-700);
}

.footer-emergency-desk {
  background: var(--cream-bg);
  border: 1px solid var(--border-soil);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  font-size: 0.82rem;
}
.footer-emergency-desk strong {
  color: var(--danger-color);
  display: block;
  margin-bottom: 0.25rem;
}

.footer-bottom {
  border-top: 1px solid var(--border-soil);
  padding-top: 1.25rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* ==========================================================================
   RESPONSIVE QUERIES
   ========================================================================== */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: block;
  }

  .site-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 2px solid var(--primary-700);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.5rem;
    gap: 0.6rem;
    box-shadow: var(--shadow-lg);
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav a {
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border-soil);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .tracking-timeline {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding-left: 2rem;
  }
  .tracking-timeline::before {
    top: 0;
    bottom: 0;
    left: 20px;
    width: 4px;
    height: 100%;
    right: auto;
  }
  .timeline-progress-bar {
    top: 0;
    left: 20px;
    width: 4px !important;
    height: var(--calc-height, 50%);
  }
  .timeline-step {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }
  .timeline-step-title {
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .wrap {
    padding: 0 1rem;
  }
  .btn {
    padding: 0.55rem 0.95rem;
  }
  .kpi-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## File: `js/app.js` <a id="file-js_app_js"></a>

```javascript
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
```

---

## File: `js/auth.js` <a id="file-js_auth_js"></a>

```javascript
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
```

---

## File: `js/citizen.js` <a id="file-js_citizen_js"></a>

```javascript
/**
 * GramSetu — Digital Gram Panchayat Portal
 * Citizen Dashboard Logic
 * File: js/citizen.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // Enforce citizen session
  const currentUser = Auth.requireAuth('citizen');
  if (!currentUser) return;

  // Personalize greeting
  const welcomeName = document.getElementById('citizenGreetingName');
  const citizenWardInfo = document.getElementById('citizenWardInfo');
  if (welcomeName) welcomeName.textContent = currentUser.name || 'Citizen';
  if (citizenWardInfo) {
    citizenWardInfo.textContent = currentUser.ward
      ? `Registered Resident of ${currentUser.ward}`
      : 'Registered Citizen of Sundarpur Gram Panchayat';
  }

  // Load and render citizen's complaints
  renderCitizenDashboard();

  // Attach search / filter listeners
  const searchInput = document.getElementById('citizenSearchInput');
  const statusFilter = document.getElementById('citizenStatusFilter');

  if (searchInput) {
    searchInput.addEventListener('input', () => renderComplaintsList());
  }
  if (statusFilter) {
    statusFilter.addEventListener('change', () => renderComplaintsList());
  }
});

function getCitizenComplaints() {
  const currentUser = Auth.getCurrentUser();
  if (!currentUser) return [];
  const all = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  // Filter for this citizen
  return all.filter(
    (c) => c.citizenId && c.citizenId.toLowerCase() === currentUser.email.toLowerCase()
  );
}

function renderCitizenDashboard() {
  const complaints = getCitizenComplaints();

  // Calculate personal metrics
  const total = complaints.length;
  const pending = complaints.filter(
    (c) => c.status === 'Submitted' || c.status === 'Under Review'
  ).length;
  const inProgress = complaints.filter((c) => c.status === 'In Progress').length;
  const resolved = complaints.filter((c) => c.status === 'Resolved').length;

  const totalEl = document.getElementById('statCitizenTotal');
  const pendingEl = document.getElementById('statCitizenPending');
  const progressEl = document.getElementById('statCitizenProgress');
  const resolvedEl = document.getElementById('statCitizenResolved');

  if (totalEl) totalEl.textContent = total;
  if (pendingEl) pendingEl.textContent = pending;
  if (progressEl) progressEl.textContent = inProgress;
  if (resolvedEl) resolvedEl.textContent = resolved;

  // Render complaints table
  renderComplaintsList();

  // Render recent announcements widget
  renderCitizenAnnouncements();
}

function renderComplaintsList() {
  const container = document.getElementById('citizenComplaintsList');
  if (!container) return;

  const complaints = getCitizenComplaints();
  const search = (document.getElementById('citizenSearchInput')?.value || '').trim().toLowerCase();
  const statusFilter = document.getElementById('citizenStatusFilter')?.value || 'all';

  const filtered = complaints.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (search) {
      const matchId = c.id.toLowerCase().includes(search);
      const matchTitle = (c.title || '').toLowerCase().includes(search);
      const matchCat = (c.category || '').toLowerCase().includes(search);
      const matchLoc = (c.location || '').toLowerCase().includes(search);
      if (!matchId && !matchTitle && !matchCat && !matchLoc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-title">No grievances found</div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.2rem;">
          ${
            complaints.length === 0
              ? 'You have not submitted any complaints yet. Notice an issue in your village ward?'
              : 'No complaints match your active search or status filters.'
          }
        </p>
        <a href="complaint.html" class="btn btn-primary btn-sm">➕ Submit New Grievance</a>
      </div>
    `;
    return;
  }

  // Render cards
  const cardsHtml = filtered
    .map((c) => {
      const catIcon = getCategoryIcon(c.category);
      const statusBadge = getStatusBadge(c.status);
      const priorityBadge = getPriorityBadge(c.priority);
      const formattedDate = formatDate(c.createdAt);

      const photoHtml = c.image
        ? `<img src="${c.image}" alt="${escapeHtml(c.title)}" class="table-thumb" onclick="viewFullImage('${c.image}', '${escapeHtml(c.id)} — ${escapeHtml(c.title)}')">`
        : `<div class="table-thumb-placeholder" title="No photo uploaded">📷</div>`;

      return `
        <div class="card" style="margin-bottom: 1rem; border-left: 4px solid var(--primary-700);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
            <div>
              <span class="ticket-id" style="font-size:1.05rem;">${escapeHtml(c.id)}</span>
              <span style="color:var(--text-muted); font-size:0.8rem; margin-left:0.5rem;">• Filed on ${formattedDate}</span>
            </div>
            <div style="display:flex; gap:0.4rem; align-items:center;">
              ${priorityBadge}
              ${statusBadge}
            </div>
          </div>

          <div style="display:flex; gap:1rem; align-items:flex-start;">
            ${photoHtml}
            <div style="flex:1; min-width:0;">
              <h4 style="font-size:1.05rem; margin-bottom:0.35rem; color:var(--primary-900);">
                ${catIcon} ${escapeHtml(c.title)}
              </h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem; line-height:1.45;">
                ${escapeHtml(c.description)}
              </p>
              <div style="font-size:0.78rem; color:var(--text-muted); display:flex; flex-wrap:wrap; gap:0.8rem;">
                <span>📍 <strong>Location:</strong> ${escapeHtml(c.location)}</span>
                <span>🏘️ <strong>Ward:</strong> ${escapeHtml(c.ward || 'General')}</span>
                ${
                  c.assignedOfficer && c.assignedOfficer !== 'Pending Assignment'
                    ? `<span>👷 <strong>Assigned:</strong> ${escapeHtml(c.assignedOfficer)}</span>`
                    : ''
                }
              </div>

              ${
                c.adminRemark
                  ? `
                <div style="margin-top:0.75rem; background:var(--primary-50); border:1px solid var(--primary-100); border-radius:var(--radius-sm); padding:0.55rem 0.8rem; font-size:0.82rem; color:var(--primary-900);">
                  <strong>💬 Panchayat Remark:</strong> ${escapeHtml(c.adminRemark)}
                </div>
              `
                  : ''
              }
            </div>
          </div>

          <div class="card-footer" style="margin-top:1rem; padding-top:0.75rem;">
            <span style="font-size:0.78rem; color:var(--text-muted);">
              Last Updated: ${formatDateTime(c.updatedAt || c.createdAt)}
            </span>
            <div style="display:flex; gap:0.5rem;">
              <a href="track.html?id=${encodeURIComponent(c.id)}" class="btn btn-outline btn-sm">
                🔍 Track Status
              </a>
              ${
                c.image
                  ? `<button class="btn btn-outline-ochre btn-sm" onclick="viewFullImage('${c.image}', '${escapeHtml(c.id)} — Photo')">📸 View Photo</button>`
                  : ''
              }
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = cardsHtml;
}

function renderCitizenAnnouncements() {
  const listEl = document.getElementById('citizenAnnouncementsList');
  if (!listEl) return;

  const announcements = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);
  if (announcements.length === 0) {
    listEl.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted);">No new announcements today.</p>';
    return;
  }

  // Display top 3
  const top = announcements.slice(0, 3);
  listEl.innerHTML = top
    .map(
      (a) => `
    <div style="border-bottom:1px solid var(--border-soil); padding-bottom:0.75rem; margin-bottom:0.75rem;">
      <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:var(--text-muted); margin-bottom:0.2rem;">
        <span class="pill pill-submitted" style="font-size:0.7rem; padding:0.1rem 0.45rem;">${escapeHtml(a.category || 'Notice')}</span>
        <span>📅 ${formatDate(a.date)}</span>
      </div>
      <h5 style="font-size:0.92rem; font-family:var(--sans); font-weight:600; margin-bottom:0.25rem; color:var(--primary-900);">
        ${escapeHtml(a.title)}
      </h5>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0; line-height:1.4;">
        ${escapeHtml(a.description)}
      </p>
    </div>
  `
    )
    .join('');
}
```

---

## File: `js/complaint.js` <a id="file-js_complaint_js"></a>

```javascript
/**
 * GramSetu — Digital Gram Panchayat Portal
 * Grievance Registration & Image FileReader Engine
 * File: js/complaint.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure citizen authentication
  const currentUser = Auth.requireAuth('citizen');
  if (!currentUser) return;

  // Pre-fill citizen contact details
  const nameEl = document.getElementById('citizenNameInput');
  const emailEl = document.getElementById('citizenEmailInput');
  const phoneEl = document.getElementById('citizenPhoneInput');
  const wardEl = document.getElementById('complaintWard');

  if (nameEl) nameEl.value = currentUser.name || '';
  if (emailEl) emailEl.value = currentUser.email || '';
  if (phoneEl) phoneEl.value = currentUser.phone || '';
  if (wardEl && currentUser.ward) wardEl.value = currentUser.ward;

  // Image Upload State
  let selectedFile = null;
  let compressedBase64 = null;

  const fileInput = document.getElementById('complaintPhoto');
  const dropzone = document.getElementById('uploadDropzone');
  const previewContainer = document.getElementById('filePreviewCard');
  const previewImg = document.getElementById('previewThumb');
  const previewName = document.getElementById('previewFilename');
  const previewSize = document.getElementById('previewFilesize');
  const removeBtn = document.getElementById('btnRemovePhoto');
  const form = document.getElementById('grievanceForm');

  // Trigger file selection via dropzone click
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    // Drag & Drop events
    ['dragenter', 'dragover'].forEach((eventName) => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelection(e.target.files[0]);
      }
    });
  }

  // Handle selected photo file
  async function handleFileSelection(file) {
    if (!file) return;

    // Validate type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type.toLowerCase())) {
      showToast('Invalid file format. Please upload JPG, JPEG, or PNG.', 'error');
      clearPhotoSelection();
      return;
    }

    // Validate size (max 3 MB)
    if (file.size > 3 * 1024 * 1024) {
      showToast('Image size exceeds 3 MB limit. Please select a smaller photo.', 'error');
      clearPhotoSelection();
      return;
    }

    selectedFile = file;

    // Format readable size
    const sizeKb = (file.size / 1024).toFixed(1);
    if (previewName) previewName.textContent = file.name;
    if (previewSize) previewSize.textContent = `${sizeKb} KB (Original)`;

    // Process image via FileReader & HTML5 Canvas compression
    try {
      showToast('Optimizing photo for storage...', 'info', 1500);
      compressedBase64 = await compressImage(file, 900, 700, 0.75);

      if (previewImg) previewImg.src = compressedBase64;
      if (previewContainer) previewContainer.style.display = 'flex';
      if (dropzone) dropzone.style.display = 'none';

      showToast('Photograph attached and verified.', 'success');
    } catch (err) {
      console.error('Image compression error:', err);
      showToast(err.message || 'Error processing image file.', 'error');
      clearPhotoSelection();
    }
  }

  // Clear photo selection
  function clearPhotoSelection() {
    selectedFile = null;
    compressedBase64 = null;
    if (fileInput) fileInput.value = '';
    if (previewContainer) previewContainer.style.display = 'none';
    if (dropzone) dropzone.style.display = 'block';
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearPhotoSelection();
      showToast('Photo removed.', 'info');
    });
  }

  // Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Gather form values
      const title = (document.getElementById('complaintTitle').value || '').trim();
      const category = (document.getElementById('complaintCategory').value || '').trim();
      const ward = (document.getElementById('complaintWard').value || '').trim();
      const location = (document.getElementById('complaintLocation').value || '').trim();
      const priority = (document.getElementById('complaintPriority').value || 'Medium').trim();
      const description = (document.getElementById('complaintDescription').value || '').trim();
      const phone = (document.getElementById('citizenPhoneInput').value || '').trim();

      // Field Validations
      let isValid = true;
      const validateField = (id, condition, errorMsg) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(`${id}Error`);
        if (!condition) {
          if (input) input.classList.add('is-invalid');
          if (errEl) errEl.textContent = errorMsg;
          isValid = false;
        } else {
          if (input) input.classList.remove('is-invalid');
          if (errEl) errEl.textContent = '';
        }
      };

      validateField('complaintTitle', title.length >= 5, 'Title must be at least 5 characters long.');
      validateField('complaintCategory', category !== '', 'Please select an issue category.');
      validateField('complaintWard', ward !== '', 'Please select your ward.');
      validateField('complaintLocation', location.length >= 3, 'Provide a landmark or specific location.');
      validateField('complaintDescription', description.length >= 10, 'Provide a detailed description (min 10 characters).');

      if (!isValid) {
        showToast('Please fix the errors indicated in the form.', 'error');
        return;
      }

      // Generate unique sequential Complaint ID
      const newId = generateComplaintId();
      const nowIso = new Date().toISOString();

      const newComplaint = {
        id: newId,
        citizenId: currentUser.email,
        citizenName: currentUser.name,
        citizenPhone: phone || currentUser.phone || '',
        title: title,
        category: category,
        ward: ward,
        location: location,
        priority: priority,
        description: description,
        image: compressedBase64 || null,
        status: 'Submitted',
        adminRemark: '',
        assignedOfficer: 'Pending Assignment',
        createdAt: nowIso,
        updatedAt: nowIso
      };

      // Retrieve existing complaints list
      const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
      complaints.unshift(newComplaint); // Insert at top

      // Save into localStorage with error safety
      const saved = setStorage(STORAGE_KEYS.COMPLAINTS, complaints);
      if (!saved) {
        return; // setStorage already shows toast for storage quota
      }

      // Show Success Modal with Complaint ID
      const successModalId = document.getElementById('successComplaintId');
      const trackBtn = document.getElementById('btnModalTrack');

      if (successModalId) successModalId.textContent = newId;
      if (trackBtn) {
        trackBtn.href = `track.html?id=${encodeURIComponent(newId)}`;
      }

      openModal('submissionSuccessModal');

      // Reset form
      form.reset();
      clearPhotoSelection();
      if (nameEl) nameEl.value = currentUser.name || '';
      if (emailEl) emailEl.value = currentUser.email || '';
      if (phoneEl) phoneEl.value = currentUser.phone || '';
    });
  }
});
```

---

## File: `js/track.js` <a id="file-js_track_js"></a>

```javascript
/**
 * GramSetu — Digital Gram Panchayat Portal
 * Grievance Tracking & Visual Timeline Engine
 * File: js/track.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('trackIdInput');
  const btnSearch = document.getElementById('btnTrackSearch');

  // Check URL parameters for ?id=CMP-2026-0001
  const urlParams = new URLSearchParams(window.location.search);
  const queryId = urlParams.get('id');

  if (queryId) {
    if (inputEl) inputEl.value = queryId;
    trackComplaint(queryId);
  }

  if (btnSearch && inputEl) {
    btnSearch.addEventListener('click', () => {
      const id = inputEl.value.trim();
      if (!id) {
        showToast('Please enter a Complaint ID.', 'warning');
        return;
      }
      trackComplaint(id);
    });

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const id = inputEl.value.trim();
        if (id) trackComplaint(id);
      }
    });
  }
});

function trackComplaint(searchId) {
  const cleanId = (searchId || '').trim().toUpperCase();
  const resultContainer = document.getElementById('trackResultContainer');
  if (!resultContainer) return;

  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const complaint = complaints.find((c) => c.id.toUpperCase() === cleanId);

  if (!complaint) {
    resultContainer.innerHTML = `
      <div class="card" style="text-align:center; padding:3rem 1.5rem; margin-top:1.5rem;">
        <div style="font-size:2.5rem; margin-bottom:0.75rem;">🔍</div>
        <h3 style="font-size:1.3rem; color:var(--primary-900); margin-bottom:0.4rem;">No Grievance Found</h3>
        <p style="color:var(--text-muted); font-size:0.92rem; max-width:48ch; margin:0 auto 1.5rem;">
          No registered complaint was found matching ID <strong>${escapeHtml(cleanId)}</strong>.
          Please double check your ticket slip or select one of the demo tickets below.
        </p>
        <div style="display:flex; justify-content:center; gap:0.6rem; flex-wrap:wrap;">
          <button class="btn btn-outline btn-sm" onclick="quickTrack('CMP-2026-0001')">Try CMP-2026-0001 (In Progress)</button>
          <button class="btn btn-outline btn-sm" onclick="quickTrack('CMP-2026-0002')">Try CMP-2026-0002 (Resolved)</button>
          <button class="btn btn-outline btn-sm" onclick="quickTrack('CMP-2026-0004')">Try CMP-2026-0004 (Submitted)</button>
        </div>
      </div>
    `;
    showToast(`No complaint found with ID ${cleanId}`, 'error');
    return;
  }

  // Calculate timeline stage index
  // 0: Submitted, 1: Under Review, 2: In Progress, 3: Resolved
  const stages = ['Submitted', 'Under Review', 'In Progress', 'Resolved'];
  let currentStageIndex = stages.indexOf(complaint.status);
  const isRejected = complaint.status === 'Rejected';

  if (currentStageIndex === -1 && !isRejected) {
    currentStageIndex = 0;
  }

  // Progress line width
  const progressPercent = isRejected ? 100 : Math.round((currentStageIndex / (stages.length - 1)) * 100);

  // Build timeline HTML
  let timelineHtml = '';
  if (isRejected) {
    timelineHtml = `
      <div style="background:var(--danger-bg); border:1px solid #F3C4BE; border-radius:var(--radius-md); padding:1.2rem; text-align:center; margin:1.5rem 0;">
        <div style="font-size:2rem; margin-bottom:0.25rem;">🚫</div>
        <h4 style="color:var(--danger-color); margin-bottom:0.3rem;">Complaint Rejected / Closed</h4>
        <p style="font-size:0.86rem; color:var(--text-ink); margin:0;">
          ${escapeHtml(complaint.adminRemark || 'This complaint was determined to be outside Gram Panchayat jurisdiction or a duplicate entry.')}
        </p>
      </div>
    `;
  } else {
    timelineHtml = `
      <div class="tracking-timeline">
        <div class="timeline-progress-bar" style="width: ${progressPercent}%;"></div>

        <div class="timeline-step ${currentStageIndex >= 0 ? (currentStageIndex === 0 ? 'active' : 'completed') : ''}">
          <div class="timeline-step-bubble">${currentStageIndex > 0 ? '✓' : '1'}</div>
          <div class="timeline-step-title">1. Submitted</div>
          <div class="timeline-step-date">${formatDate(complaint.createdAt)}</div>
        </div>

        <div class="timeline-step ${currentStageIndex >= 1 ? (currentStageIndex === 1 ? 'active' : 'completed') : ''}">
          <div class="timeline-step-bubble">${currentStageIndex > 1 ? '✓' : '2'}</div>
          <div class="timeline-step-title">2. Under Review</div>
          <div class="timeline-step-date">${currentStageIndex >= 1 ? 'Inspected' : 'Pending'}</div>
        </div>

        <div class="timeline-step ${currentStageIndex >= 2 ? (currentStageIndex === 2 ? 'active' : 'completed') : ''}">
          <div class="timeline-step-bubble">${currentStageIndex > 2 ? '✓' : '3'}</div>
          <div class="timeline-step-title">3. In Progress</div>
          <div class="timeline-step-date">${currentStageIndex >= 2 ? 'Action initiated' : 'Awaiting'}</div>
        </div>

        <div class="timeline-step ${currentStageIndex === 3 ? 'completed active' : ''}">
          <div class="timeline-step-bubble">${currentStageIndex === 3 ? '✓' : '4'}</div>
          <div class="timeline-step-title">4. Resolved</div>
          <div class="timeline-step-date">${currentStageIndex === 3 ? formatDate(complaint.updatedAt) : 'Pending fix'}</div>
        </div>
      </div>
    `;
  }

  // Uploaded photo block
  const photoBlock = complaint.image
    ? `
      <div style="background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:1rem; text-align:center;">
        <span style="display:block; font-size:0.8rem; font-weight:700; color:var(--primary-900); margin-bottom:0.6rem;">
          📷 Citizen Uploaded Photo Evidence
        </span>
        <img src="${complaint.image}" alt="Complaint Photograph" style="max-height:220px; margin:0 auto; border-radius:var(--radius-xs); border:1px solid var(--border-soil); cursor:pointer;" onclick="viewFullImage('${complaint.image}', '${escapeHtml(complaint.id)} — Photo Evidence')">
        <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem;">
          Click photo to view full size
        </span>
      </div>
    `
    : `
      <div style="background:var(--cream-bg); border:1px dashed var(--border-soil); border-radius:var(--radius-sm); padding:2rem 1rem; text-align:center; color:var(--text-muted);">
        <div style="font-size:1.8rem; margin-bottom:0.4rem;">📷</div>
        <span style="font-size:0.85rem; font-weight:500;">No photograph was uploaded with this complaint.</span>
      </div>
    `;

  // Render Full Details Card
  resultContainer.innerHTML = `
    <div class="card" style="margin-top:1.5rem; border-top: 4px solid var(--primary-700);">
      
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.75rem; border-bottom:1px solid var(--border-soil); padding-bottom:1rem; margin-bottom:1.2rem;">
        <div>
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <span class="ticket-id" style="font-size:1.4rem;">${escapeHtml(complaint.id)}</span>
            ${getPriorityBadge(complaint.priority)}
            ${getStatusBadge(complaint.status)}
          </div>
          <h2 style="font-size:1.35rem; margin:0.4rem 0 0.2rem; color:var(--primary-900);">
            ${getCategoryIcon(complaint.category)} ${escapeHtml(complaint.title)}
          </h2>
          <span style="font-size:0.84rem; color:var(--text-muted);">
            Category: <strong>${escapeHtml(complaint.category)}</strong> • Filed on ${formatDateTime(complaint.createdAt)}
          </span>
        </div>

        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ Print Slip</button>
        </div>
      </div>

      <!-- Timeline -->
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem; font-family:var(--sans); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; color:var(--primary-900); margin-bottom:0.5rem;">
          Redressal Progress Status
        </h4>
        ${timelineHtml}
      </div>

      <!-- Details Split -->
      <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:1.5rem; margin-bottom:1.5rem;" class="track-details-grid">
        <div>
          <h4 style="font-size:0.95rem; font-family:var(--sans); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; color:var(--primary-900); margin-bottom:0.75rem;">
            Grievance Description & Location
          </h4>
          <p style="font-size:0.92rem; color:var(--text-ink); line-height:1.6; background:var(--paper); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.9rem; margin-bottom:1rem;">
            ${escapeHtml(complaint.description)}
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.85rem;">
            <div style="background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.65rem 0.85rem;">
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Specific Location:</span>
              <strong>📍 ${escapeHtml(complaint.location)}</strong>
            </div>
            <div style="background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.65rem 0.85rem;">
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Ward Coverage:</span>
              <strong>🏘️ ${escapeHtml(complaint.ward || 'General')}</strong>
            </div>
            <div style="background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.65rem 0.85rem;">
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Filed By:</span>
              <strong>👤 ${escapeHtml(complaint.citizenName || 'Registered Resident')}</strong>
            </div>
            <div style="background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.65rem 0.85rem;">
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Field In-Charge:</span>
              <strong>👷 ${escapeHtml(complaint.assignedOfficer || 'Pending Assignment')}</strong>
            </div>
          </div>
        </div>

        <div>
          <h4 style="font-size:0.95rem; font-family:var(--sans); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; color:var(--primary-900); margin-bottom:0.75rem;">
            Photographic Evidence
          </h4>
          ${photoBlock}
        </div>
      </div>

      <!-- Administrative Remarks Banner -->
      <div style="background: ${complaint.adminRemark ? 'var(--primary-50)' : 'var(--cream-bg)'}; border:1px solid ${complaint.adminRemark ? 'var(--primary-500)' : 'var(--border-soil)'}; border-radius:var(--radius-sm); padding:1.1rem 1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <h4 style="font-size:0.95rem; font-family:var(--sans); font-weight:700; color:var(--primary-900); margin:0;">
            🏛️ Panchayat Action & Official Remarks
          </h4>
          <span style="font-size:0.75rem; color:var(--text-muted);">
            Last Updated: ${formatDateTime(complaint.updatedAt || complaint.createdAt)}
          </span>
        </div>
        <p style="font-size:0.9rem; color:var(--text-ink); margin:0; line-height:1.5;">
          ${
            complaint.adminRemark
              ? escapeHtml(complaint.adminRemark)
              : '<span style="color:var(--text-muted); font-style:italic;">No administrative remarks posted yet. The grievance is queued for Panchayat ward inspection.</span>'
          }
        </p>
      </div>

    </div>
  `;

  // Update address bar without reload
  const newUrl = `${window.location.pathname}?id=${encodeURIComponent(complaint.id)}`;
  window.history.replaceState({ path: newUrl }, '', newUrl);
}

function quickTrack(id) {
  const inputEl = document.getElementById('trackIdInput');
  if (inputEl) inputEl.value = id;
  trackComplaint(id);
}
```

---

## File: `js/admin.js` <a id="file-js_admin_js"></a>

```javascript
/**
 * GramSetu — Digital Gram Panchayat Portal
 * Panchayat Official Action Center & Administration Engine
 * File: js/admin.js
 */

// Global active ticket ID for action modal
let currentActionTicketId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Enforce admin privileges
  const adminUser = Auth.requireAuth('admin');
  if (!adminUser) return;

  // Personalize Admin Header
  const officerName = document.getElementById('adminOfficerName');
  const officerRole = document.getElementById('adminOfficerDesignation');
  if (officerName) officerName.textContent = adminUser.name || 'Officer';
  if (officerRole) {
    officerRole.textContent = adminUser.designation || 'Gram Sevak / Admin';
  }

  // Initial load
  renderAdminKpis();
  renderAdminComplaints();
  renderAdminAnnouncements();
  renderAdminProjects();
  renderAdminCitizens();

  // Attach search & filters
  const searchInput = document.getElementById('adminSearchInput');
  const filterCat = document.getElementById('adminFilterCategory');
  const filterStat = document.getElementById('adminFilterStatus');
  const filterPrio = document.getElementById('adminFilterPriority');
  const filterWard = document.getElementById('adminFilterWard');
  const btnClearFilters = document.getElementById('btnClearFilters');

  if (searchInput) searchInput.addEventListener('input', renderAdminComplaints);
  if (filterCat) filterCat.addEventListener('change', renderAdminComplaints);
  if (filterStat) filterStat.addEventListener('change', renderAdminComplaints);
  if (filterPrio) filterPrio.addEventListener('change', renderAdminComplaints);
  if (filterWard) filterWard.addEventListener('change', renderAdminComplaints);

  if (btnClearFilters) {
    btnClearFilters.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (filterCat) filterCat.value = 'all';
      if (filterStat) filterStat.value = 'all';
      if (filterPrio) filterPrio.value = 'all';
      if (filterWard) filterWard.value = 'all';
      renderAdminComplaints();
      showToast('Filters cleared.', 'info');
    });
  }

  // Action form submit
  const actionForm = document.getElementById('adminActionForm');
  if (actionForm) {
    actionForm.addEventListener('submit', handleSaveAdminAction);
  }

  // New Announcement form submit
  const annForm = document.getElementById('addAnnouncementForm');
  if (annForm) {
    annForm.addEventListener('submit', handleAddAnnouncement);
  }

  // New Project form submit
  const projForm = document.getElementById('addProjectForm');
  if (projForm) {
    projForm.addEventListener('submit', handleAddProject);
  }
});

// =============================================================================
// 1. KPI STATISTICS
// =============================================================================
function renderAdminKpis() {
  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const users = getStorage(STORAGE_KEYS.USERS, []);

  const total = complaints.length;
  const pending = complaints.filter(
    (c) => c.status === 'Submitted' || c.status === 'Under Review'
  ).length;
  const inProgress = complaints.filter((c) => c.status === 'In Progress').length;
  const resolved = complaints.filter((c) => c.status === 'Resolved').length;
  const totalCitizens = users.filter((u) => u.role === 'citizen').length;

  const totalEl = document.getElementById('kpiTotalComplaints');
  const pendingEl = document.getElementById('kpiPendingComplaints');
  const progressEl = document.getElementById('kpiProgressComplaints');
  const resolvedEl = document.getElementById('kpiResolvedComplaints');
  const citizensEl = document.getElementById('kpiTotalCitizens');

  if (totalEl) totalEl.textContent = total;
  if (pendingEl) pendingEl.textContent = pending;
  if (progressEl) progressEl.textContent = inProgress;
  if (resolvedEl) {
    const pct = total > 0 ? Math.round((resolved / total) * 100) : 0;
    resolvedEl.textContent = `${resolved} (${pct}%)`;
  }
  if (citizensEl) citizensEl.textContent = totalCitizens;
}

// =============================================================================
// 2. COMPLAINTS LIST & TABLE
// =============================================================================
function renderAdminComplaints() {
  const tbody = document.getElementById('adminComplaintsTbody');
  if (!tbody) return;

  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const search = (document.getElementById('adminSearchInput')?.value || '').trim().toLowerCase();
  const fCat = document.getElementById('adminFilterCategory')?.value || 'all';
  const fStat = document.getElementById('adminFilterStatus')?.value || 'all';
  const fPrio = document.getElementById('adminFilterPriority')?.value || 'all';
  const fWard = document.getElementById('adminFilterWard')?.value || 'all';

  const filtered = complaints.filter((c) => {
    if (fCat !== 'all' && c.category !== fCat) return false;
    if (fStat !== 'all' && c.status !== fStat) return false;
    if (fPrio !== 'all' && (c.priority || 'Medium') !== fPrio) return false;
    if (fWard !== 'all' && c.ward !== fWard) return false;
    if (search) {
      const matchId = c.id.toLowerCase().includes(search);
      const matchTitle = (c.title || '').toLowerCase().includes(search);
      const matchCitizen = (c.citizenName || '').toLowerCase().includes(search);
      const matchEmail = (c.citizenId || '').toLowerCase().includes(search);
      const matchLoc = (c.location || '').toLowerCase().includes(search);
      if (!matchId && !matchTitle && !matchCitizen && !matchEmail && !matchLoc) return false;
    }
    return true;
  });

  const countBadge = document.getElementById('filteredComplaintsCount');
  if (countBadge) countBadge.textContent = `${filtered.length} Grievances`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr class="empty-row">
        <td colspan="7" style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:2rem; margin-bottom:0.4rem;">🔍</div>
          <strong>No grievances match the specified filters.</strong>
          <p style="font-size:0.82rem; margin-top:0.3rem;">Try clearing your search query or reset status/category filters.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered
    .map((c) => {
      const catIcon = getCategoryIcon(c.category);
      const photoHtml = c.image
        ? `<img src="${c.image}" alt="Evidence" class="table-thumb" title="Click to inspect photo" onclick="viewFullImage('${c.image}', '${escapeHtml(c.id)} — Photo Evidence')">`
        : `<div class="table-thumb-placeholder" title="No photograph uploaded">✕</div>`;

      return `
      <tr>
        <td class="ticket-id" style="font-size:0.95rem;">
          <a href="track.html?id=${encodeURIComponent(c.id)}" target="_blank" title="Open public tracking link">${escapeHtml(c.id)}</a>
        </td>
        <td>
          <div style="font-weight:600; color:var(--text-ink); font-size:0.92rem;">
            ${catIcon} ${escapeHtml(c.title)}
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">
            📍 ${escapeHtml(c.location)} • <strong>${escapeHtml(c.ward || 'General')}</strong>
          </div>
        </td>
        <td>
          <div style="font-weight:600; font-size:0.86rem;">${escapeHtml(c.citizenName || 'Resident')}</div>
          <div style="font-size:0.74rem; color:var(--text-muted);">${escapeHtml(c.citizenPhone || c.citizenId)}</div>
        </td>
        <td>${getPriorityBadge(c.priority)}</td>
        <td>${getStatusBadge(c.status)}</td>
        <td>${photoHtml}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="openAdminActionModal('${c.id}')">
            ⚡ Take Action
          </button>
        </td>
      </tr>
    `;
    })
    .join('');
}

// =============================================================================
// 3. ADMIN ACTION MODAL & STATUS UPDATE
// =============================================================================
function openAdminActionModal(ticketId) {
  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const c = complaints.find((x) => x.id === ticketId);
  if (!c) {
    showToast('Complaint not found.', 'error');
    return;
  }

  currentActionTicketId = ticketId;

  // Set modal fields
  document.getElementById('actionModalId').textContent = c.id;
  document.getElementById('actionModalTitle').textContent = `${getCategoryIcon(c.category)} ${c.title}`;
  document.getElementById('actionModalMeta').textContent = `${c.ward} • Filed by ${c.citizenName} (${c.citizenPhone || c.citizenId}) on ${formatDateTime(c.createdAt)}`;
  document.getElementById('actionModalDesc').textContent = c.description;
  document.getElementById('actionModalStatus').value = c.status;
  document.getElementById('actionModalOfficer').value = c.assignedOfficer || 'Er. Suresh Kale (PWD)';
  document.getElementById('actionModalRemark').value = c.adminRemark || '';

  // Render uploaded photo thumbnail
  const photoContainer = document.getElementById('actionModalPhotoContainer');
  if (photoContainer) {
    if (c.image) {
      photoContainer.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.9rem; background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.6rem;">
          <img src="${c.image}" alt="Evidence" style="width:70px; height:50px; object-fit:cover; border-radius:4px; border:1px solid var(--border-soil);">
          <div style="flex:1;">
            <strong style="font-size:0.8rem; display:block; color:var(--primary-900);">Citizen Photograph Attached</strong>
            <button type="button" class="btn btn-outline btn-sm" style="margin-top:0.25rem;" onclick="viewFullImage('${c.image}', '${escapeHtml(c.id)} — Photo Evidence')">
              🔍 Inspect Full-Size Photo
            </button>
          </div>
        </div>
      `;
    } else {
      photoContainer.innerHTML = `
        <div style="font-size:0.82rem; color:var(--text-muted); background:var(--cream-bg); padding:0.6rem; border-radius:var(--radius-sm); border:1px dashed var(--border-soil);">
          ℹ️ No photograph was uploaded by the citizen for this grievance.
        </div>
      `;
    }
  }

  openModal('adminActionModal');
}

function handleSaveAdminAction(e) {
  e.preventDefault();
  if (!currentActionTicketId) return;

  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const index = complaints.findIndex((x) => x.id === currentActionTicketId);
  if (index === -1) {
    showToast('Complaint not found.', 'error');
    return;
  }

  const newStatus = document.getElementById('actionModalStatus').value;
  const newOfficer = (document.getElementById('actionModalOfficer').value || '').trim();
  const newRemark = (document.getElementById('actionModalRemark').value || '').trim();

  // Update object
  complaints[index].status = newStatus;
  complaints[index].assignedOfficer = newOfficer || 'Panchayat Assigned Team';
  complaints[index].adminRemark = newRemark;
  complaints[index].updatedAt = new Date().toISOString();

  // Persist to localStorage
  const saved = setStorage(STORAGE_KEYS.COMPLAINTS, complaints);
  if (!saved) return;

  closeModal('adminActionModal');
  renderAdminKpis();
  renderAdminComplaints();

  showToast(`Grievance ${currentActionTicketId} updated to "${newStatus}".`, 'success');
}

// =============================================================================
// 4. ANNOUNCEMENTS MANAGER
// =============================================================================
function renderAdminAnnouncements() {
  const container = document.getElementById('adminAnnouncementsList');
  if (!container) return;

  const list = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No active announcements found.</p>
        <button class="btn btn-primary btn-sm" onclick="openModal('addAnnouncementModal')">➕ Post First Notice</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map(
      (a, idx) => `
    <div class="card" style="margin-bottom:0.85rem; padding:1.1rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem;">
        <div>
          <span class="pill pill-submitted" style="font-size:0.72rem; margin-bottom:0.25rem;">${escapeHtml(a.category || 'General')}</span>
          <h4 style="font-size:1.05rem; margin-top:0.2rem; color:var(--primary-900);">${escapeHtml(a.title)}</h4>
        </div>
        <button class="btn btn-danger btn-sm" onclick="deleteAnnouncement(${idx})">🗑️ Delete</button>
      </div>
      <p style="font-size:0.86rem; color:var(--text-ink); margin-bottom:0.6rem; line-height:1.5;">${escapeHtml(a.description)}</p>
      <div style="font-size:0.76rem; color:var(--text-muted); display:flex; justify-content:space-between;">
        <span>📅 Event / Notice Date: <strong>${formatDate(a.date)}</strong></span>
        <span>Issued by: ${escapeHtml(a.postedBy || 'Gram Sevak')}</span>
      </div>
    </div>
  `
    )
    .join('');
}

function handleAddAnnouncement(e) {
  e.preventDefault();
  const title = (document.getElementById('newAnnTitle').value || '').trim();
  const category = (document.getElementById('newAnnCategory').value || 'Notice').trim();
  const date = document.getElementById('newAnnDate').value;
  const description = (document.getElementById('newAnnDesc').value || '').trim();

  if (!title || !date || !description) {
    showToast('Please fill all announcement fields.', 'error');
    return;
  }

  const list = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);
  const newAnn = {
    id: `ANN-${String(list.length + 1).padStart(3, '0')}`,
    title,
    category,
    date,
    description,
    postedBy: 'Gram Sevak / Administrative Office'
  };

  list.unshift(newAnn);
  setStorage(STORAGE_KEYS.ANNOUNCEMENTS, list);

  closeModal('addAnnouncementModal');
  document.getElementById('addAnnouncementForm').reset();
  renderAdminAnnouncements();
  showToast('Announcement published successfully.', 'success');
}

function deleteAnnouncement(index) {
  if (!confirm('Are you sure you want to remove this announcement notice?')) return;
  const list = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);
  list.splice(index, 1);
  setStorage(STORAGE_KEYS.ANNOUNCEMENTS, list);
  renderAdminAnnouncements();
  showToast('Announcement removed.', 'info');
}

// =============================================================================
// 5. VILLAGE DEVELOPMENT PROJECTS MANAGER
// =============================================================================
function renderAdminProjects() {
  const container = document.getElementById('adminProjectsList');
  if (!container) return;

  const list = getStorage(STORAGE_KEYS.PROJECTS, []);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No development projects recorded.</p>
        <button class="btn btn-primary btn-sm" onclick="openModal('addProjectModal')">➕ Register New Project</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map((p) => {
      const isCompleted = p.status === 'Completed';
      const fillClass = isCompleted ? 'success' : 'ochre';

      return `
      <div class="card" style="margin-bottom:1rem; border-top:3px solid var(--primary-700);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.6rem;">
          <div>
            <span class="pill ${isCompleted ? 'pill-resolved' : 'pill-under-review'}" style="font-size:0.72rem;">
              ${p.status}
            </span>
            <span style="font-size:0.78rem; color:var(--text-muted); margin-left:0.5rem;">Scheme: <strong>${escapeHtml(p.scheme)}</strong></span>
            <h3 style="font-size:1.15rem; margin-top:0.3rem; color:var(--primary-900);">${escapeHtml(p.name)}</h3>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.15rem; font-family:var(--serif); font-weight:700; color:var(--primary-900);">
              ₹ ${p.budgetLakhs.toFixed(2)} Lakhs
            </div>
            <span style="font-size:0.74rem; color:var(--text-muted);">Spent: ₹ ${p.spentLakhs.toFixed(2)} Lakhs</span>
          </div>
        </div>

        <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:0.75rem; line-height:1.45;">
          ${escapeHtml(p.description)}
        </p>

        <!-- Progress -->
        <div style="margin-bottom:0.75rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:600; color:var(--primary-900);">
            <span>Physical Execution Progress</span>
            <span>${p.progressPercent}%</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill ${fillClass}" style="width: ${p.progressPercent}%;"></div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; font-size:0.78rem; color:var(--text-muted); border-top:1px solid var(--border-soil); padding-top:0.65rem;">
          <span>🏘️ Ward: <strong>${escapeHtml(p.ward)}</strong></span>
          <span>🏗️ Contractor: <strong>${escapeHtml(p.contractor)}</strong></span>
          <span>📅 Target Date: <strong>${formatDate(p.targetDate)}</strong></span>
        </div>
      </div>
    `;
    })
    .join('');
}

function handleAddProject(e) {
  e.preventDefault();
  const name = (document.getElementById('newProjName').value || '').trim();
  const scheme = (document.getElementById('newProjScheme').value || '').trim();
  const category = (document.getElementById('newProjCategory').value || 'Infrastructure').trim();
  const ward = (document.getElementById('newProjWard').value || '').trim();
  const budget = parseFloat(document.getElementById('newProjBudget').value) || 0;
  const spent = parseFloat(document.getElementById('newProjSpent').value) || 0;
  const progress = parseInt(document.getElementById('newProjProgress').value, 10) || 0;
  const targetDate = document.getElementById('newProjTargetDate').value;
  const contractor = (document.getElementById('newProjContractor').value || '').trim();
  const description = (document.getElementById('newProjDesc').value || '').trim();

  if (!name || !scheme || !targetDate || !budget) {
    showToast('Please fill all required project fields.', 'error');
    return;
  }

  const list = getStorage(STORAGE_KEYS.PROJECTS, []);
  const newProj = {
    id: `PRJ-2026-${String(list.length + 1).padStart(2, '0')}`,
    name,
    scheme,
    category,
    ward,
    budgetLakhs: budget,
    spentLakhs: spent,
    progressPercent: progress,
    status: progress >= 100 ? 'Completed' : progress > 0 ? 'Ongoing' : 'Planned',
    startDate: new Date().toISOString().split('T')[0],
    targetDate,
    contractor: contractor || 'Panchayat Civil Contractor',
    officer: 'Rajesh Soni (Gram Sevak)',
    description
  };

  list.unshift(newProj);
  setStorage(STORAGE_KEYS.PROJECTS, list);

  closeModal('addProjectModal');
  document.getElementById('addProjectForm').reset();
  renderAdminProjects();
  showToast('Development project registered.', 'success');
}

// =============================================================================
// 6. CITIZENS DIRECTORY
// =============================================================================
function renderAdminCitizens() {
  const container = document.getElementById('adminCitizensTbody');
  if (!container) return;

  const users = getStorage(STORAGE_KEYS.USERS, []);
  const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
  const citizens = users.filter((u) => u.role === 'citizen');

  container.innerHTML = citizens
    .map((c) => {
      const filedCount = complaints.filter(
        (cmp) => cmp.citizenId && cmp.citizenId.toLowerCase() === c.email.toLowerCase()
      ).length;

      return `
      <tr>
        <td style="font-weight:600;">${escapeHtml(c.name)}</td>
        <td>${escapeHtml(c.email)}</td>
        <td>${escapeHtml(c.phone || '—')}</td>
        <td>${escapeHtml(c.ward || 'General')}</td>
        <td><span class="pill pill-submitted">${filedCount} Filed</span></td>
        <td><span class="pill pill-resolved">Active</span></td>
      </tr>
    `;
    })
    .join('');
}

// Tab navigation for admin workspace
function switchAdminTab(tabName) {
  const tabs = ['complaints', 'announcements', 'projects', 'citizens'];
  tabs.forEach((t) => {
    const section = document.getElementById(`adminTabSection_${t}`);
    const navBtn = document.getElementById(`adminTabBtn_${t}`);
    if (section) section.style.display = t === tabName ? 'block' : 'none';
    if (navBtn) {
      if (t === tabName) {
        navBtn.classList.add('active');
        navBtn.style.borderBottomColor = 'var(--accent-ochre)';
      } else {
        navBtn.classList.remove('active');
        navBtn.style.borderBottomColor = 'transparent';
      }
    }
  });
}
```

---

## File: `index.html` <a id="file-index_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GramSetu | Digital Gram Panchayat & Smart Village Portal</title>
  <meta name="description" content="Digital public service gateway for Sundarpur Gram Panchayat. File grievances with photo evidence, track redressal turnaround time, inspect village development funds, and access public services.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat • Block: Ramnagar • Dist: Buldhana</span>
      </div>
      <div class="top-gov-right">
        <span>🕒 Official Portal • 24x7 Citizen Desk</span>
      </div>
    </div>
  </div>

  <!-- Header & Navigation -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>ग्राम सेतु — Digital Smart Village Portal</small></span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="site-nav">
        <a href="index.html" class="active">🏠 Home</a>
        <a href="#services">🛠️ Services</a>
        <a href="#development">🏗️ Development</a>
        <a href="#announcements">📢 Announcements</a>
        <a href="#about">ℹ️ About</a>
        <a href="#contact">📞 Contact</a>
      </nav>

      <!-- Auth Action Container -->
      <div class="nav-right-actions">
        <div id="headerAuthContainer">
          <a href="login.html" class="btn btn-primary btn-sm">Log in</a>
        </div>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content">

    <!-- HERO SECTION -->
    <section class="hero" style="padding: 3.5rem 0 3rem; border-bottom: 1px solid var(--border-soil);">
      <div class="wrap" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 2.5rem; align-items: center;">
        
        <div>
          <div style="font-size: 0.86rem; color: var(--primary-700); font-weight: 700; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.05em;">
            🌾 Digital Gateway to a Smarter Village
          </div>
          <h1 style="font-size: 2.5rem; line-height: 1.18; color: var(--primary-900); margin-bottom: 1rem;">
            Empowering Rural Citizens through Digital Panchayat Governance.
          </h1>
          <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; max-width: 48ch; margin-bottom: 1.8rem;">
            GramSetu directly connects rural residents with the Panchayat administration. Submit grievances with photo evidence, track real-time resolution, and inspect transparent village development funds.
          </p>

          <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
            <a href="login.html" class="btn btn-ochre btn-lg">🧑‍🌾 Citizen Login</a>
            <a href="#services" class="btn btn-outline btn-lg">Explore Services</a>
            <a href="track.html" class="btn btn-primary btn-lg">🔍 Track Grievance</a>
          </div>

          <div style="margin-top: 1.2rem; font-size: 0.82rem; color: var(--text-muted);">
            ✓ 100% Client-side • Works in any browser • Zero external backend setup required
          </div>
        </div>

        <!-- Live Panchayat Notice Board -->
        <div class="card" style="background: var(--primary-900); color: #EFE8D6; border: none; padding: 1.8rem; box-shadow: var(--shadow-xl); position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(239, 232, 214, 0.25); padding-bottom: 0.75rem; margin-bottom: 1.1rem;">
            <h3 style="font-size: 1.15rem; color: #F4EFDD; margin: 0; font-family: var(--serif);">
              Sundarpur Gram Panchayat
            </h3>
            <span class="pill pill-resolved" style="background: rgba(47, 122, 79, 0.4); border-color: rgba(47, 122, 79, 0.6); color: #A7F3D0;">
              Live Data
            </span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.6rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
            <span style="font-size: 0.88rem; color: #D8CFAE;">Total Grievances Registered</span>
            <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: #FFF;" id="heroTotalComplaints">5</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.6rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
            <span style="font-size: 0.88rem; color: #D8CFAE;">Resolved with Photo Verification</span>
            <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: #34D399;" id="heroResolvedComplaints">2 (40%)</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.6rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
            <span style="font-size: 0.88rem; color: #D8CFAE;">Active Development Works</span>
            <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: var(--accent-ochre);" id="heroActiveProjects">3</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.6rem 0;">
            <span style="font-size: 0.88rem; color: #D8CFAE;">Average Turnaround Time (TAT)</span>
            <span style="font-family: var(--serif); font-size: 1.4rem; font-weight: 700; color: #93C5FD;">48 Hours</span>
          </div>

          <div style="margin-top: 1.25rem; padding-top: 0.85rem; border-top: 1px solid rgba(239, 232, 214, 0.2); font-size: 0.78rem; color: #B7AD8E; display: flex; justify-content: space-between; align-items: center;">
            <span>Data synced via browser localStorage</span>
            <a href="login.html" style="color: var(--accent-ochre); font-weight: 600;">Admin Sign-in →</a>
          </div>
        </div>

      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" style="padding: 4rem 0 3.5rem;">
      <div class="wrap">
        <div style="text-align: center; max-width: 58ch; margin: 0 auto 2.8rem;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Digital Public Services</span>
          <h2 style="font-size: 2rem; margin: 0.4rem 0 0.6rem; color: var(--primary-900);">Everything you need from your Gram Panchayat</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Transparent, paperless, and mobile-friendly services for every resident of the village.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          
          <!-- Card 1 -->
          <div class="card" style="border-top: 4px solid var(--accent-ochre);">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">📢</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Submit Complaint</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Report broken streetlights, water pipeline leaks, road potholes, or drainage blocks. Attach actual photographs as evidence.
            </p>
            <a href="complaint.html" class="btn btn-primary btn-sm">File Grievance →</a>
          </div>

          <!-- Card 2 -->
          <div class="card" style="border-top: 4px solid var(--accent-blue);">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">🔍</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Track Complaint</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Monitor the live progress of your ticket from submission to inspection, field work, and final closure with official remarks.
            </p>
            <a href="track.html" class="btn btn-outline btn-sm">Track by Ticket ID →</a>
          </div>

          <!-- Card 3 -->
          <div class="card" style="border-top: 4px solid var(--primary-700);">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">🏗️</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Development Works</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Public social audit of ongoing and completed village civil infrastructure projects, sanctioned budgets, and expenditures.
            </p>
            <a href="#development" class="btn btn-outline btn-sm">Inspect Funds →</a>
          </div>

          <!-- Card 4 -->
          <div class="card" style="border-top: 4px solid var(--success-color);">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">📜</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Panchayat Services</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Information on applying for birth/death certificates, property tax assessment, residential proof, and caste verifications.
            </p>
            <a href="citizen.html" class="btn btn-outline btn-sm">View Procedures →</a>
          </div>

          <!-- Card 5 -->
          <div class="card" style="border-top: 4px solid #7C3AED;">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">🔔</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Announcements</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Stay informed about upcoming Gram Sabha meetings, vaccination drives, agricultural subsidies, and water supply schedules.
            </p>
            <a href="#announcements" class="btn btn-outline btn-sm">Read Notices →</a>
          </div>

          <!-- Card 6 -->
          <div class="card" style="border-top: 4px solid var(--danger-color);">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">🚨</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">Citizen Support</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">
              Direct emergency helplines for water pipeline bursts, power breakdowns, medical emergencies, and the Sarpanch desk.
            </p>
            <a href="#contact" class="btn btn-outline btn-sm">Emergency Desk →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- DEVELOPMENT PROJECTS SECTION -->
    <section id="development" style="padding: 3.5rem 0; background: var(--primary-100); border-top: 1px solid var(--border-soil); border-bottom: 1px solid var(--border-soil);">
      <div class="wrap">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.2rem;">
          <div>
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Social Audit & Transparency</span>
            <h2 style="font-size: 1.85rem; margin: 0.3rem 0 0; color: var(--primary-900);">Village Development & Infrastructure Works</h2>
          </div>
          <div>
            <span style="font-size: 0.84rem; color: var(--text-muted);">Open data compliant with RTI Act proactive disclosure</span>
          </div>
        </div>

        <div id="homeProjectsContainer" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          <!-- Dynamically populated from localStorage -->
        </div>
      </div>
    </section>

    <!-- ANNOUNCEMENTS & NOTICES SECTION -->
    <section id="announcements" style="padding: 4rem 0 3.5rem;">
      <div class="wrap">
        <div style="text-align: center; max-width: 58ch; margin: 0 auto 2.5rem;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Panchayat Notice Board</span>
          <h2 style="font-size: 1.85rem; margin: 0.3rem 0 0.5rem; color: var(--primary-900);">Public Notices & Official Announcements</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Important village communications, health camps, and Gram Sabha schedules.</p>
        </div>

        <div id="homeAnnouncementsContainer" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <!-- Dynamically populated from localStorage -->
        </div>
      </div>
    </section>

    <!-- ABOUT GRAMSETU (Viva & Presentation Section) -->
    <section id="about" style="padding: 4rem 0; background: var(--paper); border-top: 1px solid var(--border-soil); border-bottom: 1px solid var(--border-soil);">
      <div class="wrap" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
        <div>
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">About The Project</span>
          <h2 style="font-size: 2rem; color: var(--primary-900); margin: 0.4rem 0 1rem;">
            Bridging the Gap Between Villagers & Panchayat Administration
          </h2>
          <p style="font-size: 0.96rem; color: var(--text-ink); line-height: 1.65; margin-bottom: 1rem;">
            <strong>GramSetu (ग्राम सेतु)</strong> translates to <em>"Village Bridge"</em>. In traditional rural governance, citizens often have to visit the Panchayat office multiple times to report civic grievances like broken handpumps or streetlights, with no record or accountability.
          </p>
          <p style="font-size: 0.94rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.4rem;">
            GramSetu digitizes this workflow into a transparent, client-side web application. Citizens upload real photographs as evidence, get unique tracking numbers, and view official administrative updates. Officials update tickets with verified remarks, promoting complete social accountability.
          </p>
          
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.75rem 1rem;">
              <strong style="display: block; font-size: 1.1rem; color: var(--primary-700);">100% Client-Side</strong>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Runs directly in the browser</span>
            </div>
            <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.75rem 1rem;">
              <strong style="display: block; font-size: 1.1rem; color: var(--accent-ochre-dark);">FileReader API</strong>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Base64 photo evidence</span>
            </div>
            <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.75rem 1rem;">
              <strong style="display: block; font-size: 1.1rem; color: var(--success-color);">LocalStorage</strong>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Persistent offline data store</span>
            </div>
          </div>
        </div>

        <div class="card" style="background: var(--cream-bg); border-left: 4px solid var(--primary-700);">
          <h4 style="font-size: 1.1rem; color: var(--primary-900); margin-bottom: 0.85rem;">Key Capabilities & Flow</h4>
          
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.9rem;">
            <li style="display: flex; gap: 0.6rem;">
              <span style="color: var(--primary-700); font-weight: 700;">1.</span>
              <span><strong>Citizen Filing:</strong> Citizen inputs issue category, location, and attaches photo. FileReader converts it to Base64 data URL.</span>
            </li>
            <li style="display: flex; gap: 0.6rem;">
              <span style="color: var(--primary-700); font-weight: 700;">2.</span>
              <span><strong>Ticket Sequence:</strong> System generates unique tracking ID (e.g. <code>CMP-2026-0001</code>) and stores record in browser localStorage.</span>
            </li>
            <li style="display: flex; gap: 0.6rem;">
              <span style="color: var(--primary-700); font-weight: 700;">3.</span>
              <span><strong>Admin Inspection:</strong> Panchayat administrator logs in, inspects the exact uploaded photo, and updates status with official remarks.</span>
            </li>
            <li style="display: flex; gap: 0.6rem;">
              <span style="color: var(--primary-700); font-weight: 700;">4.</span>
              <span><strong>Public Tracking:</strong> Citizen enters ticket ID to observe real-time status changes and field notes on the 4-stage visual timeline.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EMERGENCY HOTLINES STRIP -->
    <section id="contact" style="background: var(--primary-900); color: #EFE8D6; padding: 1.8rem 0;">
      <div class="wrap" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="font-size: 0.95rem;">
          🚨 <strong>Village Emergency Helpline:</strong> Call <strong>108</strong> for Ambulance, <strong>1912</strong> for Electricity Grid, or <strong>+91 94250 88100</strong> for Sarpanch Citizen Desk.
        </div>
        <div>
          <a href="login.html" class="btn btn-ochre btn-sm">Citizen Support Portal →</a>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
            <span style="font-size: 1.4rem;">🌾</span>
            <h4 style="margin: 0; font-family: var(--serif); font-size: 1.25rem;">GramSetu</h4>
          </div>
          <p>
            A Digital Public Good for Rural Governance, Citizen Grievance Redressal, and Village Infrastructure Transparency. Built with pure HTML5, CSS3, and Vanilla JavaScript.
          </p>
        </div>

        <div class="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="login.html">Login Portal</a></li>
            <li><a href="complaint.html">Submit Complaint</a></li>
            <li><a href="track.html">Track Complaint</a></li>
            <li><a href="citizen.html">Citizen Dashboard</a></li>
            <li><a href="admin.html">Admin Action Center</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Panchayat Services</h5>
          <ul>
            <li><a href="complaint.html?category=Water%20Supply">Drinking Water</a></li>
            <li><a href="complaint.html?category=Street%20Lights">Street Lights</a></li>
            <li><a href="complaint.html?category=Roads">Road Maintenance</a></li>
            <li><a href="complaint.html?category=Drainage">Sanitation & Drainage</a></li>
            <li><a href="#development">Village Works Audit</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Panchayat Office</h5>
          <div class="footer-emergency-desk">
            <strong>Sundarpur Gram Panchayat Bhawan</strong>
            <span>Block: Ramnagar • Dist: Buldhana<br>Maharashtra — 443001</span>
            <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--primary-700); font-weight: 600;">
              📞 Sarpanch Desk: +91 94250 88100<br>
              ✉️ gramsevak@gramsetu.com
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Sundarpur Gram Panchayat • Department of Panchayati Raj & Rural Development</span>
        <span>Built for College CSE Capstone Project & Viva Presentation</span>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Sync KPIs on home board
      const complaints = getStorage(STORAGE_KEYS.COMPLAINTS, []);
      const projects = getStorage(STORAGE_KEYS.PROJECTS, []);
      const announcements = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);

      const total = complaints.length;
      const resolved = complaints.filter(c => c.status === 'Resolved').length;
      const pct = total > 0 ? Math.round((resolved / total) * 100) : 0;
      const activeProj = projects.filter(p => p.status === 'Ongoing' || p.status === 'Planned').length;

      const totalEl = document.getElementById('heroTotalComplaints');
      const resolvedEl = document.getElementById('heroResolvedComplaints');
      const projEl = document.getElementById('heroActiveProjects');

      if (totalEl) totalEl.textContent = total;
      if (resolvedEl) resolvedEl.textContent = `${resolved} (${pct}%)`;
      if (projEl) projEl.textContent = activeProj;

      // Render home development projects
      const projContainer = document.getElementById('homeProjectsContainer');
      if (projContainer) {
        projContainer.innerHTML = projects.slice(0, 3).map(p => {
          const isComp = p.status === 'Completed';
          return `
            <div class="card" style="border-top:3px solid var(--primary-700);">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                <span class="pill ${isComp ? 'pill-resolved' : 'pill-under-review'}">${p.status}</span>
                <span style="font-weight:700; font-family:var(--serif); color:var(--primary-900);">₹ ${p.budgetLakhs.toFixed(2)} Lakhs</span>
              </div>
              <h4 style="font-size:1.1rem; color:var(--primary-900); margin-bottom:0.35rem;">${escapeHtml(p.name)}</h4>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:0.75rem; line-height:1.45;">${escapeHtml(p.description)}</p>
              
              <div style="margin-bottom:0.6rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.76rem; font-weight:600;">
                  <span>Progress</span>
                  <span>${p.progressPercent}%</span>
                </div>
                <div class="progress-bar-wrap">
                  <div class="progress-bar-fill ${isComp ? 'success' : 'ochre'}" style="width: ${p.progressPercent}%;"></div>
                </div>
              </div>

              <div style="font-size:0.76rem; color:var(--text-muted); display:flex; justify-content:space-between; border-top:1px solid var(--border-soil); padding-top:0.6rem;">
                <span>🏘️ ${escapeHtml(p.ward)}</span>
                <span>📅 Due: ${formatDate(p.targetDate)}</span>
              </div>
            </div>
          `;
        }).join('');
      }

      // Render home announcements
      const annContainer = document.getElementById('homeAnnouncementsContainer');
      if (annContainer) {
        annContainer.innerHTML = announcements.slice(0, 3).map(a => `
          <div class="card" style="border-left: 4px solid var(--accent-ochre);">
            <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:var(--text-muted); margin-bottom:0.3rem;">
              <span class="pill pill-submitted">${escapeHtml(a.category)}</span>
              <span>📅 ${formatDate(a.date)}</span>
            </div>
            <h4 style="font-size:1.05rem; color:var(--primary-900); margin-bottom:0.35rem;">${escapeHtml(a.title)}</h4>
            <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.45;">${escapeHtml(a.description)}</p>
            <div style="margin-top:0.6rem; font-size:0.74rem; color:var(--text-muted);">
              Issued by: <strong>${escapeHtml(a.postedBy || 'Gram Sevak Office')}</strong>
            </div>
          </div>
        `).join('');
      }
    });
  </script>
</body>
</html>
```

---

## File: `login.html` <a id="file-login_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login | GramSetu — Digital Gram Panchayat Portal</title>
  <meta name="description" content="Sign in to GramSetu digital village portal. Access citizen grievance redressal or Panchayat official action center.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  
  <style>
    .auth-page {
      min-height: calc(100vh - 140px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2.5rem 1rem;
    }
    .auth-shell {
      max-width: 920px;
      width: 100%;
      background: var(--paper);
      border: 1px solid var(--border-soil);
      border-radius: var(--radius-md);
      overflow: hidden;
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      box-shadow: var(--shadow-lg);
    }
    .auth-context {
      background: var(--primary-900);
      color: #EFE8D6;
      padding: 2.5rem 2.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .auth-quote {
      font-family: var(--serif);
      font-style: italic;
      font-size: 1.25rem;
      line-height: 1.5;
      color: #F4EFDD;
    }
    .auth-quote-attr {
      margin-top: 0.8rem;
      font-size: 0.8rem;
      color: #B7AD8E;
    }
    .auth-context-list {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .auth-context-item {
      display: flex;
      gap: 0.6rem;
      font-size: 0.86rem;
      color: #D8CFAE;
      line-height: 1.45;
    }
    .auth-form-panel {
      padding: 2.4rem 2.2rem;
      background: var(--paper);
    }
    .role-toggle {
      display: flex;
      background: var(--primary-100);
      border: 1px solid var(--border-soil);
      border-radius: var(--radius-full);
      padding: 0.25rem;
      margin-bottom: 1.6rem;
    }
    .role-btn {
      flex: 1;
      text-align: center;
      padding: 0.5rem 0.75rem;
      border: none;
      background: transparent;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      transition: var(--transition);
    }
    .role-btn.active {
      background: var(--paper);
      color: var(--primary-900);
      box-shadow: 0 1px 3px rgba(22,48,31,0.15);
    }
    .password-wrap {
      position: relative;
    }
    .password-wrap .form-control {
      padding-right: 3.8rem;
    }
    .toggle-pass {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--primary-700);
      cursor: pointer;
      padding: 0.2rem 0.4rem;
    }
    .demo-creds-box {
      margin-top: 1.5rem;
      background: var(--cream-bg);
      border: 1px solid var(--border-soil);
      border-radius: var(--radius-sm);
      padding: 0.9rem 1rem;
    }
    .demo-creds-title {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--accent-ochre-dark);
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .demo-pills {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem;
    }
    .demo-pill-btn {
      background: var(--paper);
      border: 1px solid var(--border-soil);
      border-radius: var(--radius-xs);
      padding: 0.5rem 0.65rem;
      text-align: left;
      cursor: pointer;
      transition: var(--transition);
      font-size: 0.76rem;
    }
    .demo-pill-btn:hover {
      border-color: var(--primary-500);
      background: var(--primary-50);
    }
    .demo-pill-btn strong {
      display: block;
      color: var(--primary-900);
      font-size: 0.8rem;
    }
    .demo-pill-btn span {
      display: block;
      color: var(--text-muted);
      margin-top: 0.1rem;
    }
    @media (max-width: 768px) {
      .auth-shell {
        grid-template-columns: 1fr;
      }
      .auth-context {
        display: none;
      }
      .auth-form-panel {
        padding: 1.8rem 1.4rem;
      }
      .demo-pills {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat</span>
      </div>
      <div class="top-gov-right">
        <a href="index.html" style="color:#EFE8D6; text-decoration:none;">← Back to Home</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>Official Authentication Gateway</small></span>
        </div>
      </a>
      <div>
        <a href="index.html" class="btn btn-outline btn-sm">← Back to Portal</a>
      </div>
    </div>
  </header>

  <!-- Login Main -->
  <main class="auth-page">
    <div class="auth-shell">

      <!-- Left context panel -->
      <div class="auth-context">
        <div>
          <p class="auth-quote">
            "A complaint filed today should be a verified repair tomorrow — and a public record every villager can inspect."
          </p>
          <p class="auth-quote-attr">
            — GramSetu Smart Governance Manifesto
          </p>
        </div>

        <div class="auth-context-list">
          <div class="auth-context-item">
            <span>📷</span>
            <span>Every citizen complaint carries actual photographic proof and a unique tracking ID.</span>
          </div>
          <div class="auth-context-item">
            <span>🔑</span>
            <span>Panchayat officials review evidence, assign staff, and post official progress remarks.</span>
          </div>
          <div class="auth-context-item">
            <span>📊</span>
            <span>Development project funds, contractors, and progress bars remain 100% transparent.</span>
          </div>
        </div>

        <div style="font-size: 0.76rem; color: #B7AD8E; border-top: 1px solid rgba(239, 232, 214, 0.2); padding-top: 1rem;">
          College Capstone Project • Pure Client-Side HTML/CSS/JS
        </div>
      </div>

      <!-- Right Form Panel -->
      <div class="auth-form-panel">
        
        <!-- Role Toggle Selector -->
        <div class="role-toggle">
          <button type="button" class="role-btn active" id="btnRoleCitizen" onclick="selectRole('citizen')">
            🧑‍🌾 Citizen Login
          </button>
          <button type="button" class="role-btn" id="btnRoleAdmin" onclick="selectRole('admin')">
            🔑 Panchayat Admin
          </button>
        </div>

        <div>
          <h2 id="loginHeading" style="font-size: 1.45rem; margin-bottom: 0.35rem; color: var(--primary-900);">
            Sign in to File or Track Grievance
          </h2>
          <p id="loginSub" style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.4rem;">
            Enter your registered email address and password.
          </p>

          <form id="loginForm" novalidate>
            <!-- Email -->
            <div class="form-group">
              <label for="loginEmail">Email Address <span class="req">*</span></label>
              <input type="email" id="loginEmail" class="form-control" placeholder="e.g. citizen@gramsetu.com" required autocomplete="email">
              <span class="form-error-msg" id="emailError"></span>
            </div>

            <!-- Password -->
            <div class="form-group">
              <label for="loginPassword">Password <span class="req">*</span></label>
              <div class="password-wrap">
                <input type="password" id="loginPassword" class="form-control" placeholder="Enter your account password" required autocomplete="current-password">
                <button type="button" class="toggle-pass" id="btnTogglePass" onclick="togglePasswordVisibility()">Show</button>
              </div>
              <span class="form-error-msg" id="passError"></span>
            </div>

            <!-- Remember & Forgot -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; margin-bottom: 1.25rem;">
              <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; color: var(--text-muted);">
                <input type="checkbox" id="rememberMe" checked> Remember session
              </label>
              <a href="javascript:void(0)" onclick="handleForgotPassword()" style="color: var(--primary-700); font-weight: 600;">
                Forgot Password?
              </a>
            </div>

            <!-- Submit Button with Loading State -->
            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btnLoginSubmit">
              <span id="btnSubmitText">Log in to Portal</span>
            </button>
          </form>

          <!-- 1-Click Demo Credentials Quick Fill Box -->
          <div class="demo-creds-box">
            <div class="demo-creds-title">
              <span>⚡ One-Click Demo Credentials (Viva Testing)</span>
            </div>
            <div class="demo-pills">
              <button type="button" class="demo-pill-btn" onclick="quickFillDemo('citizen')">
                <strong>🧑‍🌾 Citizen Demo</strong>
                <span>citizen@gramsetu.com</span>
                <span style="font-family: monospace; font-size: 0.72rem; color: var(--primary-700);">Pass: citizen123</span>
              </button>
              <button type="button" class="demo-pill-btn" onclick="quickFillDemo('admin')">
                <strong>🔑 Panchayat Admin</strong>
                <span>admin@gramsetu.com</span>
                <span style="font-family: monospace; font-size: 0.72rem; color: var(--accent-ochre-dark);">Pass: admin123</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer" style="margin-top:0; padding:1.5rem 0;">
    <div class="wrap" style="text-align: center; font-size: 0.78rem; color: var(--text-muted);">
      © 2026 Sundarpur Gram Panchayat • GramSetu Digital Village Portal
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script>
    let activeRole = 'citizen';

    document.addEventListener('DOMContentLoaded', () => {
      // If already logged in, redirect to respective dashboard
      Auth.redirectIfLoggedIn();

      const form = document.getElementById('loginForm');
      if (form) {
        form.addEventListener('submit', handleLoginSubmit);
      }
    });

    function selectRole(role) {
      activeRole = role;
      document.getElementById('btnRoleCitizen').classList.toggle('active', role === 'citizen');
      document.getElementById('btnRoleAdmin').classList.toggle('active', role === 'admin');

      const heading = document.getElementById('loginHeading');
      const sub = document.getElementById('loginSub');
      const submitText = document.getElementById('btnSubmitText');

      if (role === 'admin') {
        heading.textContent = 'Panchayat Official Sign-in';
        sub.textContent = 'Enter administrative credentials to open the Action Center.';
        submitText.textContent = 'Access Panchayat Action Center';
      } else {
        heading.textContent = 'Sign in to File or Track Grievance';
        sub.textContent = 'Enter your citizen credentials to view and submit complaints.';
        submitText.textContent = 'Log in to Citizen Portal';
      }
    }

    function togglePasswordVisibility() {
      const passInput = document.getElementById('loginPassword');
      const btn = document.getElementById('btnTogglePass');
      if (passInput.type === 'password') {
        passInput.type = 'text';
        btn.textContent = 'Hide';
      } else {
        passInput.type = 'password';
        btn.textContent = 'Show';
      }
    }

    function quickFillDemo(role) {
      selectRole(role);
      const emailInput = document.getElementById('loginEmail');
      const passInput = document.getElementById('loginPassword');

      if (role === 'admin') {
        emailInput.value = 'admin@gramsetu.com';
        passInput.value = 'admin123';
      } else {
        emailInput.value = 'citizen@gramsetu.com';
        passInput.value = 'citizen123';
      }

      showToast(`Filled ${role} demo credentials. Click Login!`, 'info', 2000);
    }

    function handleLoginSubmit(e) {
      e.preventDefault();

      const emailInput = document.getElementById('loginEmail');
      const passInput = document.getElementById('loginPassword');
      const emailErr = document.getElementById('emailError');
      const passErr = document.getElementById('passError');
      const submitBtn = document.getElementById('btnLoginSubmit');
      const submitText = document.getElementById('btnSubmitText');

      emailErr.textContent = '';
      passErr.textContent = '';
      emailInput.classList.remove('is-invalid');
      passInput.classList.remove('is-invalid');

      const email = emailInput.value.trim();
      const password = passInput.value.trim();

      let hasError = false;
      if (!email) {
        emailErr.textContent = 'Email address is required.';
        emailInput.classList.add('is-invalid');
        hasError = true;
      } else if (!email.includes('@')) {
        emailErr.textContent = 'Please enter a valid email format (e.g. citizen@gramsetu.com).';
        emailInput.classList.add('is-invalid');
        hasError = true;
      }

      if (!password) {
        passErr.textContent = 'Password is required.';
        passInput.classList.add('is-invalid');
        hasError = true;
      }

      if (hasError) return;

      // Loading state
      submitBtn.disabled = true;
      submitText.textContent = 'Verifying credentials...';

      setTimeout(() => {
        const result = Auth.login(email, password, activeRole);

        if (!result.success) {
          submitBtn.disabled = false;
          submitText.textContent = activeRole === 'admin' ? 'Access Panchayat Action Center' : 'Log in to Citizen Portal';
          showToast(result.message, 'error');
          passErr.textContent = result.message;
          passInput.classList.add('is-invalid');
          return;
        }

        showToast(`Welcome back, ${result.user.name}! Redirecting...`, 'success');

        // Redirect based on role
        setTimeout(() => {
          if (result.user.role === 'admin') {
            window.location.href = 'admin.html';
          } else {
            window.location.href = 'citizen.html';
          }
        }, 500);
      }, 350);
    }

    function handleForgotPassword() {
      showToast('For demo testing, please use the quick-fill credentials below.', 'info');
    }
  </script>
</body>
</html>
```

---

## File: `citizen.html` <a id="file-citizen_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Citizen Dashboard | GramSetu — Sundarpur Gram Panchayat</title>
  <meta name="description" content="Citizen Dashboard for Sundarpur Gram Panchayat. File complaints, track active grievances, and read village notices.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat Citizen Portal</span>
      </div>
      <div class="top-gov-right">
        <span>Sundarpur Block: Ramnagar • Dist: Buldhana</span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>Citizen Action & Grievance Dashboard</small></span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="site-nav">
        <a href="citizen.html" class="active">📊 My Dashboard</a>
        <a href="complaint.html">➕ File Complaint</a>
        <a href="track.html">🔍 Track Ticket</a>
        <a href="index.html">🏠 Home Portal</a>
      </nav>

      <!-- Auth actions -->
      <div class="nav-right-actions">
        <div id="headerAuthContainer"></div>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content" style="padding: 2rem 0 3.5rem;">
    <div class="wrap">

      <!-- Welcome Banner -->
      <div style="background: var(--paper); border: 1px solid var(--border-soil); border-radius: var(--radius-md); padding: 1.5rem 1.8rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-left: 5px solid var(--primary-700); box-shadow: var(--shadow-sm);">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Citizen Dashboard</span>
          <h1 style="font-size: 1.85rem; color: var(--primary-900); margin: 0.2rem 0 0.3rem;">
            Welcome, <span id="citizenGreetingName">Citizen</span>!
          </h1>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;" id="citizenWardInfo">
            Registered Resident of Sundarpur Gram Panchayat
          </p>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="complaint.html" class="btn btn-ochre">
            ➕ File New Grievance
          </a>
          <a href="track.html" class="btn btn-outline">
            🔍 Track a Ticket
          </a>
        </div>
      </div>

      <!-- Quick Action Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        
        <a href="complaint.html" class="card" style="text-decoration: none; color: inherit; border-top: 3px solid var(--accent-ochre);">
          <div style="font-size: 1.8rem; margin-bottom: 0.4rem;">📝</div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem; color: var(--primary-900);">Submit Complaint</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">Upload photo & description of civic issue</p>
        </a>

        <a href="track.html" class="card" style="text-decoration: none; color: inherit; border-top: 3px solid var(--accent-blue);">
          <div style="font-size: 1.8rem; margin-bottom: 0.4rem;">🔍</div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem; color: var(--primary-900);">Track Complaint</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">Check real-time progress by ticket ID</p>
        </a>

        <a href="javascript:void(0)" onclick="openModal('announcementsModal')" class="card" style="text-decoration: none; color: inherit; border-top: 3px solid #7C3AED;">
          <div style="font-size: 1.8rem; margin-bottom: 0.4rem;">📢</div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem; color: var(--primary-900);">Announcements</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">View Gram Sabha notices & health drives</p>
        </a>

        <a href="javascript:void(0)" onclick="openModal('servicesModal')" class="card" style="text-decoration: none; color: inherit; border-top: 3px solid var(--success-color);">
          <div style="font-size: 1.8rem; margin-bottom: 0.4rem;">📋</div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem; color: var(--primary-900);">Panchayat Services</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">Certificates, taxes & welfare schemes</p>
        </a>

      </div>

      <!-- KPI Stats of Citizen's Own Grievances -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Total Filed by You</div>
          <div class="kpi-val" id="statCitizenTotal">0</div>
          <div class="kpi-subtext">All time registered tickets</div>
        </div>

        <div class="kpi-card kpi-pending">
          <div class="kpi-label">Pending / Under Review</div>
          <div class="kpi-val amber" id="statCitizenPending">0</div>
          <div class="kpi-subtext">Awaiting field inspection</div>
        </div>

        <div class="kpi-card kpi-progress">
          <div class="kpi-label">Action In Progress</div>
          <div class="kpi-val blue" id="statCitizenProgress">0</div>
          <div class="kpi-subtext">Maintenance teams assigned</div>
        </div>

        <div class="kpi-card kpi-resolved">
          <div class="kpi-label">Successfully Resolved</div>
          <div class="kpi-val success" id="statCitizenResolved">0</div>
          <div class="kpi-subtext">Verified with completion notes</div>
        </div>
      </div>

      <!-- Main Layout Split: My Complaints (Left 2.2fr) & Announcements (Right 0.8fr) -->
      <div style="display: grid; grid-template-columns: 2.1fr 0.9fr; gap: 1.8rem; align-items: flex-start;">
        
        <!-- Left: My Complaints Feed -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <h2 style="font-size: 1.4rem; color: var(--primary-900); margin: 0;">My Registered Complaints</h2>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0;">
                Review grievance status, photo proofs, and administrative remarks.
              </p>
            </div>
          </div>

          <!-- Search & Filter Bar -->
          <div class="toolbar" style="margin-bottom: 1.2rem; padding: 0.75rem 1rem;">
            <div class="toolbar-search" style="min-width: 180px;">
              <span class="toolbar-search-icon">🔍</span>
              <input type="text" id="citizenSearchInput" placeholder="Filter by Ticket ID, Title, Category...">
            </div>

            <div class="toolbar-filter" style="min-width: 140px;">
              <select id="citizenStatusFilter">
                <option value="all">All Statuses</option>
                <option value="Submitted">Submitted</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <!-- Complaints Container -->
          <div id="citizenComplaintsList">
            <!-- Dynamically populated by js/citizen.js -->
          </div>
        </div>

        <!-- Right: Recent Village Announcements & Helplines -->
        <div>
          <!-- Announcements Widget -->
          <div class="card" style="margin-bottom: 1.5rem; border-top: 3px solid var(--accent-ochre);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
              <h3 style="font-size: 1.15rem; color: var(--primary-900); margin: 0;">Village Notices</h3>
              <button class="btn btn-outline btn-sm" onclick="openModal('announcementsModal')">View All</button>
            </div>
            
            <div id="citizenAnnouncementsList">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Need Help / Emergency Desk Card -->
          <div class="card" style="background: var(--cream-bg); border-left: 4px solid var(--danger-color);">
            <h4 style="font-size: 1.05rem; color: var(--danger-color); margin-bottom: 0.4rem;">
              🚨 Need Immediate Assistance?
            </h4>
            <p style="font-size: 0.84rem; color: var(--text-ink); margin-bottom: 0.8rem; line-height: 1.5;">
              For critical pipe bursts, high-voltage wire snapping, or medical emergencies, contact the 24x7 control desk:
            </p>
            <div style="font-size: 0.82rem; line-height: 1.6;">
              <div>💧 <strong>Water Supply:</strong> 1800-233-0014</div>
              <div>⚡ <strong>Power Breakdown:</strong> 1912</div>
              <div>🚑 <strong>PHC Ambulance:</strong> 108</div>
              <div>🏛️ <strong>Sarpanch Office:</strong> +91 94250 88100</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </main>

  <!-- MODAL: All Village Announcements -->
  <div class="modal-backdrop" id="announcementsModal">
    <div class="modal-box modal-lg">
      <button class="modal-close" onclick="closeModal('announcementsModal')">×</button>
      <div class="modal-header">
        <h3 class="modal-title">📢 Village Announcements & Notices</h3>
        <p class="modal-subtitle">Official notifications published by Sundarpur Gram Panchayat.</p>
      </div>

      <div id="modalAllAnnouncementsContainer" style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Populated via script -->
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary btn-sm" onclick="closeModal('announcementsModal')">Close Notices</button>
      </div>
    </div>
  </div>

  <!-- MODAL: Basic Panchayat Services Guide -->
  <div class="modal-backdrop" id="servicesModal">
    <div class="modal-box modal-lg">
      <button class="modal-close" onclick="closeModal('servicesModal')">×</button>
      <div class="modal-header">
        <h3 class="modal-title">📋 Panchayat Citizen Services Directory</h3>
        <p class="modal-subtitle">Procedures, turnaround times, and required documents for standard Panchayat certificates.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem;">
          <h4 style="font-size: 0.95rem; color: var(--primary-900); margin-bottom: 0.2rem;">Birth / Death Certificate</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">Within 21 days of occurrence.</p>
          <span style="font-size: 0.76rem; color: var(--primary-700); font-weight: 600;">TAT: 3 Working Days • Fee: Nil</span>
        </div>

        <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem;">
          <h4 style="font-size: 0.95rem; color: var(--primary-900); margin-bottom: 0.2rem;">Property Tax (Namuna 8) Assessment</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">Village residential & shop assessment extract.</p>
          <span style="font-size: 0.76rem; color: var(--primary-700); font-weight: 600;">TAT: 2 Working Days • Fee: ₹20</span>
        </div>

        <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem;">
          <h4 style="font-size: 0.95rem; color: var(--primary-900); margin-bottom: 0.2rem;">Residence Certificate (Rahwasi Dakhla)</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">Proof of permanent residence in village.</p>
          <span style="font-size: 0.76rem; color: var(--primary-700); font-weight: 600;">TAT: 1 Working Day • Fee: ₹10</span>
        </div>

        <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem;">
          <h4 style="font-size: 0.95rem; color: var(--primary-900); margin-bottom: 0.2rem;">No Objection Certificate (NOC)</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">For electricity connection, water tap, or construction.</p>
          <span style="font-size: 0.76rem; color: var(--primary-700); font-weight: 600;">TAT: 5 Working Days • Fee: ₹50</span>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary btn-sm" onclick="closeModal('servicesModal')">Understood</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="wrap" style="text-align: center; font-size: 0.8rem; color: var(--text-muted);">
      © 2026 Sundarpur Gram Panchayat • GramSetu Citizen Dashboard
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script src="js/citizen.js"></script>
  <script>
    // Populate all announcements modal
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('modalAllAnnouncementsContainer');
      if (container) {
        const announcements = getStorage(STORAGE_KEYS.ANNOUNCEMENTS, []);
        container.innerHTML = announcements.map(a => `
          <div style="background:var(--paper); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:1rem; border-left:4px solid var(--accent-ochre);">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.3rem;">
              <span class="pill pill-submitted">${escapeHtml(a.category)}</span>
              <span>📅 ${formatDate(a.date)}</span>
            </div>
            <h4 style="font-size:1.1rem; color:var(--primary-900); margin-bottom:0.4rem;">${escapeHtml(a.title)}</h4>
            <p style="font-size:0.88rem; color:var(--text-ink); margin-bottom:0.5rem; line-height:1.5;">${escapeHtml(a.description)}</p>
            <div style="font-size:0.75rem; color:var(--text-muted);">Issued by: <strong>${escapeHtml(a.postedBy || 'Gram Sevak')}</strong></div>
          </div>
        `).join('');
      }
    });
  </script>
</body>
</html>
```

---

## File: `complaint.html` <a id="file-complaint_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File a Complaint | GramSetu — Sundarpur Gram Panchayat</title>
  <meta name="description" content="Register a civic grievance with photographic proof. Directly notify Sundarpur Gram Panchayat administration.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  
  <style>
    .form-container {
      max-width: 840px;
      margin: 0 auto;
    }
    .form-section-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--primary-900);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 0.9rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid var(--border-soil);
    }
  </style>
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat Grievance Registration</span>
      </div>
      <div class="top-gov-right">
        <a href="citizen.html" style="color:#EFE8D6; text-decoration:none;">← Return to Dashboard</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>Citizen Grievance Redressal Form</small></span>
        </div>
      </a>

      <nav class="site-nav">
        <a href="citizen.html">📊 Citizen Dashboard</a>
        <a href="complaint.html" class="active">➕ File Complaint</a>
        <a href="track.html">🔍 Track Grievance</a>
      </nav>

      <div class="nav-right-actions">
        <div id="headerAuthContainer"></div>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content" style="padding: 2.5rem 0 4rem;">
    <div class="wrap">
      
      <div class="form-container">
        
        <!-- Page Title & Guidance -->
        <div style="margin-bottom: 2rem;">
          <a href="citizen.html" style="font-size: 0.84rem; color: var(--primary-700); font-weight: 600; text-decoration: none;">
            ← Back to Dashboard
          </a>
          <h1 style="font-size: 2rem; color: var(--primary-900); margin: 0.4rem 0 0.3rem;">
            Register a Public Grievance
          </h1>
          <p style="font-size: 0.92rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
            Fill out the details below and attach a photograph of the issue. You will receive an official tracking ID (e.g. <code>CMP-2026-0006</code>) to monitor the resolution progress.
          </p>
        </div>

        <!-- Grievance Form Card -->
        <div class="card" style="box-shadow: var(--shadow-md); border-top: 4px solid var(--accent-ochre);">
          
          <form id="grievanceForm" novalidate>
            
            <!-- SECTION 1: CITIZEN INFORMATION -->
            <div class="form-section-title">1. Citizen Contact Details</div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="citizenNameInput">Citizen Full Name</label>
                <input type="text" id="citizenNameInput" class="form-control" readonly style="background: #EFE7D8; cursor: not-allowed;">
                <span class="form-hint">Auto-filled from your registered account</span>
              </div>

              <div class="form-group">
                <label for="citizenEmailInput">Email Address</label>
                <input type="email" id="citizenEmailInput" class="form-control" readonly style="background: #EFE7D8; cursor: not-allowed;">
              </div>
            </div>

            <div class="form-group">
              <label for="citizenPhoneInput">Contact Mobile Number <span class="req">*</span></label>
              <input type="tel" id="citizenPhoneInput" class="form-control" placeholder="+91 xxxxx xxxxx" maxlength="15">
              <span class="form-hint">Used by maintenance crew if location clarification is required.</span>
            </div>

            <!-- SECTION 2: ISSUE SPECIFICATIONS -->
            <div class="form-section-title" style="margin-top: 2rem;">2. Grievance Details & Location</div>

            <!-- Title -->
            <div class="form-group">
              <label for="complaintTitle">Grievance Summary / Title <span class="req">*</span></label>
              <input type="text" id="complaintTitle" class="form-control" placeholder="e.g. Broken Handpump Handle near Gandhi Chowk" maxlength="120" required>
              <span class="form-error-msg" id="complaintTitleError"></span>
              <span class="form-hint">Brief, clear summary of the problem (min 5 characters)</span>
            </div>

            <!-- Category & Priority Row -->
            <div class="form-row">
              
              <div class="form-group">
                <label for="complaintCategory">Issue Category <span class="req">*</span></label>
                <select id="complaintCategory" class="form-control" required>
                  <option value="">-- Select Category --</option>
                  <option value="Water Supply">💧 Water Supply (Handpump / Pipeline)</option>
                  <option value="Street Lights">💡 Street Lights & Electricity</option>
                  <option value="Roads">🛣️ Roads, Potholes & Footpaths</option>
                  <option value="Drainage">🌊 Drainage & Sewage Overflow</option>
                  <option value="Sanitation">🧹 Village Sanitation & Cleanliness</option>
                  <option value="Electricity">⚡ Power Grid & Pole Leaning</option>
                  <option value="Waste Management">🗑️ Solid Waste / Garbage Heap</option>
                  <option value="Other">📋 Other Civic Grievance</option>
                </select>
                <span class="form-error-msg" id="complaintCategoryError"></span>
              </div>

              <div class="form-group">
                <label for="complaintPriority">Urgency Level <span class="req">*</span></label>
                <select id="complaintPriority" class="form-control" required>
                  <option value="Low">🟢 Low — Regular maintenance</option>
                  <option value="Medium" selected>🟡 Medium — Needs attention within 48h</option>
                  <option value="High">🔴 High — Immediate hazard or drinking water issue</option>
                </select>
              </div>

            </div>

            <!-- Ward & Location Row -->
            <div class="form-row">
              
              <div class="form-group">
                <label for="complaintWard">Select Ward <span class="req">*</span></label>
                <select id="complaintWard" class="form-control" required>
                  <option value="">-- Select Ward Coverage --</option>
                  <option value="Ward 1 - Shivaji Nagar">Ward 1 - Shivaji Nagar (Bhavan Area)</option>
                  <option value="Ward 2 - Shanti Nagar">Ward 2 - Shanti Nagar (School Area)</option>
                  <option value="Ward 3 - Bazar Peth">Ward 3 - Bazar Peth (Market Road)</option>
                  <option value="Ward 4 - Gandhi Chowk">Ward 4 - Gandhi Chowk (Temple Area)</option>
                  <option value="Ward 5 - Ambedkar Colony">Ward 5 - Ambedkar Colony</option>
                  <option value="Ward 6 - Kranti Nagar">Ward 6 - Kranti Nagar (Outskirts)</option>
                </select>
                <span class="form-error-msg" id="complaintWardError"></span>
              </div>

              <div class="form-group">
                <label for="complaintLocation">Specific Location / Landmark <span class="req">*</span></label>
                <input type="text" id="complaintLocation" class="form-control" placeholder="e.g. Near Pole #14, Opposite Old Banyan Tree" required>
                <span class="form-error-msg" id="complaintLocationError"></span>
              </div>

            </div>

            <!-- Detailed Description -->
            <div class="form-group">
              <label for="complaintDescription">Detailed Problem Description <span class="req">*</span></label>
              <textarea id="complaintDescription" rows="4" class="form-control" placeholder="Explain the problem in detail. How long has it existed? How many households are affected?" required></textarea>
              <span class="form-error-msg" id="complaintDescriptionError"></span>
              <span class="form-hint">Detailed descriptions help Panchayat staff bring the right replacement tools and parts.</span>
            </div>

            <!-- SECTION 3: IMAGE UPLOAD (FILEREADER API) -->
            <div class="form-section-title" style="margin-top: 2rem;">
              3. Photographic Evidence (FileReader API)
            </div>

            <div class="form-group">
              <label>Attach Problem Photograph (Optional but strongly recommended)</label>
              
              <!-- Hidden native file input -->
              <input type="file" id="complaintPhoto" accept="image/jpeg, image/jpg, image/png, image/webp" style="display: none;">

              <!-- Clickable Drag & Drop Zone -->
              <div class="upload-dropzone" id="uploadDropzone">
                <div class="upload-icon">📷</div>
                <div class="upload-prompt">Click to browse or drag & drop a photo here</div>
                <div class="upload-sub">Supports JPG, JPEG, and PNG (Max 3 MB)</div>
              </div>

              <!-- Live Image Preview Card -->
              <div class="file-preview-card" id="filePreviewCard" style="display: none;">
                <img id="previewThumb" src="" alt="Selected Preview" class="file-preview-img">
                <div class="file-preview-info">
                  <div class="file-preview-name" id="previewFilename">photo.jpg</div>
                  <div class="file-preview-size" id="previewFilesize">124 KB</div>
                  <div class="file-preview-status">✓ Photo converted to Base64 data URL & ready for submission</div>
                </div>
                <button type="button" class="btn-remove-file" id="btnRemovePhoto">✕ Remove Photo</button>
              </div>

              <span class="form-hint" style="margin-top: 0.5rem;">
                ℹ️ <strong>How it works:</strong> The browser's <code>FileReader API</code> reads your file, compresses it on a canvas, and saves it directly into the complaint record inside browser <code>localStorage</code>. The Panchayat administrator will view this exact photograph on their dashboard!
              </span>
            </div>

            <!-- Submit Actions -->
            <div style="margin-top: 2.2rem; padding-top: 1.25rem; border-top: 1px solid var(--border-soil); display: flex; justify-content: flex-end; gap: 0.85rem; align-items: center;">
              <a href="citizen.html" class="btn btn-outline">Cancel</a>
              <button type="submit" class="btn btn-primary btn-lg" id="btnSubmitGrievance">
                🚀 Register Grievance & Generate Ticket
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  </main>

  <!-- SUCCESS MODAL: Shows generated Complaint ID and quick tracking links -->
  <div class="modal-backdrop" id="submissionSuccessModal">
    <div class="modal-box" style="text-align: center; max-width: 520px;">
      
      <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--success-bg); color: var(--success-color); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem; border: 2px solid #A7F3D0;">
        ✓
      </div>

      <h3 style="font-size: 1.45rem; color: var(--primary-900); margin-bottom: 0.35rem;">
        Complaint Submitted Successfully!
      </h3>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
        Your grievance has been registered on the Sundarpur Gram Panchayat official portal.
      </p>

      <div style="background: var(--cream-bg); border: 2px dashed var(--primary-500); border-radius: var(--radius-sm); padding: 1.1rem; margin-bottom: 1.5rem;">
        <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 0.3rem;">
          Official Tracking Ticket ID
        </span>
        <span id="successComplaintId" style="font-family: var(--serif); font-size: 1.85rem; font-weight: 700; color: var(--primary-700); letter-spacing: 0.03em;">
          CMP-2026-0001
        </span>
        <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.35rem;">
          Saved to localStorage • Accessible across all pages
        </span>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <a href="track.html" class="btn btn-primary" id="btnModalTrack">
          🔍 Track This Complaint
        </a>
        <a href="citizen.html" class="btn btn-outline">
          📊 Back to Dashboard
        </a>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="wrap" style="text-align: center; font-size: 0.78rem; color: var(--text-muted);">
      © 2026 Sundarpur Gram Panchayat • GramSetu Grievance Submission Portal
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script src="js/complaint.js"></script>
  <script>
    // Pre-select category if passed in URL query param
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const cat = urlParams.get('category');
      if (cat) {
        const catSelect = document.getElementById('complaintCategory');
        if (catSelect) catSelect.value = cat;
      }
    });
  </script>
</body>
</html>
```

---

## File: `track.html` <a id="file-track_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Track Grievance | GramSetu — Sundarpur Gram Panchayat</title>
  <meta name="description" content="Track live resolution status, view uploaded photograph, inspect administrative remarks, and follow the 4-step progress timeline for your Panchayat complaint.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  
  <style>
    .track-search-shell {
      max-width: 680px;
      margin: 0 auto 2rem;
      background: var(--paper);
      border: 1px solid var(--border-soil);
      border-radius: var(--radius-md);
      padding: 1.6rem 2rem;
      box-shadow: var(--shadow-md);
      text-align: center;
    }
    .track-input-row {
      display: flex;
      gap: 0.6rem;
      margin-top: 1.1rem;
    }
    .track-input-row input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 2px solid var(--border-soil);
      border-radius: var(--radius-sm);
      font-size: 1.05rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.04em;
    }
    .track-input-row input:focus {
      border-color: var(--primary-500);
      outline: none;
    }
    @media (max-width: 600px) {
      .track-input-row {
        flex-direction: column;
      }
      .track-search-shell {
        padding: 1.25rem 1rem;
      }
    }
  </style>
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat Grievance Tracking Portal</span>
      </div>
      <div class="top-gov-right">
        <span>Open Public Tracking • No Login Required</span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>Real-Time Grievance Tracking</small></span>
        </div>
      </a>

      <nav class="site-nav">
        <a href="index.html">🏠 Home Portal</a>
        <a href="citizen.html">📊 Citizen Dashboard</a>
        <a href="complaint.html">➕ File Complaint</a>
        <a href="track.html" class="active">🔍 Track Status</a>
      </nav>

      <div class="nav-right-actions">
        <div id="headerAuthContainer"></div>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content" style="padding: 2.5rem 0 4rem;">
    <div class="wrap">

      <!-- Tracker Search Shell -->
      <div class="track-search-shell">
        <div style="font-size: 2.2rem; margin-bottom: 0.4rem;">🔍</div>
        <h1 style="font-size: 1.85rem; color: var(--primary-900); margin-bottom: 0.35rem;">
          Track Complaint Status
        </h1>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0 auto; max-width: 46ch;">
          Enter your unique Grievance Tracking ID to view the current redressal stage, uploaded photo evidence, and Panchayat administrative remarks.
        </p>

        <div class="track-input-row">
          <input type="text" id="trackIdInput" placeholder="e.g. CMP-2026-0001" autocomplete="off">
          <button type="button" class="btn btn-primary btn-lg" id="btnTrackSearch">
            Track Grievance
          </button>
        </div>

        <!-- Quick Demo Ticket Selectors -->
        <div style="margin-top: 1rem; font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
          <span>Demo Tickets:</span>
          <a href="javascript:void(0)" onclick="quickTrack('CMP-2026-0001')" style="color:var(--primary-700); font-weight:600; text-decoration:underline;">
            CMP-2026-0001 (In Progress)
          </a>
          <span>•</span>
          <a href="javascript:void(0)" onclick="quickTrack('CMP-2026-0002')" style="color:var(--success-color); font-weight:600; text-decoration:underline;">
            CMP-2026-0002 (Resolved)
          </a>
          <span>•</span>
          <a href="javascript:void(0)" onclick="quickTrack('CMP-2026-0003')" style="color:var(--accent-ochre-dark); font-weight:600; text-decoration:underline;">
            CMP-2026-0003 (Under Review)
          </a>
        </div>
      </div>

      <!-- Result Container (Dynamically rendered by js/track.js) -->
      <div id="trackResultContainer" style="max-width: 900px; margin: 0 auto;"></div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="wrap" style="text-align: center; font-size: 0.78rem; color: var(--text-muted);">
      © 2026 Sundarpur Gram Panchayat • GramSetu Real-Time Grievance Redressal
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script src="js/track.js"></script>
</body>
</html>
```

---

## File: `admin.html` <a id="file-admin_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panchayat Official Action Center | GramSetu</title>
  <meta name="description" content="Panchayat Administrative Action Center for Sundarpur Gram Panchayat. Review citizen grievances, inspect photo evidence, update statuses with remarks, and manage village development works.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Shared Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  
  <style>
    .admin-nav-tabs {
      display: flex;
      gap: 0.5rem;
      border-bottom: 2px solid var(--border-soil);
      margin-bottom: 1.8rem;
      overflow-x: auto;
      white-space: nowrap;
    }
    .admin-nav-tab {
      padding: 0.75rem 1.25rem;
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--text-muted);
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      margin-bottom: -2px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      transition: var(--transition);
      font-family: var(--sans);
    }
    .admin-nav-tab:hover {
      color: var(--primary-900);
      background: var(--primary-100);
      border-radius: var(--radius-xs) var(--radius-xs) 0 0;
    }
    .admin-nav-tab.active {
      color: var(--primary-900);
      border-bottom-color: var(--accent-ochre);
      font-weight: 700;
      background: var(--paper);
    }
    .admin-profile-box {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }
    .admin-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--primary-700);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 700;
      border: 1px solid var(--primary-500);
    }
  </style>
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div class="top-gov-info">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat • Official Action Center</span>
      </div>
      <div class="top-gov-right">
        <span>Authenticated Session: Administrator</span>
      </div>
    </div>
  </div>

  <!-- Site Header -->
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="brand">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>Panchayat Official Action Center</small></span>
        </div>
      </a>

      <div style="display: flex; align-items: center; gap: 1.25rem;">
        <span class="user-chip admin-badge">
          🔑 Panchayat Official
        </span>

        <div class="admin-profile-box">
          <div class="admin-avatar">RS</div>
          <div style="font-size: 0.84rem; line-height: 1.2;">
            <strong id="adminOfficerName" style="color:var(--primary-900); display:block;">Rajesh Soni</strong>
            <small id="adminOfficerDesignation" style="color:var(--text-muted);">Gram Sevak</small>
          </div>
        </div>

        <button class="btn btn-outline-ochre btn-sm" onclick="Auth.logout()">Log out</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content" style="padding: 2rem 0 4rem;">
    <div class="wrap">

      <!-- Page Title & Actions -->
      <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.6rem;">
        <div>
          <h1 style="font-size: 1.85rem; color: var(--primary-900); margin: 0 0 0.25rem;">
            Panchayat Grievance & Development Control Desk
          </h1>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0; max-width: 60ch;">
            Review incoming citizen complaints, inspect uploaded photographic evidence, assign field officers, record administrative remarks, and publish village notices.
          </p>
        </div>

        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-outline btn-sm" onclick="openModal('addAnnouncementModal')">
            📢 Post Announcement
          </button>
          <button type="button" class="btn btn-ochre btn-sm" onclick="openModal('addProjectModal')">
            ➕ Register Development Project
          </button>
        </div>
      </div>

      <!-- Live Dynamic KPI Cards (Calculated from localStorage) -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">
            <span>Total Grievances</span>
            <span>📋</span>
          </div>
          <div class="kpi-val" id="kpiTotalComplaints">0</div>
          <div class="kpi-subtext">All complaints registered in portal</div>
        </div>

        <div class="kpi-card kpi-pending">
          <div class="kpi-label">
            <span>Pending / Under Review</span>
            <span>⏳</span>
          </div>
          <div class="kpi-val amber" id="kpiPendingComplaints">0</div>
          <div class="kpi-subtext">Awaiting inspection or assignment</div>
        </div>

        <div class="kpi-card kpi-progress">
          <div class="kpi-label">
            <span>Action In Progress</span>
            <span>⚡</span>
          </div>
          <div class="kpi-val blue" id="kpiProgressComplaints">0</div>
          <div class="kpi-subtext">Maintenance teams on site</div>
        </div>

        <div class="kpi-card kpi-resolved">
          <div class="kpi-label">
            <span>Resolved with Photo Proof</span>
            <span>✓</span>
          </div>
          <div class="kpi-val success" id="kpiResolvedComplaints">0</div>
          <div class="kpi-subtext">Closed tickets with remarks</div>
        </div>

        <div class="kpi-card kpi-citizens">
          <div class="kpi-label">
            <span>Registered Citizens</span>
            <span>👥</span>
          </div>
          <div class="kpi-val" id="kpiTotalCitizens">0</div>
          <div class="kpi-subtext">Active portal residents</div>
        </div>
      </div>

      <!-- Admin Navigation Tabs -->
      <div class="admin-nav-tabs">
        <button class="admin-nav-tab active" id="adminTabBtn_complaints" onclick="switchAdminTab('complaints')">
          📢 Citizen Complaints
        </button>
        <button class="admin-nav-tab" id="adminTabBtn_announcements" onclick="switchAdminTab('announcements')">
          🔔 Announcements Manager
        </button>
        <button class="admin-nav-tab" id="adminTabBtn_projects" onclick="switchAdminTab('projects')">
          🏗️ Development Works
        </button>
        <button class="admin-nav-tab" id="adminTabBtn_citizens" onclick="switchAdminTab('citizens')">
          👥 Registered Citizens
        </button>
      </div>

      <!-- TAB 1: CITIZEN COMPLAINTS MANAGEMENT -->
      <section id="adminTabSection_complaints">
        
        <!-- Search & Filter Toolbar -->
        <div class="toolbar">
          
          <div class="toolbar-search">
            <span class="toolbar-search-icon">🔍</span>
            <input type="text" id="adminSearchInput" placeholder="Search by Ticket ID, Title, Citizen Name, or Location...">
          </div>

          <div class="toolbar-filter">
            <select id="adminFilterCategory">
              <option value="all">All Categories</option>
              <option value="Water Supply">💧 Water Supply</option>
              <option value="Street Lights">💡 Street Lights</option>
              <option value="Roads">🛣️ Roads</option>
              <option value="Drainage">🌊 Drainage</option>
              <option value="Sanitation">🧹 Sanitation</option>
              <option value="Electricity">⚡ Electricity</option>
              <option value="Waste Management">🗑️ Waste Management</option>
              <option value="Other">📋 Other</option>
            </select>
          </div>

          <div class="toolbar-filter">
            <select id="adminFilterStatus">
              <option value="all">All Statuses</option>
              <option value="Submitted">Submitted</option>
              <option value="Under Review">Under Review</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div class="toolbar-filter">
            <select id="adminFilterPriority">
              <option value="all">All Priorities</option>
              <option value="High">🔴 High Priority</option>
              <option value="Medium">🟡 Medium Priority</option>
              <option value="Low">🟢 Low Priority</option>
            </select>
          </div>

          <div class="toolbar-filter">
            <select id="adminFilterWard">
              <option value="all">All Wards</option>
              <option value="Ward 1 - Shivaji Nagar">Ward 1</option>
              <option value="Ward 2 - Shanti Nagar">Ward 2</option>
              <option value="Ward 3 - Bazar Peth">Ward 3</option>
              <option value="Ward 4 - Gandhi Chowk">Ward 4</option>
              <option value="Ward 5 - Ambedkar Colony">Ward 5</option>
              <option value="Ward 6 - Kranti Nagar">Ward 6</option>
            </select>
          </div>

          <div>
            <button type="button" class="btn btn-outline btn-sm" id="btnClearFilters">
              ✕ Clear Filters
            </button>
          </div>

        </div>

        <!-- Table Count Indicator -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-size:0.84rem; color:var(--text-muted);">
          <span id="filteredComplaintsCount">Loading tickets...</span>
          <span>Tip: Click on any thumbnail image to inspect photo evidence</span>
        </div>

        <!-- Complaints Table -->
        <div class="table-panel">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Grievance Summary & Ward</th>
                  <th>Citizen Info</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Photo Evidence</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="adminComplaintsTbody">
                <!-- Dynamically rendered by js/admin.js -->
              </tbody>
            </table>
          </div>
        </div>

      </section>

      <!-- TAB 2: ANNOUNCEMENTS MANAGER -->
      <section id="adminTabSection_announcements" style="display: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <div>
            <h3 style="font-size: 1.3rem; color: var(--primary-900); margin: 0;">Village Announcements & Public Notices</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.2rem 0 0;">
              Announcements published here are instantly visible on the citizen landing page and dashboard.
            </p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openModal('addAnnouncementModal')">
            ➕ Post New Notice
          </button>
        </div>

        <div id="adminAnnouncementsList">
          <!-- Populated dynamically -->
        </div>
      </section>

      <!-- TAB 3: DEVELOPMENT PROJECTS -->
      <section id="adminTabSection_projects" style="display: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <div>
            <h3 style="font-size: 1.3rem; color: var(--primary-900); margin: 0;">Village Infrastructure & Development Projects</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.2rem 0 0;">
              Sanctioned civic projects, contractor allocations, budget expenditure, and physical execution progress.
            </p>
          </div>
          <button class="btn btn-ochre btn-sm" onclick="openModal('addProjectModal')">
            ➕ Register Development Project
          </button>
        </div>

        <div id="adminProjectsList">
          <!-- Populated dynamically -->
        </div>
      </section>

      <!-- TAB 4: REGISTERED CITIZENS DIRECTORY -->
      <section id="adminTabSection_citizens" style="display: none;">
        <div style="margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.3rem; color: var(--primary-900); margin: 0;">Registered Citizens Directory</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.2rem 0 0;">
            Residents authenticated with Sundarpur Gram Panchayat portal.
          </p>
        </div>

        <div class="table-panel">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Resident Full Name</th>
                  <th>Email Address</th>
                  <th>Mobile Phone</th>
                  <th>Registered Ward</th>
                  <th>Grievances Filed</th>
                  <th>Account Status</th>
                </tr>
              </thead>
              <tbody id="adminCitizensTbody">
                <!-- Populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- =========================================================================
       MODALS
       ========================================================================= -->

  <!-- 1. ADMIN ACTION & STATUS UPDATE MODAL -->
  <div class="modal-backdrop" id="adminActionModal">
    <div class="modal-box modal-lg">
      <button class="modal-close" onclick="closeModal('adminActionModal')">×</button>
      
      <div class="modal-header">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span class="ticket-id" id="actionModalId" style="font-size: 1.25rem;">CMP-2026-0001</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Panchayat Redressal Order</span>
        </div>
        <h3 class="modal-title" id="actionModalTitle" style="margin-top: 0.3rem;">Issue Title</h3>
        <p class="modal-subtitle" id="actionModalMeta"></p>
      </div>

      <!-- Problem Description Box -->
      <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.9rem; margin-bottom: 1.25rem;">
        <label style="display: block; font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 0.25rem;">
          Citizen's Problem Description:
        </label>
        <p id="actionModalDesc" style="font-size: 0.88rem; color: var(--text-ink); margin: 0; line-height: 1.5;"></p>
      </div>

      <!-- Citizen's Uploaded Photo Preview in Modal -->
      <div style="margin-bottom: 1.25rem;" id="actionModalPhotoContainer">
        <!-- Rendered by js/admin.js -->
      </div>

      <!-- Action Form -->
      <form id="adminActionForm">
        
        <div class="form-row">
          
          <div class="form-group">
            <label for="actionModalStatus">Update Resolution Status <span class="req">*</span></label>
            <select id="actionModalStatus" class="form-control" required>
              <option value="Submitted">Submitted (Registered)</option>
              <option value="Under Review">Under Review (Ward Inspection)</option>
              <option value="In Progress">In Progress (Maintenance Team Assigned)</option>
              <option value="Resolved">Resolved (Work Completed & Verified)</option>
              <option value="Rejected">Rejected (Out of scope / Duplicate)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="actionModalOfficer">Assign Field Officer / Contractor</label>
            <input type="text" id="actionModalOfficer" class="form-control" placeholder="e.g. Er. Suresh Kale (PWD) / Jal Nigam Team">
          </div>

        </div>

        <div class="form-group">
          <label for="actionModalRemark">Administrative Remark & Action Taken Notes <span class="req">*</span></label>
          <textarea id="actionModalRemark" rows="3" class="form-control" placeholder="Describe the maintenance action, materials replaced, or inspection report (e.g. 'Street light repair team has been assigned. 45W LED fixture installed.')."></textarea>
          <span class="form-hint">This remark will immediately appear on the citizen's tracking page.</span>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-outline" onclick="closeModal('adminActionModal')">Cancel</button>
          <button type="submit" class="btn btn-primary">💾 Save Status & Record Official Action</button>
        </div>

      </form>
    </div>
  </div>

  <!-- 2. ADD ANNOUNCEMENT MODAL -->
  <div class="modal-backdrop" id="addAnnouncementModal">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('addAnnouncementModal')">×</button>
      <div class="modal-header">
        <h3 class="modal-title">📢 Post New Village Announcement</h3>
        <p class="modal-subtitle">Publish an official circular on the GramSetu notice board.</p>
      </div>

      <form id="addAnnouncementForm">
        <div class="form-group">
          <label for="newAnnTitle">Announcement Title <span class="req">*</span></label>
          <input type="text" id="newAnnTitle" class="form-control" placeholder="e.g. Gram Sabha Special Meeting on Water Conservation" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="newAnnCategory">Category <span class="req">*</span></label>
            <select id="newAnnCategory" class="form-control" required>
              <option value="Gram Sabha">Gram Sabha Meeting</option>
              <option value="Water Supply">Water Supply Update</option>
              <option value="Cleanliness">Cleanliness & Sanitation</option>
              <option value="Health">Health & Immunization</option>
              <option value="Agriculture">Agriculture & Subsidies</option>
              <option value="General">General Notice</option>
            </select>
          </div>

          <div class="form-group">
            <label for="newAnnDate">Notice / Event Date <span class="req">*</span></label>
            <input type="date" id="newAnnDate" class="form-control" required>
          </div>
        </div>

        <div class="form-group">
          <label for="newAnnDesc">Full Announcement Details <span class="req">*</span></label>
          <textarea id="newAnnDesc" rows="4" class="form-control" placeholder="Specify meeting venue, agenda, time, instructions, and who should attend..." required></textarea>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-outline" onclick="closeModal('addAnnouncementModal')">Cancel</button>
          <button type="submit" class="btn btn-primary">Publish to Notice Board</button>
        </div>
      </form>
    </div>
  </div>

  <!-- 3. ADD DEVELOPMENT PROJECT MODAL -->
  <div class="modal-backdrop" id="addProjectModal">
    <div class="modal-box modal-lg">
      <button class="modal-close" onclick="closeModal('addProjectModal')">×</button>
      <div class="modal-header">
        <h3 class="modal-title">🏗️ Register New Village Development Project</h3>
        <p class="modal-subtitle">Record sanctioned civic works for proactive public disclosure and social audit.</p>
      </div>

      <form id="addProjectForm">
        <div class="form-row">
          <div class="form-group">
            <label for="newProjName">Project Title <span class="req">*</span></label>
            <input type="text" id="newProjName" class="form-control" placeholder="e.g. Concrete Road & Paver Blocks" required>
          </div>
          <div class="form-group">
            <label for="newProjScheme">Government Funding Scheme <span class="req">*</span></label>
            <input type="text" id="newProjScheme" class="form-control" placeholder="e.g. 15th Finance Commission / Jal Jeevan Mission" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="newProjCategory">Work Category <span class="req">*</span></label>
            <select id="newProjCategory" class="form-control" required>
              <option value="Roads">Roads & Connectivity</option>
              <option value="Water Supply">Drinking Water & RO Plant</option>
              <option value="Drainage">Underground Drainage</option>
              <option value="Sanitation">Community Sanitation & Toilets</option>
              <option value="Electricity">Solar Street Lighting</option>
              <option value="Digital Services">Community Digital Centre</option>
              <option value="Education">Anganwadi & School Repair</option>
            </select>
          </div>
          <div class="form-group">
            <label for="newProjWard">Ward Coverage <span class="req">*</span></label>
            <input type="text" id="newProjWard" class="form-control" placeholder="e.g. Ward 2 & Ward 4" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="newProjBudget">Sanctioned Budget (₹ in Lakhs) <span class="req">*</span></label>
            <input type="number" id="newProjBudget" step="0.01" min="0" class="form-control" placeholder="e.g. 18.50" required>
          </div>
          <div class="form-group">
            <label for="newProjSpent">Expenditure to Date (₹ in Lakhs)</label>
            <input type="number" id="newProjSpent" step="0.01" min="0" class="form-control" placeholder="e.g. 6.20">
          </div>
          <div class="form-group">
            <label for="newProjProgress">Execution Progress (%)</label>
            <input type="number" id="newProjProgress" min="0" max="100" class="form-control" placeholder="0 - 100">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="newProjTargetDate">Target Completion Date <span class="req">*</span></label>
            <input type="date" id="newProjTargetDate" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="newProjContractor">Contractor / Executing Agency</label>
            <input type="text" id="newProjContractor" class="form-control" placeholder="e.g. Sharda Civil Infrastructure Ltd.">
          </div>
        </div>

        <div class="form-group">
          <label for="newProjDesc">Scope & Technical Specifications</label>
          <textarea id="newProjDesc" rows="3" class="form-control" placeholder="Explain length of road, water filtration capacity, or expected beneficiaries..."></textarea>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-outline" onclick="closeModal('addProjectModal')">Cancel</button>
          <button type="submit" class="btn btn-primary">Register Project & Publish</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="wrap" style="text-align: center; font-size: 0.78rem; color: var(--text-muted);">
      © 2026 Sundarpur Gram Panchayat • GramSetu Official Administration Action Center
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/auth.js"></script>
  <script src="js/admin.js"></script>
</body>
</html>
```

---

## File: `gramsetu_single_file.html` <a id="file-gramsetu_single_file_html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GramSetu | Digital Gram Panchayat Portal (Single-File Edition)</title>
  <meta name="description" content="Complete standalone single-file edition of GramSetu. Runs directly in any web browser without any folders or external server.">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       GRAMSETU UNIFIED STYLESHEET
       ========================================================================== */
    :root {
      --primary-950: #0e2014;
      --primary-900: #16301F;
      --primary-800: #1a442d;
      --primary-700: #1F5C3F;
      --primary-600: #2a7350;
      --primary-500: #3D8A63;
      --primary-100: #E4EFE7;
      --primary-50:  #F2F8F4;

      --accent-ochre: #C4841D;
      --accent-ochre-dark: #A66A12;
      --accent-ochre-light: #FBEED8;
      --accent-blue: #2D6E8E;

      --success-color: #2F7A4F;
      --success-bg: #E1F2E6;
      --warning-color: #C4841D;
      --warning-bg: #FDF3E3;
      --danger-color: #B4432E;
      --danger-bg: #FCE8E6;

      --cream-bg: #FBF7EE;
      --paper: #FFFDF8;
      --text-ink: #202A1F;
      --text-muted: #6B6355;
      --border-soil: #E4DCC8;

      --radius-xs: 4px;
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-full: 9999px;

      --shadow-sm: 0 1px 3px rgba(22, 48, 31, 0.08);
      --shadow-md: 0 4px 12px rgba(22, 48, 31, 0.08);
      --shadow-xl: 0 15px 35px rgba(22, 48, 31, 0.2);

      --serif: 'Lora', Georgia, serif;
      --sans: 'Hind', 'Segoe UI', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: var(--sans);
      color: var(--text-ink);
      background: var(--cream-bg);
      line-height: 1.55;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    h1, h2, h3, h4, h5 { font-family: var(--serif); color: var(--primary-900); margin-top: 0; font-weight: 600; line-height: 1.25; }
    p { margin-top: 0; margin-bottom: 0.9rem; }
    p:last-child { margin-bottom: 0; }
    a { color: var(--primary-700); text-decoration: none; cursor: pointer; }
    a:hover { color: var(--accent-ochre-dark); }
    img { max-width: 100%; height: auto; display: block; }
    button, input, select, textarea { font-family: inherit; font-size: inherit; }

    .wrap { width: 100%; max-width: 1220px; margin: 0 auto; padding: 0 1.5rem; }
    .main-view-container { flex: 1; }

    /* Top Strip */
    .top-gov-strip {
      background: var(--primary-900);
      color: #EFE8D6;
      font-size: 0.78rem;
      padding: 0.45rem 0;
      border-bottom: 1px solid rgba(239, 232, 214, 0.15);
    }
    .top-gov-strip .wrap { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem; }
    .panchayat-pill {
      background: rgba(239, 232, 214, 0.12);
      padding: 0.15rem 0.6rem;
      border-radius: var(--radius-full);
      font-size: 0.72rem;
      color: #D8CFAE;
      border: 1px solid rgba(239, 232, 214, 0.2);
    }

    /* Site Header */
    .site-header {
      background: var(--paper);
      border-bottom: 1px solid var(--border-soil);
      position: sticky;
      top: 0;
      z-index: 40;
      box-shadow: 0 2px 8px rgba(22, 48, 31, 0.04);
    }
    .site-header .wrap { display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 1.5rem; gap: 1rem; }
    .brand { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; cursor: pointer; }
    .brand-emblem {
      width: 42px; height: 42px; border-radius: 50%;
      background: var(--primary-100); display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; border: 1.5px solid var(--primary-500); flex-shrink: 0;
    }
    .brand-name { font-family: var(--serif); font-size: 1.25rem; font-weight: 700; color: var(--primary-900); line-height: 1.1; }
    .brand-name small { display: block; font-family: var(--sans); font-weight: 500; font-size: 0.72rem; color: var(--text-muted); }

    /* Nav links */
    .site-nav { display: flex; align-items: center; gap: 1.2rem; }
    .site-nav button {
      background: none; border: none; padding: 0.4rem 0;
      font-size: 0.9rem; font-weight: 600; color: var(--text-ink);
      border-bottom: 2px solid transparent; cursor: pointer;
      display: flex; align-items: center; gap: 0.3rem;
    }
    .site-nav button:hover, .site-nav button.active {
      color: var(--primary-700); border-bottom-color: var(--accent-ochre);
    }

    /* Buttons */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
      font-family: var(--sans); font-weight: 600; font-size: 0.88rem;
      padding: 0.55rem 1.15rem; border-radius: var(--radius-sm); border: 1px solid transparent;
      cursor: pointer; text-decoration: none; line-height: 1.25; transition: all 0.2s ease;
      white-space: nowrap;
    }
    .btn-primary { background: var(--primary-700); color: #fff; }
    .btn-primary:hover { background: var(--primary-900); }
    .btn-ochre { background: var(--accent-ochre); color: #241800; }
    .btn-ochre:hover { background: var(--accent-ochre-dark); color: #fff; }
    .btn-outline { background: transparent; border-color: var(--primary-500); color: var(--primary-700); }
    .btn-outline:hover { background: var(--primary-100); }
    .btn-outline-ochre { background: transparent; border-color: var(--accent-ochre); color: var(--accent-ochre-dark); }
    .btn-outline-ochre:hover { background: var(--accent-ochre-light); }
    .btn-danger { background: var(--danger-color); color: #fff; }
    .btn-sm { font-size: 0.78rem; padding: 0.35rem 0.75rem; border-radius: var(--radius-xs); }
    .btn-lg { font-size: 1rem; padding: 0.75rem 1.5rem; }
    .btn-block { width: 100%; }

    /* Badges & Pills */
    .pill {
      display: inline-flex; align-items: center; gap: 0.3rem;
      padding: 0.2rem 0.6rem; border-radius: var(--radius-full);
      font-size: 0.74rem; font-weight: 600; white-space: nowrap;
    }
    .pill-submitted { background: #E8EEF3; color: var(--accent-blue); border: 1px solid #CBDCE6; }
    .pill-under-review { background: var(--accent-ochre-light); color: var(--accent-ochre-dark); border: 1px solid #EAD3A5; }
    .pill-in-progress { background: var(--primary-100); color: var(--primary-700); border: 1px solid #C4DFC9; }
    .pill-resolved { background: var(--success-bg); color: var(--success-color); border: 1px solid #B8E4C5; }
    .pill-rejected { background: var(--danger-bg); color: var(--danger-color); border: 1px solid #F3C4BE; }

    .priority-tag {
      display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 700;
      padding: 0.15rem 0.5rem; border-radius: var(--radius-xs);
    }
    .priority-low { background: #EFF6FF; color: #1D4ED8; }
    .priority-medium { background: #FFFBEB; color: #B45309; }
    .priority-high { background: #FEF2F2; color: #B91C1C; }

    /* Cards & KPIs */
    .card {
      background: var(--paper); border: 1px solid var(--border-soil);
      border-radius: var(--radius-md); padding: 1.3rem; box-shadow: var(--shadow-sm);
    }
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.6rem; }
    .kpi-card {
      background: var(--paper); border: 1px solid var(--border-soil);
      border-radius: var(--radius-md); padding: 1.1rem 1.2rem;
      border-top: 3px solid var(--primary-500); box-shadow: var(--shadow-sm);
    }
    .kpi-card.pending { border-top-color: var(--accent-ochre); }
    .kpi-card.progress { border-top-color: var(--accent-blue); }
    .kpi-card.resolved { border-top-color: var(--success-color); }
    .kpi-label { font-size: 0.78rem; color: var(--text-muted); font-weight: 600; display: flex; justify-content: space-between; }
    .kpi-val { font-family: var(--serif); font-size: 1.75rem; font-weight: 700; color: var(--primary-900); margin-top: 0.35rem; }
    .kpi-val.amber { color: var(--accent-ochre-dark); }
    .kpi-val.blue { color: var(--accent-blue); }
    .kpi-val.success { color: var(--success-color); }
    .kpi-subtext { font-size: 0.72rem; color: var(--text-muted); margin-top: 0.3rem; }

    /* Tables */
    .table-panel { background: var(--paper); border: 1px solid var(--border-soil); border-radius: var(--radius-md); overflow: hidden; }
    .table-responsive { width: 100%; overflow-x: auto; }
    table.data-table { width: 100%; border-collapse: collapse; text-align: left; }
    table.data-table th {
      font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.04em;
      color: var(--text-muted); font-weight: 700; padding: 0.8rem 1rem;
      background: var(--primary-100); border-bottom: 1px solid var(--border-soil); white-space: nowrap;
    }
    table.data-table td { padding: 0.85rem 1rem; font-size: 0.88rem; border-bottom: 1px solid var(--border-soil); vertical-align: middle; }
    table.data-table tr:hover td { background: #FCFAF3; }
    .ticket-id { font-family: var(--serif); font-weight: 700; color: var(--primary-700); }
    .table-thumb {
      width: 44px; height: 44px; border-radius: var(--radius-xs); object-fit: cover;
      border: 1px solid var(--border-soil); cursor: pointer;
    }
    .table-thumb-placeholder {
      width: 44px; height: 44px; border-radius: var(--radius-xs);
      border: 1px dashed var(--border-soil); background: var(--cream-bg);
      display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--text-muted);
    }

    /* Forms */
    .form-group { margin-bottom: 1.15rem; }
    .form-group label { display: block; font-size: 0.84rem; font-weight: 600; color: var(--text-ink); margin-bottom: 0.35rem; }
    .form-group label .req { color: var(--danger-color); }
    .form-control {
      width: 100%; padding: 0.62rem 0.8rem; border: 1px solid var(--border-soil);
      border-radius: var(--radius-sm); background: var(--cream-bg); font-size: 0.9rem; color: var(--text-ink);
    }
    .form-control:focus { outline: 2px solid var(--primary-500); outline-offset: 1px; border-color: var(--primary-500); background: #fff; }
    .form-control.is-invalid { border-color: var(--danger-color); background: #FFF9F8; }
    .form-error-msg { font-size: 0.75rem; color: var(--danger-color); margin-top: 0.3rem; display: block; }
    .form-hint { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.3rem; display: block; }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; }

    /* Upload Dropzone */
    .upload-dropzone {
      border: 2px dashed var(--border-soil); border-radius: var(--radius-md);
      background: var(--cream-bg); padding: 1.4rem; text-align: center; cursor: pointer;
    }
    .upload-dropzone:hover { border-color: var(--primary-500); background: var(--primary-50); }
    .file-preview-card {
      display: flex; align-items: center; gap: 0.9rem; background: var(--paper);
      border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.75rem;
    }
    .file-preview-img { width: 64px; height: 64px; border-radius: var(--radius-xs); object-fit: cover; border: 1px solid var(--border-soil); }

    /* Timeline */
    .tracking-timeline {
      display: flex; justify-content: space-between; align-items: center; position: relative; margin: 2rem 0 1.8rem; padding: 0 1rem;
    }
    .tracking-timeline::before {
      content: ""; position: absolute; top: 19px; left: 3rem; right: 3rem; height: 4px; background: var(--border-soil); z-index: 1;
    }
    .timeline-progress-bar {
      position: absolute; top: 19px; left: 3rem; height: 4px; background: var(--primary-700); z-index: 2; transition: width 0.4s ease;
    }
    .timeline-step { position: relative; z-index: 3; display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 80px; }
    .timeline-step-bubble {
      width: 40px; height: 40px; border-radius: 50%; background: var(--paper); border: 3px solid var(--border-soil);
      color: var(--text-muted); display: flex; align-items: center; justify-content: center; font-size: 0.95rem; font-weight: 700;
    }
    .timeline-step.completed .timeline-step-bubble { background: var(--primary-700); border-color: var(--primary-700); color: #fff; }
    .timeline-step.active .timeline-step-bubble { background: var(--accent-ochre); border-color: var(--accent-ochre); color: #241800; box-shadow: 0 0 0 5px var(--accent-ochre-light); }
    .timeline-step-title { margin-top: 0.5rem; font-size: 0.78rem; font-weight: 600; color: var(--text-muted); }
    .timeline-step.active .timeline-step-title, .timeline-step.completed .timeline-step-title { color: var(--primary-900); }

    /* Progress bar */
    .progress-bar-wrap { width: 100%; height: 8px; background: var(--border-soil); border-radius: var(--radius-full); overflow: hidden; margin: 0.4rem 0; }
    .progress-bar-fill { height: 100%; background: var(--primary-700); border-radius: var(--radius-full); transition: width 0.4s ease; }
    .progress-bar-fill.ochre { background: var(--accent-ochre); }
    .progress-bar-fill.success { background: var(--success-color); }

    /* Modals & Toasts */
    .modal-backdrop {
      display: none; position: fixed; inset: 0; background: rgba(22, 48, 31, 0.65);
      backdrop-filter: blur(3px); align-items: center; justify-content: center; padding: 1.5rem; z-index: 100;
    }
    .modal-backdrop.open { display: flex; }
    .modal-box {
      background: var(--paper); border-radius: var(--radius-md); max-width: 560px; width: 100%;
      max-height: 90vh; overflow-y: auto; padding: 1.8rem; position: relative; box-shadow: var(--shadow-xl); border: 1px solid var(--border-soil);
    }
    .modal-box.modal-lg { max-width: 820px; }
    .modal-close {
      position: absolute; top: 1rem; right: 1.1rem; background: none; border: none; font-size: 1.4rem;
      color: var(--text-muted); cursor: pointer; line-height: 1;
    }
    .modal-header { margin-bottom: 1.1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-soil); }
    .modal-actions { margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end; border-top: 1px solid var(--border-soil); padding-top: 1rem; }

    #toastContainer { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 200; display: flex; flex-direction: column; gap: 0.5rem; pointer-events: none; }
    .toast {
      background: var(--primary-950); color: #EFE8D6; padding: 0.8rem 1.2rem; border-radius: var(--radius-sm);
      font-size: 0.85rem; box-shadow: 0 6px 20px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 0.6rem;
      border-left: 4px solid var(--accent-ochre); pointer-events: auto; animation: toast-in 0.25s ease;
    }
    .toast.toast-success { border-left-color: var(--success-color); }
    .toast.toast-error { border-left-color: var(--danger-color); }
    @keyframes toast-in { from { transform: translateY(15px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

    /* Single File View Container System */
    .spa-view { display: none; }
    .spa-view.active-view { display: block; }

    /* User Chip */
    .user-chip {
      display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.25rem 0.65rem; border-radius: var(--radius-full);
      background: var(--primary-50); border: 1px solid var(--primary-100); font-size: 0.8rem; font-weight: 600; color: var(--primary-900);
    }
    .user-chip.admin-badge { background: var(--accent-ochre-light); border-color: #EAD3A5; color: var(--accent-ochre-dark); }
    .user-avatar { width: 22px; height: 22px; border-radius: 50%; background: var(--primary-700); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; }
    .user-chip.admin-badge .user-avatar { background: var(--accent-ochre-dark); }

    /* Responsive */
    @media (max-width: 820px) {
      .site-nav { display: none; }
      .tracking-timeline { flex-direction: column; gap: 1.2rem; align-items: flex-start; }
      .tracking-timeline::before { display: none; }
      .timeline-progress-bar { display: none; }
      .timeline-step { flex-direction: row; gap: 0.8rem; text-align: left; }
    }
  </style>
</head>
<body>

  <!-- Top Government Strip -->
  <div class="top-gov-strip">
    <div class="wrap">
      <div style="display:flex; align-items:center; gap:0.6rem;">
        <span>🏛️ Department of Panchayati Raj • Government of Maharashtra</span>
        <span class="panchayat-pill">Sundarpur Gram Panchayat • Buldhana</span>
      </div>
      <div>
        <span>🕒 Official Smart Village Portal • Single-File Edition</span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="wrap">
      <div class="brand" onclick="navigateTo('home')">
        <div class="brand-emblem">🌾</div>
        <div class="brand-title">
          <span class="brand-name">GramSetu <small>ग्राम सेतु — Digital Smart Village Portal</small></span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="site-nav">
        <button type="button" class="active" id="navBtn_home" onclick="navigateTo('home')">🏠 Home</button>
        <button type="button" id="navBtn_complaint" onclick="navigateTo('complaint')">➕ File Grievance</button>
        <button type="button" id="navBtn_track" onclick="navigateTo('track')">🔍 Track Status</button>
        <button type="button" id="navBtn_citizen" onclick="navigateTo('citizen')" style="display:none;">📊 Citizen Dashboard</button>
        <button type="button" id="navBtn_admin" onclick="navigateTo('admin')" style="display:none; color:var(--accent-ochre-dark);">🔑 Admin Action Center</button>
      </nav>

      <!-- Auth Action Container -->
      <div style="display:flex; align-items:center; gap:0.75rem;" id="headerAuthContainer">
        <!-- Rendered by syncHeader() -->
      </div>
    </div>
  </header>

  <!-- Main View Container -->
  <main class="main-view-container">

    <!-- =======================================================================
         VIEW 1: HOME PAGE
         ======================================================================= -->
    <div id="view_home" class="spa-view active-view">
      
      <!-- Hero -->
      <section style="padding: 3.5rem 0 3rem; border-bottom: 1px solid var(--border-soil);">
        <div class="wrap" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 2.5rem; align-items: center;">
          <div>
            <div style="font-size: 0.85rem; color: var(--primary-700); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
              🌾 Digital Gateway to a Smarter Village
            </div>
            <h1 style="font-size: 2.4rem; color: var(--primary-900); margin-bottom: 1rem; line-height: 1.2;">
              Transparent, Accountable & Fast Rural Public Grievance Redressal
            </h1>
            <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.6rem; max-width: 48ch;">
              GramSetu connects villagers directly with the Panchayat administration. Submit complaints with real photo evidence, track resolution on a live 4-stage timeline, and inspect transparent village development funds.
            </p>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
              <button class="btn btn-ochre btn-lg" onclick="navigateTo('login')">🧑‍🌾 Citizen Login</button>
              <button class="btn btn-primary btn-lg" onclick="navigateTo('complaint')">📢 File Grievance</button>
              <button class="btn btn-outline btn-lg" onclick="navigateTo('track')">🔍 Track Ticket</button>
            </div>
            <div style="margin-top: 1.2rem; font-size: 0.82rem; color: var(--text-muted);">
              ✓ 100% Client-Side • LocalStorage & FileReader API • Zero server dependencies
            </div>
          </div>

          <!-- Hero KPI Notice Board -->
          <div class="card" style="background: var(--primary-900); color: #EFE8D6; border: none; padding: 1.8rem; box-shadow: var(--shadow-xl);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(239, 232, 214, 0.25); padding-bottom: 0.75rem; margin-bottom: 1.1rem;">
              <h3 style="font-size: 1.15rem; color: #F4EFDD; margin: 0;">Sundarpur Gram Panchayat</h3>
              <span class="pill pill-resolved" style="background: rgba(47, 122, 79, 0.4); border-color: rgba(47, 122, 79, 0.6); color: #A7F3D0;">Live Data</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.55rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
              <span style="font-size: 0.88rem; color: #D8CFAE;">Total Grievances Registered</span>
              <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: #FFF;" id="homeKpiTotal">5</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.55rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
              <span style="font-size: 0.88rem; color: #D8CFAE;">Resolved with Photo Verification</span>
              <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: #34D399;" id="homeKpiResolved">2 (40%)</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.55rem 0; border-bottom: 1px dashed rgba(239, 232, 214, 0.15);">
              <span style="font-size: 0.88rem; color: #D8CFAE;">Active Development Works</span>
              <span style="font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: var(--accent-ochre);" id="homeKpiProjects">3</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; padding: 0.55rem 0;">
              <span style="font-size: 0.88rem; color: #D8CFAE;">Average Turnaround Time (TAT)</span>
              <span style="font-family: var(--serif); font-size: 1.4rem; font-weight: 700; color: #93C5FD;">48 Hours</span>
            </div>
            <div style="margin-top: 1.2rem; padding-top: 0.85rem; border-top: 1px solid rgba(239, 232, 214, 0.2); font-size: 0.78rem; color: #B7AD8E; display: flex; justify-content: space-between;">
              <span>Synced via browser localStorage</span>
              <a href="javascript:void(0)" onclick="navigateTo('login', 'admin')" style="color:var(--accent-ochre); font-weight:600;">Admin Sign-in →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section style="padding: 3.5rem 0;">
        <div class="wrap">
          <div style="text-align: center; max-width: 56ch; margin: 0 auto 2.5rem;">
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Digital Public Services</span>
            <h2 style="font-size: 2rem; margin: 0.3rem 0 0.5rem; color: var(--primary-900);">Everything you need from your Gram Panchayat</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Transparent, paperless, and mobile-friendly services for every villager.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
            <div class="card" style="border-top: 4px solid var(--accent-ochre);">
              <div style="font-size: 2rem; margin-bottom: 0.6rem;">📢</div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">Submit Grievance</h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Report broken handpumps, dark streetlights, road potholes, or blocked drains with photo evidence.</p>
              <button class="btn btn-primary btn-sm" onclick="navigateTo('complaint')">File Grievance →</button>
            </div>

            <div class="card" style="border-top: 4px solid var(--accent-blue);">
              <div style="font-size: 2rem; margin-bottom: 0.6rem;">🔍</div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">Track Grievance</h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Check live status, inspect official remarks, and view your uploaded photo evidence by Ticket ID.</p>
              <button class="btn btn-outline btn-sm" onclick="navigateTo('track')">Track by ID →</button>
            </div>

            <div class="card" style="border-top: 4px solid var(--primary-700);">
              <div style="font-size: 2rem; margin-bottom: 0.6rem;">🏗️</div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">Development Works</h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Public audit of ongoing civil works, sanctioned budgets, contractor assignments, and progress.</p>
              <button class="btn btn-outline btn-sm" onclick="document.getElementById('homeDevSection').scrollIntoView()">Inspect Funds →</button>
            </div>

            <div class="card" style="border-top: 4px solid var(--success-color);">
              <div style="font-size: 2rem; margin-bottom: 0.6rem;">🔔</div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">Announcements</h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Quarterly Gram Sabha meetings, vaccination camps, water pipeline maintenance notices.</p>
              <button class="btn btn-outline btn-sm" onclick="document.getElementById('homeAnnSection').scrollIntoView()">Read Notices →</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Development Section -->
      <section id="homeDevSection" style="padding: 3.5rem 0; background: var(--primary-100); border-top: 1px solid var(--border-soil); border-bottom: 1px solid var(--border-soil);">
        <div class="wrap">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1rem; margin-bottom:2rem;">
            <div>
              <span style="font-size:0.82rem; font-weight:700; color:var(--primary-700); text-transform:uppercase; letter-spacing:0.05em;">Social Audit & Transparency</span>
              <h2 style="font-size:1.85rem; margin:0.3rem 0 0; color:var(--primary-900);">Village Development & Infrastructure Works</h2>
            </div>
            <span style="font-size:0.84rem; color:var(--text-muted);">Proactive disclosure under RTI Norms</span>
          </div>

          <div id="homeProjectsCardsGrid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem;">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>

      <!-- Announcements Section -->
      <section id="homeAnnSection" style="padding: 3.5rem 0;">
        <div class="wrap">
          <div style="text-align: center; max-width: 56ch; margin: 0 auto 2.2rem;">
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase; letter-spacing: 0.05em;">Panchayat Notice Board</span>
            <h2 style="font-size: 1.85rem; margin: 0.3rem 0 0.5rem; color: var(--primary-900);">Official Notices & Circulars</h2>
          </div>
          <div id="homeAnnouncementsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>
    </div>

    <!-- =======================================================================
         VIEW 2: LOGIN SYSTEM
         ======================================================================= -->
    <div id="view_login" class="spa-view">
      <div style="padding: 3rem 1rem; max-width: 860px; margin: 0 auto;">
        <div style="background: var(--paper); border: 1px solid var(--border-soil); border-radius: var(--radius-md); overflow: hidden; display: grid; grid-template-columns: 0.9fr 1.1fr; box-shadow: var(--shadow-xl);">
          
          <!-- Left info panel -->
          <div style="background: var(--primary-900); color: #EFE8D6; padding: 2.2rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <p style="font-family: var(--serif); font-style: italic; font-size: 1.25rem; line-height: 1.5; color: #F4EFDD;">
                "A complaint filed today should be a verified repair tomorrow — and a public record every villager can inspect."
              </p>
              <p style="margin-top: 0.6rem; font-size: 0.8rem; color: #B7AD8E;">— GramSetu Smart Governance</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.85rem; color: #D8CFAE; margin-top: 2rem;">
              <div>📷 Photo evidence uploaded via FileReader API</div>
              <div>🔑 Admin triage with live remarks and status sync</div>
              <div>📊 Zero backend — 100% browser localStorage</div>
            </div>
          </div>

          <!-- Right form panel -->
          <div style="padding: 2.2rem;">
            
            <!-- Role Toggle -->
            <div style="display: flex; background: var(--primary-100); border: 1px solid var(--border-soil); border-radius: var(--radius-full); padding: 0.2rem; margin-bottom: 1.5rem;">
              <button type="button" class="btn btn-sm" id="roleBtn_citizen" style="flex:1; border-radius:var(--radius-full); background:var(--paper); color:var(--primary-900);" onclick="setLoginRole('citizen')">
                🧑‍🌾 Citizen
              </button>
              <button type="button" class="btn btn-sm" id="roleBtn_admin" style="flex:1; border-radius:var(--radius-full); background:transparent; color:var(--text-muted);" onclick="setLoginRole('admin')">
                🔑 Panchayat Admin
              </button>
            </div>

            <h2 id="loginTitleText" style="font-size: 1.35rem; color: var(--primary-900); margin-bottom: 0.3rem;">Sign in to Citizen Portal</h2>
            <p id="loginSubText" style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.2rem;">Enter your email address and password.</p>

            <form id="spaLoginForm" onsubmit="handleSpaLogin(event)">
              <div class="form-group">
                <label for="spaLoginEmail">Email Address</label>
                <input type="email" id="spaLoginEmail" class="form-control" required placeholder="e.g. citizen@gramsetu.com">
              </div>

              <div class="form-group">
                <label for="spaLoginPass">Password</label>
                <div style="position: relative;">
                  <input type="password" id="spaLoginPass" class="form-control" required placeholder="Enter password" style="padding-right: 3.5rem;">
                  <button type="button" onclick="togglePassVisibility('spaLoginPass', this)" style="position: absolute; right: 0.6rem; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 0.76rem; font-weight: 700; color: var(--primary-700); cursor: pointer;">
                    Show
                  </button>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 1rem;">
                Log In
              </button>
            </form>

            <!-- 1-Click Demo Buttons -->
            <div style="margin-top: 1.4rem; background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem;">
              <span style="display: block; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--accent-ochre-dark); margin-bottom: 0.45rem;">
                ⚡ 1-Click Viva Demo Accounts
              </span>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <button type="button" class="btn btn-outline btn-sm" onclick="quickFillAndLogin('citizen')">
                  🧑‍🌾 Fill Citizen
                </button>
                <button type="button" class="btn btn-outline-ochre btn-sm" onclick="quickFillAndLogin('admin')">
                  🔑 Fill Admin
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- =======================================================================
         VIEW 3: CITIZEN DASHBOARD
         ======================================================================= -->
    <div id="view_citizen" class="spa-view">
      <div class="wrap" style="padding: 2.2rem 1.5rem 3.5rem;">
        
        <!-- Welcome banner -->
        <div style="background: var(--paper); border: 1px solid var(--border-soil); border-radius: var(--radius-md); padding: 1.4rem 1.8rem; margin-bottom: 1.8rem; border-left: 5px solid var(--primary-700); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-700); text-transform: uppercase;">Citizen Grievance Desk</span>
            <h1 style="font-size: 1.8rem; color: var(--primary-900); margin: 0.2rem 0;">
              Welcome, <span id="citizenProfileName">Citizen</span>!
            </h1>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin: 0;">
              Registered Resident of Sundarpur Gram Panchayat
            </p>
          </div>
          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-ochre" onclick="navigateTo('complaint')">➕ File New Grievance</button>
            <button class="btn btn-outline" onclick="navigateTo('track')">🔍 Track a Ticket</button>
          </div>
        </div>

        <!-- Citizen KPIs -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Total Filed by You</div>
            <div class="kpi-val" id="citizenKpiTotal">0</div>
          </div>
          <div class="kpi-card pending">
            <div class="kpi-label">Pending / Under Review</div>
            <div class="kpi-val amber" id="citizenKpiPending">0</div>
          </div>
          <div class="kpi-card progress">
            <div class="kpi-label">Action In Progress</div>
            <div class="kpi-val blue" id="citizenKpiProgress">0</div>
          </div>
          <div class="kpi-card resolved">
            <div class="kpi-label">Resolved with Proof</div>
            <div class="kpi-val success" id="citizenKpiResolved">0</div>
          </div>
        </div>

        <!-- My Complaints Feed -->
        <div style="margin-top: 1.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <h2 style="font-size:1.35rem; color:var(--primary-900); margin:0;">My Registered Complaints</h2>
            <div style="display:flex; gap:0.6rem;">
              <input type="text" id="citizenComplaintsFilterInput" placeholder="Filter by ID, Title..." oninput="renderCitizenComplaintsList()" class="form-control" style="width:200px; padding:0.4rem 0.6rem;">
            </div>
          </div>

          <div id="citizenComplaintsCardsContainer">
            <!-- Dynamically populated -->
          </div>
        </div>

      </div>
    </div>

    <!-- =======================================================================
         VIEW 4: COMPLAINT SUBMISSION FORM (FILEREADER)
         ======================================================================= -->
    <div id="view_complaint" class="spa-view">
      <div class="wrap" style="padding: 2.2rem 1.5rem 3.5rem; max-width: 820px;">
        
        <div style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 1.9rem; color: var(--primary-900); margin-bottom: 0.3rem;">
            Submit a Public Service Grievance
          </h1>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Upload photographic proof and location details. Your complaint will be assigned a unique tracking ID.
          </p>
        </div>

        <div class="card" style="border-top: 4px solid var(--accent-ochre);">
          <form id="spaGrievanceForm" onsubmit="handleSpaSubmitComplaint(event)">
            
            <div class="form-group">
              <label for="newCompTitle">Grievance Summary / Short Title <span class="req">*</span></label>
              <input type="text" id="newCompTitle" class="form-control" required placeholder="e.g. Broken Handpump Handle near Gandhi Chowk" minlength="5">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="newCompCategory">Issue Category <span class="req">*</span></label>
                <select id="newCompCategory" class="form-control" required>
                  <option value="">-- Select Category --</option>
                  <option value="Water Supply">💧 Water Supply & Handpumps</option>
                  <option value="Street Lights">💡 Street Lights & Electricity</option>
                  <option value="Roads">🛣️ Roads & Connectivity</option>
                  <option value="Drainage">🌊 Drainage & Sewage Overflow</option>
                  <option value="Sanitation">🧹 Village Sanitation & Waste</option>
                  <option value="Electricity">⚡ Electricity Grid & Transformers</option>
                  <option value="Other">📋 Other Village Issue</option>
                </select>
              </div>

              <div class="form-group">
                <label for="newCompPriority">Urgency Level <span class="req">*</span></label>
                <select id="newCompPriority" class="form-control" required>
                  <option value="Low">🟢 Low Priority</option>
                  <option value="Medium" selected>🟡 Medium Priority</option>
                  <option value="High">🔴 High / Critical Priority</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="newCompWard">Village Ward Coverage <span class="req">*</span></label>
                <select id="newCompWard" class="form-control" required>
                  <option value="Ward 1 - Shivaji Nagar">Ward 1 - Shivaji Nagar</option>
                  <option value="Ward 2 - Shanti Nagar">Ward 2 - Shanti Nagar</option>
                  <option value="Ward 3 - Bazar Peth">Ward 3 - Bazar Peth</option>
                  <option value="Ward 4 - Gandhi Chowk" selected>Ward 4 - Gandhi Chowk</option>
                  <option value="Ward 5 - Ambedkar Colony">Ward 5 - Ambedkar Colony</option>
                </select>
              </div>

              <div class="form-group">
                <label for="newCompLocation">Specific Location / Landmark <span class="req">*</span></label>
                <input type="text" id="newCompLocation" class="form-control" required placeholder="e.g. Near Pole #14, Opposite Old Banyan Tree">
              </div>
            </div>

            <div class="form-group">
              <label for="newCompDescription">Detailed Description <span class="req">*</span></label>
              <textarea id="newCompDescription" rows="4" class="form-control" required placeholder="Describe the problem, when it occurred, and how many households are affected..." minlength="10"></textarea>
            </div>

            <!-- FileReader Photo Upload Section -->
            <div class="form-group">
              <label>Photographic Evidence (FileReader API)</label>
              <input type="file" id="spaPhotoFile" accept="image/*" style="display:none;" onchange="handleSpaPhotoUpload(event)">
              
              <div class="upload-dropzone" id="spaDropzone" onclick="document.getElementById('spaPhotoFile').click()">
                <div style="font-size: 2rem; margin-bottom: 0.3rem;">📷</div>
                <strong style="display: block; font-size: 0.9rem; color: var(--primary-900);">Click here to select a photograph from your device</strong>
                <span style="font-size: 0.78rem; color: var(--text-muted);">Supports JPG, JPEG, PNG (Max 3MB)</span>
              </div>

              <!-- Live Photo Preview -->
              <div class="file-preview-card" id="spaPhotoPreviewCard" style="display:none;">
                <img id="spaPhotoPreviewImg" src="" alt="Selected Evidence" class="file-preview-img">
                <div style="flex:1;">
                  <strong id="spaPhotoPreviewName" style="font-size:0.86rem; display:block;">photo.jpg</strong>
                  <span id="spaPhotoPreviewSize" style="font-size:0.75rem; color:var(--text-muted); display:block;">120 KB</span>
                  <span style="font-size:0.75rem; color:var(--success-color); font-weight:600;">✓ Encoded to Base64 Data URL</span>
                </div>
                <button type="button" class="btn btn-outline btn-sm" onclick="clearSpaPhotoSelection()">✕ Remove</button>
              </div>
            </div>

            <div class="modal-actions" style="margin-top: 1.5rem;">
              <button type="button" class="btn btn-outline" onclick="navigateTo('citizen')">Cancel</button>
              <button type="submit" class="btn btn-primary btn-lg">🚀 Submit Grievance & Generate Ticket</button>
            </div>

          </form>
        </div>

      </div>
    </div>

    <!-- =======================================================================
         VIEW 5: TRACK COMPLAINT PAGE
         ======================================================================= -->
    <div id="view_track" class="spa-view">
      <div class="wrap" style="padding: 2.2rem 1.5rem 3.5rem; max-width: 860px;">
        
        <div class="card" style="text-align: center; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--shadow-md);">
          <div style="font-size: 2.2rem; margin-bottom: 0.4rem;">🔍</div>
          <h1 style="font-size: 1.85rem; color: var(--primary-900); margin-bottom: 0.3rem;">Track Complaint Status</h1>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0 auto 1.2rem; max-width: 46ch;">
            Enter your unique Grievance Tracking ID to view the current redressal stage, uploaded photo evidence, and Panchayat administrative remarks.
          </p>

          <div style="display: flex; gap: 0.6rem; max-width: 480px; margin: 0 auto;">
            <input type="text" id="spaTrackInput" placeholder="e.g. CMP-2026-0001" class="form-control" style="font-weight:700; text-transform:uppercase; font-size:1rem;">
            <button class="btn btn-primary" onclick="lookupSpaComplaint()">Track</button>
          </div>

          <div style="margin-top: 0.9rem; font-size: 0.78rem; color: var(--text-muted); display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
            <span>Sample tickets:</span>
            <a href="javascript:void(0)" onclick="quickTrackSpa('CMP-2026-0001')">CMP-2026-0001 (In Progress)</a>
            <span>•</span>
            <a href="javascript:void(0)" onclick="quickTrackSpa('CMP-2026-0002')">CMP-2026-0002 (Resolved)</a>
          </div>
        </div>

        <div id="spaTrackResultContainer">
          <!-- Populated dynamically -->
        </div>

      </div>
    </div>

    <!-- =======================================================================
         VIEW 6: PANCHAYAT ADMIN ACTION CENTER
         ======================================================================= -->
    <div id="view_admin" class="spa-view">
      <div class="wrap" style="padding: 2rem 1.5rem 3.5rem;">
        
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.6rem;">
          <div>
            <h1 style="font-size: 1.85rem; color: var(--primary-900); margin-bottom: 0.25rem;">
              Panchayat Grievance & Development Control Desk
            </h1>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
              Review citizen complaints, inspect uploaded photos, update statuses, and publish village notices.
            </p>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            <button class="btn btn-outline btn-sm" onclick="openModal('addAnnouncementModal')">📢 Post Notice</button>
            <button class="btn btn-ochre btn-sm" onclick="openModal('addProjectModal')">➕ Register Project</button>
          </div>
        </div>

        <!-- Admin Dynamic KPI Cards -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Total Grievances</div>
            <div class="kpi-val" id="adminKpiTotal">0</div>
          </div>
          <div class="kpi-card pending">
            <div class="kpi-label">Pending / Under Review</div>
            <div class="kpi-val amber" id="adminKpiPending">0</div>
          </div>
          <div class="kpi-card progress">
            <div class="kpi-label">Action In Progress</div>
            <div class="kpi-val blue" id="adminKpiProgress">0</div>
          </div>
          <div class="kpi-card resolved">
            <div class="kpi-label">Resolved with Proof</div>
            <div class="kpi-val success" id="adminKpiResolved">0</div>
          </div>
        </div>

        <!-- Complaints Table with Filters -->
        <div class="card" style="margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.6rem;">
            <h3 style="font-size: 1.25rem; color: var(--primary-900); margin: 0;">Incoming Citizen Grievances</h3>
            
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <input type="text" id="adminSearchFilter" placeholder="Search ID, title, citizen..." class="form-control" style="width: 220px;" oninput="renderAdminTable()">
              <select id="adminStatusFilterSelect" class="form-control" style="width: 140px;" onchange="renderAdminTable()">
                <option value="all">All Statuses</option>
                <option value="Submitted">Submitted</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Issue & Ward</th>
                  <th>Citizen Info</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Photo Evidence</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="adminComplaintsTableBody">
                <!-- Dynamically rendered -->
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  </main>

  <!-- =======================================================================
       MODALS
       ======================================================================= -->

  <!-- Modal: Admin Action & Remark Update -->
  <div class="modal-backdrop" id="adminActionModal">
    <div class="modal-box modal-lg">
      <button class="modal-close" onclick="closeModal('adminActionModal')">×</button>
      <div class="modal-header">
        <span class="ticket-id" id="modalTicketId" style="font-size: 1.2rem;">CMP-2026-0001</span>
        <h3 class="modal-title" id="modalTicketTitle" style="margin-top: 0.25rem;">Issue Title</h3>
        <p class="modal-subtitle" id="modalTicketMeta"></p>
      </div>

      <div style="background: var(--cream-bg); border: 1px solid var(--border-soil); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 1.2rem;">
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">
          Citizen Description:
        </label>
        <p id="modalTicketDesc" style="font-size: 0.88rem; margin: 0; line-height: 1.5;"></p>
      </div>

      <!-- Photo preview in modal -->
      <div id="modalPhotoContainer" style="margin-bottom: 1.2rem;"></div>

      <form id="modalActionForm" onsubmit="saveAdminAction(event)">
        <div class="form-row">
          <div class="form-group">
            <label for="modalStatusSelect">Update Resolution Status</label>
            <select id="modalStatusSelect" class="form-control" required>
              <option value="Submitted">Submitted (Registered)</option>
              <option value="Under Review">Under Review (Ward Inspection)</option>
              <option value="In Progress">In Progress (Maintenance Team Assigned)</option>
              <option value="Resolved">Resolved (Work Completed & Verified)</option>
              <option value="Rejected">Rejected (Out of scope / Duplicate)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="modalOfficerInput">Assign Field Team / Contractor</label>
            <input type="text" id="modalOfficerInput" class="form-control" placeholder="e.g. Er. Suresh Kale (PWD)">
          </div>
        </div>

        <div class="form-group">
          <label for="modalRemarkTextarea">Administrative Remarks & Action Taken Notes <span class="req">*</span></label>
          <textarea id="modalRemarkTextarea" rows="3" class="form-control" required placeholder="Describe maintenance work carried out..."></textarea>
          <span class="form-hint">This remark will immediately appear on the citizen's tracking page!</span>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-outline" onclick="closeModal('adminActionModal')">Cancel</button>
          <button type="submit" class="btn btn-primary">💾 Save Status & Record Action</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal: Submission Success -->
  <div class="modal-backdrop" id="submissionSuccessModal">
    <div class="modal-box" style="text-align: center; max-width: 500px;">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--success-bg); color: var(--success-color); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 0.8rem;">
        ✓
      </div>
      <h3 style="font-size: 1.4rem; color: var(--primary-900); margin-bottom: 0.3rem;">Grievance Submitted!</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem;">Your complaint has been recorded in the Panchayat database.</p>
      
      <div style="background: var(--cream-bg); border: 2px dashed var(--primary-500); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.4rem;">
        <span style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Official Ticket ID</span>
        <span id="createdComplaintId" style="font-family: var(--serif); font-size: 1.8rem; font-weight: 700; color: var(--primary-700);">CMP-2026-0001</span>
      </div>

      <div style="display: flex; gap: 0.6rem; justify-content: center;">
        <button class="btn btn-primary" id="btnTrackCreatedComplaint">🔍 Track Complaint</button>
        <button class="btn btn-outline" onclick="closeModal('submissionSuccessModal'); navigateTo('citizen');">📊 Dashboard</button>
      </div>
    </div>
  </div>

  <!-- Modal: Image Lightbox -->
  <div class="modal-backdrop" id="imageViewerModal">
    <div class="modal-box" style="background: #111; color: #fff; text-align: center; max-width: 860px;">
      <button class="modal-close" style="color:#fff;" onclick="closeModal('imageViewerModal')">×</button>
      <h4 id="lightboxTitle" style="color:#EFE8D6; margin-bottom:0.8rem;">Photograph</h4>
      <img id="lightboxImg" src="" alt="Full Evidence" style="max-height: 75vh; margin: 0 auto; border-radius: 4px;">
    </div>
  </div>

  <!-- Toast Container -->
  <div id="toastContainer"></div>

  <!-- Footer -->
  <footer class="top-gov-strip" style="margin-top: 3.5rem; padding: 1.2rem 0; border-top: 1px solid var(--border-soil);">
    <div class="wrap" style="text-align: center; font-size: 0.78rem;">
      © 2026 Sundarpur Gram Panchayat • GramSetu Digital Village Portal (Single-File Standalone Edition)
    </div>
  </footer>

  <!-- =======================================================================
       JAVASCRIPT APPLICATION ENGINE (ALL IN ONE)
       ======================================================================= -->
  <script>
    // 1. DATA STORAGE KEYS
    const KEYS = {
      USERS: 'gramsetu_users',
      COMPLAINTS: 'gramsetu_complaints',
      ANNOUNCEMENTS: 'gramsetu_announcements',
      PROJECTS: 'gramsetu_projects',
      CURRENT_USER: 'gramsetu_current_user',
      COUNTER: 'gramsetu_complaint_counter'
    };

    // Category Map
    const CAT_ICONS = {
      'Water Supply': '💧', 'Street Lights': '💡', 'Roads': '🛣️',
      'Drainage': '🌊', 'Sanitation': '🧹', 'Electricity': '⚡', 'Other': '📋'
    };

    // Inline SVG demo image thumbnails (No external image files needed!)
    const DEMO_PICS = {
      light: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260"><rect width="400" height="260" fill="%231a261d"/><circle cx="200" cy="90" r="35" fill="%23c4841d" opacity="0.7"/><rect x="195" y="90" width="10" height="150" fill="%236b7280"/><text x="200" y="245" font-family="sans-serif" font-size="12" fill="%23fff" text-anchor="middle">GramSetu Photo: Street Light Pole #14</text></svg>',
      pump: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260"><rect width="400" height="260" fill="%23243329"/><rect x="185" y="60" width="30" height="170" fill="%234b5563"/><rect x="190" y="80" width="90" height="12" rx="4" transform="rotate(-15 190 80)" fill="%23b4432e"/><text x="200" y="245" font-family="sans-serif" font-size="12" fill="%23fff" text-anchor="middle">GramSetu Photo: Broken Handpump Handle</text></svg>'
    };

    // 2. INITIAL SEEDING
    function initSeedData() {
      if (!localStorage.getItem(KEYS.USERS)) {
        localStorage.setItem(KEYS.USERS, JSON.stringify([
          { id: 'u1', name: 'Rajesh Soni', email: 'admin@gramsetu.com', password: 'admin123', role: 'admin', designation: 'Gram Sevak' },
          { id: 'u2', name: 'Ramesh Patil', email: 'citizen@gramsetu.com', password: 'citizen123', role: 'citizen', ward: 'Ward 4 - Gandhi Chowk' }
        ]));
      }

      if (!localStorage.getItem(KEYS.COUNTER)) {
        localStorage.setItem(KEYS.COUNTER, '5');
      }

      if (!localStorage.getItem(KEYS.COMPLAINTS)) {
        localStorage.setItem(KEYS.COMPLAINTS, JSON.stringify([
          {
            id: 'CMP-2026-0001', citizenId: 'citizen@gramsetu.com', citizenName: 'Ramesh Patil', citizenPhone: '+91 98220 12345',
            title: 'Broken Street Light near Primary School', category: 'Street Lights', ward: 'Ward 2 - Shanti Nagar', location: 'Near School Gate, Pole #14',
            priority: 'High', description: 'Street light fixture is broken and sparking during rainfall. Road is pitch dark at night.',
            image: DEMO_PICS.light, status: 'In Progress', adminRemark: 'Maintenance team dispatched. New 45W LED fixture ordered.', assignedOfficer: 'Er. Suresh Kale (PWD)',
            createdAt: '2026-09-18T14:20:00.000Z', updatedAt: '2026-09-20T11:00:00.000Z'
          },
          {
            id: 'CMP-2026-0002', citizenId: 'citizen@gramsetu.com', citizenName: 'Ramesh Patil', citizenPhone: '+91 98220 12345',
            title: 'Drinking Water Handpump Handle Broken', category: 'Water Supply', ward: 'Ward 4 - Gandhi Chowk', location: 'Gandhi Chowk near Banyan Tree',
            priority: 'High', description: 'India Mark II handpump handle snapped off. 40 families depend on this water source.',
            image: DEMO_PICS.pump, status: 'Resolved', adminRemark: 'Jal Nigam mechanics replaced handle and washer. Supply restored.', assignedOfficer: 'Mahendra Yadav (Jal Nigam)',
            createdAt: '2026-09-15T09:15:00.000Z', updatedAt: '2026-09-17T16:45:00.000Z'
          },
          {
            id: 'CMP-2026-0003', citizenId: 'sunita@example.com', citizenName: 'Sunita Shinde', citizenPhone: '+91 97654 33210',
            title: 'Clogged Drainage Overflowing onto Road', category: 'Drainage', ward: 'Ward 1 - Shivaji Nagar', location: 'Behind Weekly Market Lane',
            priority: 'Medium', description: 'Heavy silt and plastic bags blocked drainage channel. Wastewater overflowing on road.',
            image: null, status: 'Under Review', adminRemark: 'Ward inspection completed. Silt clearance drive scheduled.', assignedOfficer: 'Kishore Jadhav (Sanitation)',
            createdAt: '2026-09-21T08:40:00.000Z', updatedAt: '2026-09-22T10:15:00.000Z'
          }
        ]));
      }

      if (!localStorage.getItem(KEYS.ANNOUNCEMENTS)) {
        localStorage.setItem(KEYS.ANNOUNCEMENTS, JSON.stringify([
          { id: 'A1', title: 'Quarterly Gram Sabha General Body Meeting', category: 'Gram Sabha', date: '2026-10-02', description: 'All adult villagers invited to Panchayat Bhawan at 10:00 AM. Agenda: Development audit and water scheme.' },
          { id: 'A2', title: 'Scheduled Drinking Water Maintenance', category: 'Water Supply', date: '2026-09-28', description: 'Water distribution in Ward 2 and Ward 4 shut off from 8 AM to 4 PM for mainline valve replacement.' }
        ]));
      }

      if (!localStorage.getItem(KEYS.PROJECTS)) {
        localStorage.setItem(KEYS.PROJECTS, JSON.stringify([
          { id: 'P1', name: 'Solar RO Drinking Water Plant', scheme: 'Jal Jeevan Mission', ward: 'Ward 2 & 3', budgetLakhs: 18.5, spentLakhs: 14.2, progressPercent: 78, status: 'Ongoing', targetDate: '2026-11-30', description: '1000 LPH solar dual-powered RO filter with 4 dispensing points.' },
          { id: 'P2', name: 'Cement Concrete Road in Ward 4', scheme: '15th Finance Commission', ward: 'Ward 4 - Gandhi Chowk', budgetLakhs: 32.0, spentLakhs: 32.0, progressPercent: 100, status: 'Completed', targetDate: '2026-07-20', description: '1.4 km concrete pavement with interlocking storm-water edge blocks.' },
          { id: 'P3', name: 'Underground Drainage Phase-1', scheme: 'Swachh Bharat Rural', ward: 'Ward 1 & 5', budgetLakhs: 24.0, spentLakhs: 9.6, progressPercent: 40, status: 'Ongoing', targetDate: '2027-01-15', description: 'Laying 2.8 km of closed PVC drainage lines.' }
        ]));
      }
    }

    // 3. STORAGE HELPERS
    function getStored(k, def = []) {
      try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : def; } catch (e) { return def; }
    }
    function setStored(k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) {
        showToast('Storage limit reached! Please use a smaller photo.', 'error'); return false;
      }
    }
    function getSessionUser() { return getStored(KEYS.CURRENT_USER, null); }

    // 4. TOAST NOTIFICATIONS
    function showToast(msg, type = 'info') {
      const c = document.getElementById('toastContainer');
      const t = document.createElement('div');
      t.className = `toast toast-${type}`;
      t.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️'}</span><span>${msg}</span>`;
      c.appendChild(t);
      setTimeout(() => { t.remove(); }, 3200);
    }

    // 5. MODAL HELPERS
    function openModal(id) { document.getElementById(id).classList.add('open'); }
    function closeModal(id) { document.getElementById(id).classList.remove('open'); }
    function openLightbox(src, title) {
      document.getElementById('lightboxTitle').textContent = title || 'Photograph Evidence';
      document.getElementById('lightboxImg').src = src;
      openModal('imageViewerModal');
    }

    // 6. SPA NAVIGATION & ROUTER
    function navigateTo(viewId, param = null) {
      const user = getSessionUser();
      
      // Auth Guard
      if (viewId === 'citizen' && (!user || user.role !== 'citizen')) {
        showToast('Please log in as a citizen first.', 'info');
        viewId = 'login';
        param = 'citizen';
      }
      if (viewId === 'admin' && (!user || user.role !== 'admin')) {
        showToast('Please log in as a Panchayat Admin first.', 'info');
        viewId = 'login';
        param = 'admin';
      }

      // Hide all views, activate target
      document.querySelectorAll('.spa-view').forEach(v => v.classList.remove('active-view'));
      const target = document.getElementById(`view_${viewId}`);
      if (target) target.classList.add('active-view');

      // Update Nav buttons
      document.querySelectorAll('.site-nav button').forEach(b => b.classList.remove('active'));
      const activeNav = document.getElementById(`navBtn_${viewId}`);
      if (activeNav) activeNav.classList.add('active');

      window.scrollTo(0, 0);

      // Trigger view-specific renderers
      if (viewId === 'home') renderHomeView();
      if (viewId === 'citizen') renderCitizenView();
      if (viewId === 'admin') renderAdminView();
      if (viewId === 'login' && param) setLoginRole(param);
      if (viewId === 'track' && param) {
        document.getElementById('spaTrackInput').value = param;
        lookupSpaComplaint();
      }
      syncHeader();
    }

    // 7. HEADER AUTH SYNC
    function syncHeader() {
      const user = getSessionUser();
      const container = document.getElementById('headerAuthContainer');
      const citizenNav = document.getElementById('navBtn_citizen');
      const adminNav = document.getElementById('navBtn_admin');

      if (user) {
        citizenNav.style.display = user.role === 'citizen' ? 'block' : 'none';
        adminNav.style.display = user.role === 'admin' ? 'block' : 'none';
        const isAdm = user.role === 'admin';
        container.innerHTML = `
          <span class="user-chip ${isAdm ? 'admin-badge' : ''}">
            <span class="user-avatar">${user.name.charAt(0)}</span>
            <span>${user.name}</span>
          </span>
          <button class="btn btn-outline-ochre btn-sm" onclick="logoutUser()">Log out</button>
        `;
      } else {
        citizenNav.style.display = 'none';
        adminNav.style.display = 'none';
        container.innerHTML = `
          <button class="btn btn-primary btn-sm" onclick="navigateTo('login')">Log in</button>
        `;
      }
    }

    function logoutUser() {
      localStorage.removeItem(KEYS.CURRENT_USER);
      showToast('Logged out successfully.', 'info');
      navigateTo('home');
    }

    // 8. LOGIN SYSTEM
    let activeLoginRole = 'citizen';
    function setLoginRole(role) {
      activeLoginRole = role;
      document.getElementById('roleBtn_citizen').style.background = role === 'citizen' ? 'var(--paper)' : 'transparent';
      document.getElementById('roleBtn_citizen').style.color = role === 'citizen' ? 'var(--primary-900)' : 'var(--text-muted)';
      document.getElementById('roleBtn_admin').style.background = role === 'admin' ? 'var(--paper)' : 'transparent';
      document.getElementById('roleBtn_admin').style.color = role === 'admin' ? 'var(--primary-900)' : 'var(--text-muted)';
      
      document.getElementById('loginTitleText').textContent = role === 'admin' ? 'Panchayat Official Sign-in' : 'Sign in to Citizen Portal';
      document.getElementById('loginSubText').textContent = role === 'admin' ? 'Enter administrative credentials to open Action Center.' : 'Enter citizen credentials to view and submit complaints.';
    }

    function quickFillAndLogin(role) {
      setLoginRole(role);
      document.getElementById('spaLoginEmail').value = role === 'admin' ? 'admin@gramsetu.com' : 'citizen@gramsetu.com';
      document.getElementById('spaLoginPass').value = role === 'admin' ? 'admin123' : 'citizen123';
      showToast(`Filled ${role} demo credentials. Click Log In!`, 'info');
    }

    function handleSpaLogin(e) {
      e.preventDefault();
      const email = document.getElementById('spaLoginEmail').value.trim().toLowerCase();
      const pass = document.getElementById('spaLoginPass').value.trim();
      const users = getStored(KEYS.USERS, []);

      const user = users.find(u => u.email.toLowerCase() === email && u.password === pass);
      if (!user) {
        showToast('Invalid credentials! Try demo credentials.', 'error');
        return;
      }

      setStored(KEYS.CURRENT_USER, user);
      showToast(`Welcome back, ${user.name}!`, 'success');
      navigateTo(user.role === 'admin' ? 'admin' : 'citizen');
    }

    function togglePassVisibility(id, btn) {
      const el = document.getElementById(id);
      el.type = el.type === 'password' ? 'text' : 'password';
      btn.textContent = el.type === 'password' ? 'Show' : 'Hide';
    }

    // 9. HOME VIEW RENDERER
    function renderHomeView() {
      const complaints = getStored(KEYS.COMPLAINTS, []);
      const projects = getStored(KEYS.PROJECTS, []);
      const announcements = getStored(KEYS.ANNOUNCEMENTS, []);

      const total = complaints.length;
      const res = complaints.filter(c => c.status === 'Resolved').length;
      const pct = total > 0 ? Math.round((res / total) * 100) : 0;

      document.getElementById('homeKpiTotal').textContent = total;
      document.getElementById('homeKpiResolved').textContent = `${res} (${pct}%)`;
      document.getElementById('homeKpiProjects').textContent = projects.filter(p => p.status !== 'Completed').length;

      // Projects cards
      const pContainer = document.getElementById('homeProjectsCardsGrid');
      pContainer.innerHTML = projects.slice(0, 3).map(p => `
        <div class="card" style="border-top:3px solid var(--primary-700);">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span class="pill ${p.status === 'Completed' ? 'pill-resolved' : 'pill-under-review'}">${p.status}</span>
            <strong style="font-family:var(--serif); color:var(--primary-900);">₹ ${p.budgetLakhs.toFixed(2)} L</strong>
          </div>
          <h4 style="font-size:1.05rem; margin-bottom:0.3rem;">${p.name}</h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.6rem;">${p.description}</p>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill ${p.status === 'Completed' ? 'success' : 'ochre'}" style="width:${p.progressPercent}%;"></div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between; margin-top:0.4rem;">
            <span>🏘️ ${p.ward}</span>
            <span>Due: ${p.targetDate}</span>
          </div>
        </div>
      `).join('');

      // Announcements
      const aContainer = document.getElementById('homeAnnouncementsGrid');
      aContainer.innerHTML = announcements.slice(0, 3).map(a => `
        <div class="card" style="border-left:4px solid var(--accent-ochre);">
          <span class="pill pill-submitted" style="margin-bottom:0.4rem;">${a.category}</span>
          <h4 style="font-size:1rem; margin-bottom:0.3rem;">${a.title}</h4>
          <p style="font-size:0.84rem; color:var(--text-muted);">${a.description}</p>
          <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:0.5rem;">📅 Date: ${a.date}</span>
        </div>
      `).join('');
    }

    // 10. CITIZEN DASHBOARD
    function renderCitizenView() {
      const user = getSessionUser();
      if (!user) return;
      document.getElementById('citizenProfileName').textContent = user.name;

      const complaints = getStored(KEYS.COMPLAINTS, []);
      const myComplaints = complaints.filter(c => c.citizenId && c.citizenId.toLowerCase() === user.email.toLowerCase());

      document.getElementById('citizenKpiTotal').textContent = myComplaints.length;
      document.getElementById('citizenKpiPending').textContent = myComplaints.filter(c => c.status === 'Submitted' || c.status === 'Under Review').length;
      document.getElementById('citizenKpiProgress').textContent = myComplaints.filter(c => c.status === 'In Progress').length;
      document.getElementById('citizenKpiResolved').textContent = myComplaints.filter(c => c.status === 'Resolved').length;

      renderCitizenComplaintsList();
    }

    function renderCitizenComplaintsList() {
      const user = getSessionUser();
      const container = document.getElementById('citizenComplaintsCardsContainer');
      const search = (document.getElementById('citizenComplaintsFilterInput')?.value || '').toLowerCase();
      const myComplaints = getStored(KEYS.COMPLAINTS, []).filter(c => c.citizenId && c.citizenId.toLowerCase() === user.email.toLowerCase());

      const filtered = myComplaints.filter(c => !search || c.id.toLowerCase().includes(search) || c.title.toLowerCase().includes(search));

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="card" style="text-align:center; padding:2.5rem 1rem; color:var(--text-muted);">
            <div style="font-size:2rem; margin-bottom:0.4rem;">📋</div>
            <strong>No complaints found.</strong>
            <p style="font-size:0.84rem; margin-top:0.3rem;">Click "File New Grievance" above to submit an issue.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(c => `
        <div class="card" style="margin-bottom:1rem; border-left:4px solid var(--primary-700);">
          <div style="display:flex; justify-content:space-between; flex-wrap:wrap; margin-bottom:0.5rem;">
            <div>
              <span class="ticket-id" style="font-size:1.05rem;">${c.id}</span>
              <span style="font-size:0.78rem; color:var(--text-muted); margin-left:0.5rem;">• Filed on ${c.createdAt.split('T')[0]}</span>
            </div>
            <div style="display:flex; gap:0.4rem;">
              <span class="priority-tag priority-${(c.priority||'Medium').toLowerCase()}">${c.priority}</span>
              <span class="pill pill-${c.status.toLowerCase().replace(' ', '-')}">${c.status}</span>
            </div>
          </div>

          <div style="display:flex; gap:1rem; align-items:flex-start;">
            ${c.image ? `<img src="${c.image}" alt="Proof" class="table-thumb" onclick="openLightbox('${c.image}', '${c.id} — Evidence')">` : '<div class="table-thumb-placeholder">📷</div>'}
            <div style="flex:1;">
              <h4 style="font-size:1.05rem; margin-bottom:0.25rem;">${c.title}</h4>
              <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:0.4rem;">${c.description}</p>
              <div style="font-size:0.78rem; color:var(--text-muted);">
                <span>📍 ${c.location} (${c.ward})</span>
                ${c.assignedOfficer ? ` • 👷 ${c.assignedOfficer}` : ''}
              </div>
              ${c.adminRemark ? `
                <div style="margin-top:0.6rem; background:var(--primary-50); border:1px solid var(--primary-100); border-radius:var(--radius-xs); padding:0.5rem 0.75rem; font-size:0.82rem;">
                  <strong>💬 Panchayat Remark:</strong> ${c.adminRemark}
                </div>
              ` : ''}
            </div>
          </div>

          <div style="margin-top:0.8rem; display:flex; justify-content:flex-end; gap:0.5rem;">
            <button class="btn btn-outline btn-sm" onclick="navigateTo('track', '${c.id}')">🔍 Track Status</button>
          </div>
        </div>
      `).join('');
    }

    // 11. COMPLAINT SUBMISSION (FILEREADER API)
    let pendingUploadedBase64 = null;

    function handleSpaPhotoUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.match(/image\/(jpeg|jpg|png|webp)/i)) {
        showToast('Please select a JPG, JPEG, or PNG image.', 'error');
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        showToast('Photo is too large (max 3MB).', 'error');
        return;
      }

      showToast('Reading photo via FileReader...', 'info');
      const reader = new FileReader();
      reader.onload = function(event) {
        // Compress on canvas to ensure safe localStorage fit
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          let w = img.width, h = img.height;
          const maxDim = 800;
          if (w > maxDim || h > maxDim) {
            if (w > h) { h = Math.round((h * maxDim) / w); w = maxDim; }
            else { w = Math.round((w * maxDim) / h); h = maxDim; }
          }
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          pendingUploadedBase64 = canvas.toDataURL('image/jpeg', 0.75);

          document.getElementById('spaPhotoPreviewImg').src = pendingUploadedBase64;
          document.getElementById('spaPhotoPreviewName').textContent = file.name;
          document.getElementById('spaPhotoPreviewSize').textContent = `${(file.size / 1024).toFixed(1)} KB`;
          document.getElementById('spaPhotoPreviewCard').style.display = 'flex';
          document.getElementById('spaDropzone').style.display = 'none';
          showToast('Photo successfully attached!', 'success');
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

    function clearSpaPhotoSelection() {
      pendingUploadedBase64 = null;
      document.getElementById('spaPhotoFile').value = '';
      document.getElementById('spaPhotoPreviewCard').style.display = 'none';
      document.getElementById('spaDropzone').style.display = 'block';
    }

    function handleSpaSubmitComplaint(e) {
      e.preventDefault();
      const user = getSessionUser();
      if (!user) {
        showToast('Please log in first.', 'error');
        navigateTo('login');
        return;
      }

      let count = parseInt(localStorage.getItem(KEYS.COUNTER) || '0', 10) + 1;
      localStorage.setItem(KEYS.COUNTER, count.toString());
      const newId = `CMP-2026-${String(count).padStart(4, '0')}`;

      const title = document.getElementById('newCompTitle').value.trim();
      const category = document.getElementById('newCompCategory').value;
      const priority = document.getElementById('newCompPriority').value;
      const ward = document.getElementById('newCompWard').value;
      const location = document.getElementById('newCompLocation').value.trim();
      const desc = document.getElementById('newCompDescription').value.trim();

      const newComplaint = {
        id: newId, citizenId: user.email, citizenName: user.name, citizenPhone: user.phone || '+91 98220 12345',
        title, category, priority, ward, location, description: desc, image: pendingUploadedBase64,
        status: 'Submitted', adminRemark: '', assignedOfficer: 'Pending Assignment',
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
      };

      const list = getStored(KEYS.COMPLAINTS, []);
      list.unshift(newComplaint);
      setStored(KEYS.COMPLAINTS, list);

      // Reset form
      document.getElementById('spaGrievanceForm').reset();
      clearSpaPhotoSelection();

      // Show Success Modal
      document.getElementById('createdComplaintId').textContent = newId;
      document.getElementById('btnTrackCreatedComplaint').onclick = function() {
        closeModal('submissionSuccessModal');
        navigateTo('track', newId);
      };
      openModal('submissionSuccessModal');
    }

    // 12. TRACKING VIEW
    function quickTrackSpa(id) {
      document.getElementById('spaTrackInput').value = id;
      lookupSpaComplaint();
    }

    function lookupSpaComplaint() {
      const searchId = document.getElementById('spaTrackInput').value.trim().toUpperCase();
      const container = document.getElementById('spaTrackResultContainer');
      if (!searchId) { showToast('Please enter a ticket ID.', 'info'); return; }

      const complaints = getStored(KEYS.COMPLAINTS, []);
      const c = complaints.find(x => x.id.toUpperCase() === searchId);

      if (!c) {
        container.innerHTML = `
          <div class="card" style="text-align:center; padding:2.5rem 1rem; color:var(--text-muted);">
            <div style="font-size:2rem; margin-bottom:0.4rem;">🔍</div>
            <strong style="color:var(--primary-900); font-size:1.1rem;">Grievance Not Found</strong>
            <p style="margin-top:0.3rem;">No complaint found matching ID "${searchId}".</p>
          </div>
        `;
        return;
      }

      const stages = ['Submitted', 'Under Review', 'In Progress', 'Resolved'];
      const currentIdx = Math.max(0, stages.indexOf(c.status));
      const pct = Math.round((currentIdx / 3) * 100);

      container.innerHTML = `
        <div class="card" style="border-top:4px solid var(--primary-700);">
          <div style="display:flex; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem; border-bottom:1px solid var(--border-soil); padding-bottom:0.8rem;">
            <div>
              <span class="ticket-id" style="font-size:1.35rem;">${c.id}</span>
              <span class="pill pill-${c.status.toLowerCase().replace(' ', '-')}" style="margin-left:0.5rem;">${c.status}</span>
              <h2 style="font-size:1.25rem; margin:0.3rem 0 0.1rem; color:var(--primary-900);">${c.title}</h2>
              <span style="font-size:0.8rem; color:var(--text-muted);">${c.category} • Filed on ${c.createdAt.split('T')[0]}</span>
            </div>
            <div>
              <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ Print Slip</button>
            </div>
          </div>

          <!-- 4-Step Timeline -->
          <div class="tracking-timeline">
            <div class="timeline-progress-bar" style="width:${pct}%;"></div>
            <div class="timeline-step ${currentIdx >= 0 ? (currentIdx === 0 ? 'active' : 'completed') : ''}">
              <div class="timeline-step-bubble">${currentIdx > 0 ? '✓' : '1'}</div>
              <div class="timeline-step-title">Submitted</div>
            </div>
            <div class="timeline-step ${currentIdx >= 1 ? (currentIdx === 1 ? 'active' : 'completed') : ''}">
              <div class="timeline-step-bubble">${currentIdx > 1 ? '✓' : '2'}</div>
              <div class="timeline-step-title">Under Review</div>
            </div>
            <div class="timeline-step ${currentIdx >= 2 ? (currentIdx === 2 ? 'active' : 'completed') : ''}">
              <div class="timeline-step-bubble">${currentIdx > 2 ? '✓' : '3'}</div>
              <div class="timeline-step-title">In Progress</div>
            </div>
            <div class="timeline-step ${currentIdx === 3 ? 'completed active' : ''}">
              <div class="timeline-step-bubble">${currentIdx === 3 ? '✓' : '4'}</div>
              <div class="timeline-step-title">Resolved</div>
            </div>
          </div>

          <!-- Details & Photo Grid -->
          <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:1.5rem; margin-top:1.5rem;">
            <div>
              <strong style="font-size:0.84rem; text-transform:uppercase; color:var(--text-muted);">Grievance Details</strong>
              <p style="font-size:0.9rem; line-height:1.5; background:var(--cream-bg); padding:0.8rem; border-radius:var(--radius-sm); margin-top:0.4rem;">
                ${c.description}
              </p>
              <div style="font-size:0.82rem; line-height:1.6; color:var(--text-muted);">
                <div>📍 <strong>Location:</strong> ${c.location} (${c.ward})</div>
                <div>👤 <strong>Citizen:</strong> ${c.citizenName}</div>
                <div>👷 <strong>In-charge:</strong> ${c.assignedOfficer || 'Pending Assignment'}</div>
              </div>
            </div>

            <div>
              <strong style="font-size:0.84rem; text-transform:uppercase; color:var(--text-muted);">Photographic Evidence</strong>
              ${c.image ? `
                <div style="margin-top:0.4rem; text-align:center;">
                  <img src="${c.image}" alt="Evidence" style="max-height:180px; margin:0 auto; border-radius:var(--radius-xs); border:1px solid var(--border-soil); cursor:pointer;" onclick="openLightbox('${c.image}', '${c.id}')">
                  <span style="font-size:0.74rem; color:var(--text-muted); display:block; margin-top:0.3rem;">Click photo to zoom</span>
                </div>
              ` : `
                <div style="margin-top:0.4rem; background:var(--cream-bg); border:1px dashed var(--border-soil); padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.84rem;">
                  No photo uploaded with this ticket.
                </div>
              `}
            </div>
          </div>

          <!-- Administrative Remark -->
          <div style="margin-top:1.5rem; background:var(--primary-50); border:1px solid var(--primary-500); border-radius:var(--radius-sm); padding:1rem;">
            <div style="font-size:0.88rem; font-weight:700; color:var(--primary-900); margin-bottom:0.25rem;">
              🏛️ Official Panchayat Remarks:
            </div>
            <p style="font-size:0.88rem; margin:0; color:var(--text-ink);">
              ${c.adminRemark || '<em style="color:var(--text-muted);">No official remarks recorded yet. Field verification in progress.</em>'}
            </p>
          </div>
        </div>
      `;
    }

    // 13. ADMIN DASHBOARD
    let activeActionTicketId = null;

    function renderAdminView() {
      const complaints = getStored(KEYS.COMPLAINTS, []);
      document.getElementById('adminKpiTotal').textContent = complaints.length;
      document.getElementById('adminKpiPending').textContent = complaints.filter(c => c.status === 'Submitted' || c.status === 'Under Review').length;
      document.getElementById('adminKpiProgress').textContent = complaints.filter(c => c.status === 'In Progress').length;
      document.getElementById('adminKpiResolved').textContent = complaints.filter(c => c.status === 'Resolved').length;

      renderAdminTable();
    }

    function renderAdminTable() {
      const tbody = document.getElementById('adminComplaintsTableBody');
      const search = (document.getElementById('adminSearchFilter')?.value || '').toLowerCase();
      const statusFilt = document.getElementById('adminStatusFilterSelect')?.value || 'all';
      const complaints = getStored(KEYS.COMPLAINTS, []);

      const filtered = complaints.filter(c => {
        if (statusFilt !== 'all' && c.status !== statusFilt) return false;
        if (search && !c.id.toLowerCase().includes(search) && !c.title.toLowerCase().includes(search) && !c.citizenName.toLowerCase().includes(search)) return false;
        return true;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">No grievances match active filters.</td></tr>';
        return;
      }

      tbody.innerHTML = filtered.map(c => `
        <tr>
          <td class="ticket-id">${c.id}</td>
          <td>
            <div style="font-weight:600;">${c.title}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${c.ward} • 📍 ${c.location}</div>
          </td>
          <td>
            <div style="font-weight:600; font-size:0.84rem;">${c.citizenName}</div>
            <div style="font-size:0.74rem; color:var(--text-muted);">${c.citizenPhone || c.citizenId}</div>
          </td>
          <td><span class="priority-tag priority-${(c.priority||'Medium').toLowerCase()}">${c.priority}</span></td>
          <td><span class="pill pill-${c.status.toLowerCase().replace(' ', '-')}">${c.status}</span></td>
          <td>
            ${c.image ? `<img src="${c.image}" alt="Evidence" class="table-thumb" onclick="openLightbox('${c.image}', '${c.id}')">` : '<div class="table-thumb-placeholder">✕</div>'}
          </td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="openAdminActionModal('${c.id}')">⚡ Take Action</button>
          </td>
        </tr>
      `).join('');
    }

    function openAdminActionModal(ticketId) {
      activeActionTicketId = ticketId;
      const c = getStored(KEYS.COMPLAINTS, []).find(x => x.id === ticketId);
      if (!c) return;

      document.getElementById('modalTicketId').textContent = c.id;
      document.getElementById('modalTicketTitle').textContent = c.title;
      document.getElementById('modalTicketMeta').textContent = `${c.ward} • Filed by ${c.citizenName} on ${c.createdAt.split('T')[0]}`;
      document.getElementById('modalTicketDesc').textContent = c.description;
      document.getElementById('modalStatusSelect').value = c.status;
      document.getElementById('modalOfficerInput').value = c.assignedOfficer || '';
      document.getElementById('modalRemarkTextarea').value = c.adminRemark || '';

      const photoBox = document.getElementById('modalPhotoContainer');
      if (c.image) {
        photoBox.innerHTML = `
          <div style="display:flex; align-items:center; gap:0.8rem; background:var(--cream-bg); border:1px solid var(--border-soil); border-radius:var(--radius-sm); padding:0.6rem;">
            <img src="${c.image}" style="width:64px; height:48px; object-fit:cover; border-radius:4px;">
            <div>
              <strong style="font-size:0.82rem; display:block;">Citizen Photograph Attached</strong>
              <button type="button" class="btn btn-outline btn-sm" style="margin-top:0.2rem;" onclick="openLightbox('${c.image}', '${c.id}')">🔍 Inspect Full Size</button>
            </div>
          </div>
        `;
      } else {
        photoBox.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted);">No photograph attached by citizen.</span>';
      }

      openModal('adminActionModal');
    }

    function saveAdminAction(e) {
      e.preventDefault();
      if (!activeActionTicketId) return;

      const complaints = getStored(KEYS.COMPLAINTS, []);
      const idx = complaints.findIndex(x => x.id === activeActionTicketId);
      if (idx === -1) return;

      const newStat = document.getElementById('modalStatusSelect').value;
      complaints[idx].status = newStat;
      complaints[idx].assignedOfficer = document.getElementById('modalOfficerInput').value.trim() || 'Panchayat Assigned Team';
      complaints[idx].adminRemark = document.getElementById('modalRemarkTextarea').value.trim();
      complaints[idx].updatedAt = new Date().toISOString();

      setStored(KEYS.COMPLAINTS, complaints);
      closeModal('adminActionModal');
      renderAdminView();
      showToast(`Grievance ${activeActionTicketId} updated to "${newStat}".`, 'success');
    }

    // ON DOM LOAD
    document.addEventListener('DOMContentLoaded', () => {
      initSeedData();
      renderHomeView();
      syncHeader();
    });
  </script>

</body>
</html>
```

---

## File: `README.md` <a id="file-readme_md"></a>

```markdown
# GramSetu (ग्राम सेतु) — Digital Gram Panchayat Portal

A modern, responsive, and 100% client-side **Digital Smart Village / Gram Panchayat Web Portal** built with **HTML5, CSS3, Vanilla JavaScript, browser `localStorage`, and the browser `FileReader` API**.

GramSetu connects rural citizens directly with their Gram Panchayat administration to report civic grievances with actual photographic proof, track real-time redressal progress on a 4-stage visual timeline, and inspect transparent village development funds.

---

## 🚀 Key Features

### 🧑‍🌾 For Citizens:
1. **Panchayat Information & Services**: Inspect village development works, sanctioned budgets, Gram Sabha notices, and citizen service procedures.
2. **Grievance Registration with Photo Proof**:
   - File complaints for **Water Supply, Street Lights, Roads, Drainage, Sanitation, Electricity, Waste Management**, etc.
   - Attach **real photographs** using the **HTML5 `FileReader` API**.
   - Client-side image optimization and compression using `<canvas>` to ensure high image fidelity within safe `localStorage` limits.
   - Unique automated tracking ID generation (e.g., `CMP-2026-0001`, `CMP-2026-0002`).
3. **Live Grievance Tracking (`track.html`)**:
   - Enter any Complaint ID or follow a direct link (e.g., `track.html?id=CMP-2026-0001`).
   - 4-Stage visual timeline: **Submitted → Under Review → In Progress → Resolved**.
   - Inspect the exact uploaded photograph and read administrative remarks left by the Panchayat official.
4. **Personal Citizen Dashboard (`citizen.html`)**:
   - Filter and search submitted grievances.
   - Status indicators (`Submitted`, `Under Review`, `In Progress`, `Resolved`, `Rejected`).
   - Live notice board displaying recent village announcements.

### 🔑 For Panchayat Administrators (`admin.html`):
1. **Official Action Center**:
   - Live KPI statistic cards (**Total Grievances, Pending / Under Review, In Progress, Resolved with Proof, Registered Citizens**) dynamically calculated from `localStorage`.
2. **Complaints Triage & Filtering**:
   - Search across Ticket ID, title, citizen name, location, and ward.
   - Filter by **Category, Status, Priority, and Ward Coverage**.
3. **Photo Evidence Lightbox Inspector**:
   - View the exact photograph uploaded by the citizen in full resolution.
4. **Action Modal & Remarks Recording**:
   - Change grievance status (**Submitted → Under Review → In Progress → Resolved → Rejected**).
   - Assign field teams / contractors (PWD, Jal Nigam, Sanitation Squad).
   - Enter **official administrative remarks** (e.g. *"Maintenance team dispatched. New 45W LED fixture installed."*).
   - Instantly updates `localStorage` and reflects immediately on the citizen's tracking page!
5. **Village Announcements Management**:
   - Publish, view, and delete public announcements and Gram Sabha circulars.
6. **Development Projects Management**:
   - Track sanctioned village infrastructure works, funding schemes (Jal Jeevan Mission, 15th FC), budgets, spend-to-date, and physical progress percentages.

---

## 🛠️ Technology Stack

| Technology | Purpose in GramSetu |
|---|---|
| **HTML5** | Semantic structure, forms, accessible controls, modals |
| **CSS3** | Responsive grid/flexbox, custom government theme (Earthy Green `#16301F`, Ochre `#C4841D`, Cream `#FBF7EE`), status pills, progress bars, timeline |
| **Vanilla JavaScript (ES6+)** | Modular application logic, event listeners, DOM manipulation, routing guards |
| **Browser `localStorage`** | Persistent client-side data store for users, complaints, announcements, projects, and counters |
| **Browser `FileReader` API** | Reads user-selected image files and converts them into Base64 Data URLs |
| **HTML5 `<canvas>` API** | Automatically scales and compresses uploaded photographs to prevent `QuotaExceededError` |

> **IMPORTANT:** GramSetu requires **NO** backend server, **NO** Node.js, **NO** Express, **NO** PHP, and **NO** MySQL/MongoDB. It runs entirely inside any modern web browser.

---

## 📂 Project Structure

```
GramSetu/
│
├── index.html        # Public portal landing page (Hero, Services, Notice board, Funds audit, About)
├── home.html         # Mirror / alternative entry point
├── login.html        # Authentication gateway (Citizen / Admin toggle with 1-click quick-fill demo)
├── citizen.html      # Citizen personal dashboard (My Complaints, status filters, quick actions)
├── complaint.html    # Grievance registration form (FileReader photo upload & Base64 preview)
├── track.html        # Public grievance tracking page with visual 4-step progress timeline
├── admin.html        # Panchayat Official Action Center (KPIs, table, action modal, announcements)
│
├── css/
│   └── style.css     # Unified shared stylesheet (Typography, colors, components, responsive rules)
│
├── js/
│   ├── app.js        # Core utilities: localStorage seeding, ID sequence, canvas compression, toasts
│   ├── auth.js       # Client-side session management, login, logout, and route protection
│   ├── citizen.js    # Citizen dashboard logic, complaint filters, and personal KPIs
│   ├── complaint.js  # Form validation, FileReader processing, Base64 conversion, submission modal
│   ├── track.js      # URL param detection, ticket lookup, timeline progress, photo display
│   └── admin.js      # KPI calculations, complaints triage, status updates with remarks, projects
│
├── assets/
│   ├── images/       # Static branding assets
│   └── icons/        # SVG / graphical icons
│
└── README.md         # Comprehensive project documentation & Viva examination guide
```

---

## 🔑 Demo Login Credentials

For quick viva demonstration, the login page (`login.html`) includes **One-Click Quick-Fill buttons**:

| Role | Email | Password | Access Level |
|---|---|---|---|
| **🧑‍🌾 Citizen** | `citizen@gramsetu.com` | `citizen123` | File complaints, track tickets, view dashboard |
| **🔑 Panchayat Admin** | `admin@gramsetu.com` | `admin123` | Action center, update status, add remarks, manage notices & works |

---

## 📷 How the Photo Upload & Transfer Works

This is a critical technical requirement of the project. The photo uploaded by the citizen is genuinely transferred to the admin dashboard **without any backend server**:

```
[Citizen Browser]
       │
1. Citizen selects photo (.jpg, .png)
       │
2. Browser FileReader reads file as ArrayBuffer / DataURL
       │
3. HTML5 Canvas scales & compresses photo (max 900px, 0.75 quality)
       │
4. Resulting Base64 Data URL (e.g. "data:image/jpeg;base64,/9j/4AAQSkZJR...") 
   is stored inside the complaint object:
   {
     id: "CMP-2026-0006",
     title: "Broken Handpump",
     image: "data:image/jpeg;base64,...",
     status: "Submitted",
     ...
   }
       │
5. Complaint is saved in window.localStorage under "gramsetu_complaints"
       │
[Admin Browser]
       │
6. Admin logs into admin.html
       │
7. admin.js retrieves "gramsetu_complaints" from localStorage
       │
8. The <img> tag renders the exact Base64 string: <img src="data:image/jpeg;base64,...">
       │
9. Admin clicks "Inspect Full-Size Photo" to view evidence in the Lightbox viewer!
```

---

## 💾 LocalStorage Data Architecture

The application uses standard, collision-free storage keys:

| Key | Type | Description |
|---|---|---|
| `gramsetu_users` | `Array<User>` | Registered citizen and administrator accounts |
| `gramsetu_complaints` | `Array<Complaint>` | All submitted grievances including Base64 photographs |
| `gramsetu_announcements` | `Array<Announcement>`| Official Panchayat circulars and Gram Sabha notices |
| `gramsetu_projects` | `Array<Project>` | Sanctioned civil development works, budgets, and progress |
| `gramsetu_current_user` | `Object` | Active session profile for logged-in user |
| `gramsetu_complaint_counter` | `Number` | Monotonically increasing counter for sequential IDs (`CMP-2026-XXXX`) |

---

## 🖥️ How to Run the Project

1. **Direct Browser Execution**:
   - Simply double-click `index.html` (or right-click → **Open With** → Google Chrome / Edge / Firefox).
   - No server installation, Node modules, or database configurations are required.

2. **Optional Local HTTP Server** (if desired):
   - You can also serve the directory using Python:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your browser.

---

## 🧪 Complete Test & Demonstration Flow

Follow this step-by-step walkthrough for project presentation:

1. **Landing Page (`index.html`)**:
   - Inspect the responsive header, live notice board KPIs, service cards, and development works section.
2. **Citizen Registration / Login (`login.html`)**:
   - Click **"Citizen Demo"** to auto-fill `citizen@gramsetu.com` / `citizen123`. Click **Log in**.
   - Redirects to `citizen.html` showing personal grievances.
3. **Submit a Complaint with Photo (`complaint.html`)**:
   - Click **"File New Grievance"**.
   - Enter Title: *"Streetlight damaged by storm"*, select Category: *"Street Lights"*, Ward: *"Ward 2"*, Location: *"Near School Gate"*.
   - Click the photo dropzone and pick any image from your computer.
   - Notice the live thumbnail preview and file size indicator.
   - Click **"Register Grievance & Generate Ticket"**.
   - Note the generated ID: `CMP-2026-0006`.
4. **Log out & Admin Login (`admin.html`)**:
   - Click **Log out** in the header.
   - In `login.html`, click **"Panchayat Admin Demo"** (`admin@gramsetu.com` / `admin123`) and log in.
   - Notice that the KPI counter for Total Grievances has incremented.
5. **Inspect Photo & Take Official Action**:
   - In the complaints table, find `CMP-2026-0006`.
   - Notice the thumbnail image matching the citizen's uploaded photo! Click it to open the full-size Lightbox modal.
   - Click **"Take Action"**. Change status to **"In Progress"**, assign officer: *"Er. Suresh Kale (PWD)"*, and write remark: *"Replacement bracket dispatched."*
   - Click **"Save Status"**.
6. **Track as Citizen (`track.html`)**:
   - Open `track.html` and search `CMP-2026-0006`.
   - Notice the visual progress timeline advances to **Step 3: In Progress**.
   - Notice the administrative remark and the exact uploaded photograph are displayed.
7. **Persistence Verification**:
   - Refresh the page or close and reopen the browser. All submitted tickets and status updates remain preserved in `localStorage`.

---

## ⚠️ Important Educational Limitations & Production Differences

As this is a college capstone project demonstrating client-side architecture:
1. **Client-side Storage Scope**: Data stored in `localStorage` is scoped to the current browser profile on your machine.
2. **Storage Quota**: Browser `localStorage` is typically limited to 5MB to 10MB per origin. GramSetu solves this by compressing images on a `<canvas>` element prior to storage; however, in a real commercial deployment, images would be uploaded to cloud object storage (e.g. AWS S3 or Google Cloud Storage) and database records would reside on a relational DBMS (PostgreSQL / MySQL).
3. **Authentication**: Authentication here is client-side session simulation for demonstration purposes. In production, secure HTTP-only JWTs, OAuth2, or session cookies would be authenticated via an API server.

---

## 🎓 Viva Questions & Answers

- **Q: How does the application maintain state across different pages without a database?**
  - *A: State is persisted in browser `window.localStorage` using JSON strings. When any page loads, it queries helper functions in `js/app.js` to parse the arrays into JavaScript objects.*
- **Q: How does image transfer work without a backend?**
  - *A: The `FileReader` API converts the image into a Base64 data URL string. This string is stored directly as a property of the complaint object in `localStorage`. The admin page reads that string and sets it as the `src` attribute of an `<img>` element.*
- **Q: How do you prevent localStorage from running out of storage space with photos?**
  - *A: In `js/app.js`, the `compressImage()` function draws the image onto an off-screen HTML5 `<canvas>` resized to a maximum of 900x700 pixels with 0.75 JPEG compression quality. This reduces multi-megabyte photos to approximately 60–100 KB without noticeable visual loss, safely accommodating numerous complaints.*
```

---

