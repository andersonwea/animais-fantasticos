class Tooltip {
  constructor(elements) {
    this.tooltips = document.querySelectorAll(elements);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo da posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 15}px`;

    if (event.pageX + 220 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 170}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 15}px`;
    }
  }

  // remove a tooltip e os eventos de mouseover e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Criar a tooltipBox e coloca em uma propriedade
  criarTooltipBox = (element) => {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  };

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave
  // ao target
  onMouseOver(event) {
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adiciona os eventos de mouseover a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}

export default Tooltip;
