class initAnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // bind do this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do Dom que contem um número
  // e incrementa de 0 a o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;

    let start = 0;
    const interval = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += interval;
      numero.innerText = start;
      if (start >= total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 25 * Math.random());
  }

  // Ativa incrementarNumero para cada
  // número selecionado do Dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // função de callback para o observador
  // irá executar caso retorne true do observador

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe ativo é adcionada ao elemento target
  addMutationObserver() {
    // um observador que vai ficar de olho em alguma alteração em algum elemento
    this.observer = new MutationObserver(this.handleMutation);

    // vamos passar o elemento à ser observado e o que à ser observado
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

export default initAnimaNumeros;
