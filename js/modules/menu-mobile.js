import outsideClick from "./outsideclick.js";

const initMenuMobile = () => {};
const menuMobile = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const events = ["click", "touchstart"];

if (menuMobile) {
  function handleClick() {
    menuMobile.classList.add("ativo");
    menuList.classList.add("ativo");

    outsideClick(menuList, events, () => {
      menuList.classList.remove("ativo");
      menuMobile.classList.remove("ativo");
    });
  }

  events.forEach((event) => {
    menuMobile.addEventListener(event, handleClick);
  });
}
export default initMenuMobile;
