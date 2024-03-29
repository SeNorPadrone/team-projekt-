(() => {
    const refs = {
        openModalBtn: document.querySelector('[about-modal-open]'),
        closeModalBtn: document.querySelector('[about-modal-close]'),
        modal: document.querySelector('[about-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle('is-hidden');
    }
})();