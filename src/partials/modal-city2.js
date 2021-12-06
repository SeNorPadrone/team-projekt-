(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-city2]'),
    closeModalBtn: document.querySelector('[data-modal-close-city2]'),
    modal: document.querySelector('[data-modal-city2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden2');
  }
})();
