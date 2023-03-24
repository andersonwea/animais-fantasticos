import initAnimaNumeros from "./anima-numeros.js";

const initFetchAnimais = () => {
  const fetchAnimais = async (url) => {
    const numerosGrid = document.querySelector(".numeros-grid");
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();

    animaisJSON.forEach((element) => {
      const divAnimal = createAnimal(element);
      numerosGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  };

  const createAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.valor}</span>`;
    return div;
  };
  fetchAnimais("./animaisapi.json");
};

export default initFetchAnimais;
