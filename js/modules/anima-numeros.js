const initAnimaNumeros = () => {
  const animaNumeros = () => {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;

      let start = 0;
      let interval = Math.floor(total / 100);
      const timer = setInterval(() => {
        numero.innerText = start += interval;
        if (start >= total) {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 25 * Math.random());
    });
  };

  // função de callback para o observador
  // irá executar caso retorne true do observador
  // irá receber um objeto array like "evento" que informa as mutações que ocorreram
  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  };

  // um observador que vai ficar de olho em alguma alteração em algum elemento
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros");

  // vamos passar o elemento à ser observado e o que à ser observado
  observer.observe(observerTarget, { attributes: true });
};

export default initAnimaNumeros;
