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
