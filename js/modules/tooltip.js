const initTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  // usou um objeto no lugar se uma função para ser a callback do eventListener, para poder acessar
  // oobjeto tooltipBox de outra função
  const onMouseMove = {
    // metodo para executar como se fosse uma função de callback.
    //  p.s o nome deve ser handleEvent
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 15}px`;
      this.tooltipBox.style.left = `${event.pageX + 15}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseOver = (event) => {
    const criarTooltipBox = (element) => {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    };

    const tooltipBox = criarTooltipBox(event.currentTarget);

    // passou o objeto tooltipBox para outro objeto usado como callback de enevtListener
    event.currentTarget.addEventListener("mousemove", onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = event.currentTarget;
    event.currentTarget.addEventListener("mouseleave", onMouseLeave);
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
};

export default initTooltip;
