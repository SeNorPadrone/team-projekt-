(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-city3]'),
    closeModalBtn: document.querySelector('[data-modal-close-city3]'),
    modal: document.querySelector('[data-modal-city3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden3');
  }
})();
