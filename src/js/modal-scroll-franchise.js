(() => {
  const mobileMenu = document.querySelector('[data-modal-franchise]');
  const openMenuBtn = document.querySelector('[data-modal-open-franchise]');
  const closeMenuBtn = document.querySelector('[data-modal-close-franchise]');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
