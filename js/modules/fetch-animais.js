import AnimaNumeros from "./anima-numeros.js";

const fetchAnimais = (url, target) => {
  const numerosGrid = document.querySelector(target);

  // Cria a div contendo informações
  // com o total de animais
  const createAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.valor}</span>`;
    return div;
  };

  // Preenche cada animal no Dom
  const preencherAnimais = (animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  };

  // Anima os números de cada animal
  const animaAnimaisNumeros = () => {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  };

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  const criarAnimais = async () => {
    try {
      //  Fetch e espera a resposta e transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  };

  return criarAnimais();
};

export default fetchAnimais;
