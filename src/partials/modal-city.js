(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-city]'),
    closeModalBtn: document.querySelector('[data-modal-close-city]'),
    modal: document.querySelector('[data-modal-city]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
