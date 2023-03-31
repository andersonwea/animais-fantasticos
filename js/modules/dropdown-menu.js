import outsideClick from "./outsideclick.js";

class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.active = "ativo";
    this.handleClick = this.handleClick.bind(this);

    // Define click e touchstart como padrão caso
    // o usuário não defina
    this.events = events ?? ["click", "touchstart"];
  }

  // Ativa o dropdownMenu e adiciona
  // a função que observa o clique fora dele
  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.active);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.active);
    });
  }

  addDropdownMenusEvent() {
    this.events.forEach((userEvent) => {
      this.dropdownMenus.forEach((menu) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
  }
}

export default DropdownMenu;
