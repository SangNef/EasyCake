function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const checkinModal = document.getElementById('checkin-modal');
    modal.classList.toggle('hidden');
    checkinModal.classList.toggle('hidden');
  }