//exercicios feitos pela profa aqui

const CUSTO_BASE_FILME = {
  LANCAMENTO: 3,
  INFANTIL: 0.5,
  REGULAR: 1,
};

const DIAS_GRATIS_CATEGORIA = {
  LANCAMENTO: 3,
  INFANTIL: 0.5,
  REGULAR: 1,
};

const CATEGORIAS_FILMES = {
  LANCAMENTO: 0,
  INFANTIL: 3,
  REGULAR: 2,
};

class Filme {
  constructor(titulo) {
    this.titulo;
    this.categoria = CATEGORIAS_FILMES.LANCAMENTO;
  }
}

class Aluguel {
  constructor(dias) {
    this.dias = dias;
    this.filmes = [];
    this.total = 0;
  }

  adicionarFilme(filme) {
    this.filmes.push(filme);
    const custo = calcularCustoAluguel(filme);
    this.total += custo;
  }

  calcularCustoAluguel(filme) {
    const custoRegular = this.calcularCustoRegular(filme);
    const custoExtra = this.calcularcustoExtra(filme);
    return custoRegular + custoExtra;
  }

  calcularCustoRegular() {
    const tarifaPorDia = CUSTO_BASE_FILME[filme.categoria];
    const diasCortesia = DIAS_GRATIS_CATEGORIA[filme.categoria];
    const diasTotaisAluguel = this.dias;
    const diasRegularesAPagar =
      diasTotaisAluguel > diasCortesia ? diasCortesia : diasTotaisAluguel;
    return diasRegularesAPagar * tarifaPorDia;
  }

  calcularcustoExtra() {}
}

const matrix = new Movie("Matrix");



