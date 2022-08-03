(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__button'),
    closeMenuBtn: document.querySelector('.burger__close'),
    menu: document.querySelector('.burger'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
