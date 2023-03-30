class initModal {
  constructor(openButton, closeButton, modalContainer) {
    this.openLogin = document.querySelector(openButton);
    this.closeLogin = document.querySelector(closeButton);
    this.modal = document.querySelector(modalContainer);

    // Bind this ao callback para fazer referência
    // ao objeto da classe
    this.toggleModal = this.toggleModal.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.modal.classList.toggle("ativo");
  }

  clickOutSide(event) {
    event.preventDefault();
    if (event.target === this.modal) {
      this.toggleModal(event);
    }
  }

  addButtonEvent() {
    this.modal.addEventListener("click", this.clickOutSide);
    this.closeLogin.addEventListener("click", this.toggleModal);
    this.openLogin.addEventListener("click", this.toggleModal);
  }

  init() {
    if (this.openLogin && this.closeLogin && this.modal) {
      this.addButtonEvent();
    }
    return this;
  }
}

export default initModal;
