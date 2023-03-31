import outsideClick from "./outsideclick.js";

class MenuMobile {
  constructor(menuMobile, menuList, events) {
    this.menuMobile = document.querySelector(menuMobile);
    this.menuList = document.querySelector(menuList);
    this.active = "ativo";
    this.handleClick = this.handleClick.bind(this);
    this.events = events ?? ["click", "touchstart"];
  }

  handleClick() {
    this.menuMobile.classList.add(this.active);
    this.menuList.classList.add(this.active);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuMobile.classList.remove(this.active);
    });
  }

  addEventMenu() {
    this.events.forEach((event) => {
      this.menuMobile.addEventListener(event, this.handleClick);
    });
  }

  init() {
    if (this.menuMobile) {
      this.addEventMenu();
    }
    return this;
  }
}

export default MenuMobile;
