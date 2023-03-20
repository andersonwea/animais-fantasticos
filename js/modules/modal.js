const initModal = () => {
  const openLogin = document.querySelector('[data-modal="abrir"]');
  const closeLogin = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  const openModal = (event) => {
    event.preventDefault();
    modal.classList.add("ativo");
  };

  const closeModal = (event) => {
    event.preventDefault();
    modal.classList.remove("ativo");
  };

  const clickOutSide = (event) => {
    event.preventDefault();
    event.target === modal ? closeModal(event) : "";
  };

  modal.addEventListener("click", clickOutSide);
  closeLogin.addEventListener("click", closeModal);
  openLogin.addEventListener("click", openModal);
};

export default initModal;
