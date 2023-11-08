var Rental = function () {};

Rental.prototype.statement = function (customer) {
  var movies = {
    F001: { title: "Ran", code: "regular" },
    F002: { title: "Trois Couleurs: Bleu", code: "regular" },
    F003: { title: "Cars 2", code: "infantil" },
    F004: { title: "Latest Hit Release", code: "lançamento" },
    //Pode alterar os filmes se você quiser :D
  };
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    // rentals = [{movieID: string, days: number, title: string }, {} ]
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie
    // determina o custo para cada filme
    switch (movie.code) {
      case "regular":
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case "lançamento":
        thisAmount = r.days * 3;
        break;
      case "infantil":
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movie.code === "lançamento" && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};


class Filme {
  constructor(titulo, codigo) {
    this.titulo = titulo;
    this.codigo = codigo;
  }

  calcularValorAluguel(diasAluguel) {
    let valor = 0;

    switch (this.codigo) {
      case 'comum':
        valor = 2;
        if (diasAluguel > 2) {
          valor += (diasAluguel - 2) * 1.5;
        }
        break;
      case 'novo':
        valor = diasAluguel * 3;
        break;
      case 'infantil':
        valor = 1.5;
        if (diasAluguel > 3) {
          valor += (diasAluguel - 3) * 1.5;
        }
        break;
      default:
        valor = 0; // Filme desconhecido
        break;
    }

    return valor;
  }
}

class Aluguel {
  constructor(idFilme, dias) {
    this.idFilme = idFilme;
    this.dias = dias;
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.alugueis = [];
  }

  adicionarAluguel(aluguel) {
    this.alugueis.push(aluguel);
  }

  extrato() {
    let valorTotal = 0;
    let pontosDeAluguel = 0;
    let resultado = `Extrato de Aluguel para ${this.nome}\n`;

    for (let aluguel of this.alugueis) {
      const filme = filmes[aluguel.idFilme];
      const valorAluguel = filme.calcularValorAluguel(aluguel.dias);

      // Adicionar pontos de aluguel frequente
      pontosDeAluguel++;
      if (filme.codigo === 'novo' && aluguel.dias > 2) {
        pontosDeAluguel++;
      }

      // Mostrar detalhes do aluguel
      resultado += `\t${filme.titulo}\t${valorAluguel}\n`;
      valorTotal += valorAluguel;
    }

    // Adicionar informações finais
    resultado += `Valor total a pagar é ${valorTotal}\n`;
    resultado += `Você ganhou ${pontosDeAluguel} pontos de aluguel frequentes\n`;

    return resultado;
  }
}

// Mapeamento de filmes
const filmes = {
  F001: new Filme('Ran', 'comum'),
  F002: new Filme('Trois Couleurs: Bleu', 'comum'),
  F003: new Filme('Carros 2', 'infantil'),
  F004: new Filme('Lançamento Mais Recente', 'novo'),
};

// Formas de uso:
const cliente = new Cliente('Nome do Cliente');
cliente.adicionarAluguel(new Aluguel('F001', 3));
cliente.adicionarAluguel(new Aluguel('F002', 2));

const extrato = cliente.extrato();
console.log(extrato);