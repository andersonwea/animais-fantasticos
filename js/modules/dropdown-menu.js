import outsideClick from "./outsideclick.js";

const initDropdownMenu = () => {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  ["click", "touchstart"].forEach((userEvent) => {
    dropdownMenus.forEach((menu) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
};

export default initDropdownMenu;
