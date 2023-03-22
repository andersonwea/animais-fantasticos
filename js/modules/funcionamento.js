const initFuncionamento = () => {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horaSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horaAberto = horaAgora >= horaSemana[0] && horaAgora < horaSemana[1];

  if (horaAberto && semanaAberto) {
    funcionamento.classList.add("aberto");
  }
};

export default initFuncionamento;
