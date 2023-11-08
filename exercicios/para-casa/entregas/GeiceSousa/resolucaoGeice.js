var Rental = function () {};

const codeMovie = { 
  regular: 'regular', 
  children: 'children', 
  new: 'new'
}

const movies = {
  F001: { title: "Ran", code: codeMovie.regular},
  F002: { title: "Trois Couleurs: Bleu", code: codeMovie.regular},
  F003: { title: "Cars 2", code: codeMovie.childrens},
  F004: { title: "Latest Hit Release", code: codeMovie.new},
};

Rental.prototype.statement = function (customer) {

  let result = `Registro de aluguel para ${customer.name}\n`;

  calculateAmountEachMovie(customer, movies, result);

  //adiciona linhas de rodapé
  footerInformation(totalAmount, frequentRenterPoints, result);
};

function calculateAmountEachMovie(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Registro de aluguel para ${customer.name}\n`;

  for (let rental of customer.rentals) {
    let movie = movies[rental.movieID];
    let thisAmount = 0;
    let tax = 1.5;

    // determine amount for each movie
    //determina o valor de cada filme
    switch (movie.code) {
      case codeMovie.regular:
        thisAmount = 2;
        if (rental.days > 2) {
          thisAmount += (rental.days - 2) * tax;
        }
        break;

      case codeMovie.new:
        thisAmount = rental.days * 3;
        break;

      case codeMovie.regular.childrens:
        thisAmount = 1.5;
        if (rental.days > 3) {
          thisAmount += (rental.days - 3) * tax;
        }
        break;

      default:
        thisAmount = 1
        thisAmount += (rental.days - 1) * tax;
    }

    //adiciona pontos de locatário frequente
    frequentRenterPoints++;

    // adiciona bônus para um aluguel de lançamento de dois dias
    if (movie.code === "new" && rental.days > 2) frequentRenterPoints++;

    //imprime os valores deste aluguel
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
}

function footerInformation(totalAmount, frequentRenterPoints) {
  result += `O valor devido é ${totalAmount}\n`;
  result += `Você ganhou ${frequentRenterPoints} pontos de locatário frequente\n`;

  return result;
}
