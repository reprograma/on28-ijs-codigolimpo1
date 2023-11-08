const CATEGORIAS_FILMES = {
  LANCAMENTO: "Lançamento",
  REGULAR: "Regular",
  INFANTIL: "Infantil",
};

const CUSTO_BASE_FILME = {
  LANCAMENTO: 3,
  INFANTIL: 1.5,
  REGULAR: 2,
};

const DIAS_GRATIS_CATEGORIA = {
  LANCAMENTO: 1,
  INFANTIL: 3,
  REGULAR: 2,
};

const TARIFA_EXTRA = {
  LANCAMENTO: 3,
  INFANTIL: 1.5,
  REGULAR: 1.5,
};

class Cliente {
  nome;
  pontosDeFidelidade = 0;

  constructor(nome) {
    this.nome = nome;
  }
}

class Filme {
  titulo;
  categoria;

  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }
}

class AluguelDeFilmes {
  dias;
  alugueis;
  valorTotalFilme;

  constructor(dias) {
    this.dias = dias;
    this.alugueis = [];
    this.valorTotalFilme = 0;
  }

  adicionarAluguel(filme) {
    this.alugueis.push({ filme });
    const valorFilme = this.calcularTotalAPagar(filme);
    this.valorTotalFilme += valorFilme;
  }

  calcularTotalAPagar(filme) {
    const custoBase = CUSTO_BASE_FILME[filme.categoria];
    const diasCortesia = DIAS_GRATIS_CATEGORIA[filme.categoria];
    const tarifaExtra = TARIFA_EXTRA[filme.categoria];
    const diasTotais = this.dias;

    let totalAPagar = custoBase;

    if (diasTotais > diasCortesia) {
      totalAPagar += (diasTotais - diasCortesia) * tarifaExtra;
    }
    return totalAPagar;
  }
}

