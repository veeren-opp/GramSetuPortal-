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
