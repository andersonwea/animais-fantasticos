class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaSemana = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horaAberto =
      this.horaAgora >= this.horaSemana[0] &&
      this.horaAgora < this.horaSemana[1];
    return semanaAberto && horaAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();
    if (this.funcionamento) {
      this.ativaAberto();
    }
    return this;
  }
}

export default Funcionamento;
