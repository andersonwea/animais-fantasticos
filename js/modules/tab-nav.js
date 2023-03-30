class TabNav {
  constructor(tabmenu, tabcontent) {
    this.tabmenu = document.querySelectorAll(tabmenu);
    this.tabcontent = document.querySelectorAll(tabcontent);
    this.active = "ativo";
  }

  // Ativa a tab de acordo com o index da mesma
  menuAtivo(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.active);
    });
    this.tabcontent[index].classList.add(
      this.active,
      this.tabcontent[index].dataset.anime
    );
  }

  // Adiciona os eventos nas tabs
  addTabEvent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.menuAtivo(index);
      });
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      // Ativar primeiro item
      this.menuAtivo(0);
      this.addTabEvent();
    }
    return this;
  }
}

export default TabNav;
