const CATEGORIAS = {
  infantil: { tarifaBase: 1.5, diasCortesia: 3, custoExtraDia: 1.5 },
  lançamento: { tarifaBase: 3, diasCortesia: 0, custoExtraDia: 3 },
  regular: { tarifaBase: 2, diasCortesia: 2, custoExtraDia: 1.5 },
};

class Filme {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }
}

class Aluguel {
  constructor(Cliente) {
    this.Cliente = Cliente;
    this.alugueis = [];
  }

  adicionarAluguel(filme, dias) {
    this.alugueis.push({ filme, dias });
  }

  //Análise: Função calcularCustoAluguel sugere anti-pattern no código. A dependência direta da classe Aluguel nas propriedades específicas de Filme e CATEGORIAS. Isso pode ser considerado uma forma de acoplamento forte entre as classes.
  //Se a estrutura interna de Filme ou a estrutura de CATEGORIAS mudar, a classe Aluguel também precisará ser modificada.
  calcularCustoAluguel(filme, dias) {
    const { tarifaBase, diasCortesia, custoExtraDia } = CATEGORIAS[filme.categoria];
    const diasRegularesPagar = Math.max(dias - diasCortesia, 0);
    return tarifaBase + diasRegularesPagar * custoExtraDia;
  }

  calcularCustoTotal() {
    return this.alugueis.reduce((total, { filme, dias }) => {
      return total + this.calcularCustoAluguel(filme, dias);
    }, 0);
  }

  calcularPontosFidelidade() {
    return this.alugueis.reduce((pontos, { filme, dias }) => {
      const { diasCortesia } = CATEGORIAS[filme.categoria];
      return pontos + (dias > diasCortesia ? 2 : 1);
    }, 0);
  }

  gerarRecibo() {
    const detalhesAlugueis = this.alugueis.map(aluguel => {
      const { filme, dias } = aluguel;
      const custoAluguel = this.calcularCustoAluguel(filme, dias).toFixed(2);
      return `\t${filme.titulo}\tR$ ${custoAluguel}`;
    }).join('\n');

    const totalCusto = this.calcularCustoTotal().toFixed(2);
    const pontosFidelidade = this.calcularPontosFidelidade();

    return `O Recibo de Aluguel de ${this.Cliente}\n ${detalhesAlugueis}\nValor total a pagar é R$ ${totalCusto}\nVocê ganhou ${pontosFidelidade} ponto${pontosFidelidade !== 1 ? 's' : ''} de fidelidade`;
  }
}

// Exemplo de uso
const filmeRegular = new Filme('Madagascar', 'regular');
const filmeLancamento = new Filme('Divertida Mente 2', 'lançamento');
const filmeInfantil = new Filme('Batman', 'infantil');

const cliente = new Aluguel('Josie');
cliente.adicionarAluguel(filmeRegular, 4);
cliente.adicionarAluguel(filmeLancamento, 5);
cliente.adicionarAluguel(filmeInfantil, 2);

console.log(cliente.gerarRecibo());
