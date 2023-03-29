const initModal = () => {
  const openLogin = document.querySelector('[data-modal="abrir"]');
  const closeLogin = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (openLogin && closeLogin && modal) {
    const toggleModal = (event) => {
      event.preventDefault();
      modal.classList.toggle("ativo");
    };

    const clickOutSide = (event) => {
      event.preventDefault();
      if (event.target === modal) {
        toggleModal(event);
      }
    };

    modal.addEventListener("click", clickOutSide);
    closeLogin.addEventListener("click", toggleModal);
    openLogin.addEventListener("click", toggleModal);
  }
};

export default initModal;
