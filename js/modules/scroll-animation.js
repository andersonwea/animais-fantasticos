const initScrollAnimation = () => {
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
};

export default initScrollAnimation;
