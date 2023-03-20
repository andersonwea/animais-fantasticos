const initAccordion = () => {
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
};

export default initAccordion;
