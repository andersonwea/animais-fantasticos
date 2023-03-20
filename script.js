(() => {
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
})();

(() => {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    const activeAccordion = (event) => {
      event.currentTarget.classList.toggle("ativo");
      event.currentTarget.nextElementSibling.classList.toggle("ativo");
    };

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
})();

(() => {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
})();

(() => {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSecttionVisible = sectionTop - windowMetade < 0;

        if (isSecttionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    };
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
})();
