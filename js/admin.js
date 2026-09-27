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
