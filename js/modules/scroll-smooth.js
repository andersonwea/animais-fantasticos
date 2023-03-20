const initScrollSmooth = () => {
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
};

export default initScrollSmooth;
