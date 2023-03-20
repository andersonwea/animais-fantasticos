const initTabNav = () => {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabcontent = document.querySelectorAll("[data-tab='content'] section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");

    const menuAtivo = (index) => {
      tabcontent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabcontent[index].classList.add("ativo", tabcontent[index].dataset.anime);
    };

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        menuAtivo(index);
      });
    });
  }
};

export default initTabNav;
