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
