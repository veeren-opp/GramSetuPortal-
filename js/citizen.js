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
