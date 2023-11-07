var Rental = function () {};

Rental.prototype.statement = function (customer) {
  var movies = {
    F001: { title: "Ran", code: "regular" },
    F002: { title: "Trois Couleurs: Bleu", code: "regular" },
    F003: { title: "Cars 2", code: "childrens" },
    F004: { title: "Latest Hit Release", code: "new" },
  };

  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie 
    //determina o valor de cada filme
    switch (movie.code) {
      case "regular":
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = r.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points 
    //adiciona pontos de locatário frequente

    frequentRenterPoints++;

    // add bonus for a two day new release rental 
    // adiciona bônus para um aluguel de lançamento de dois dias

    if (movie.code === "new" && r.days > 2) frequentRenterPoints++;

    //print figures for this rental 
    //imprime os valores deste aluguel

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }

  // add footer lines 
  //adiciona linhas de rodapé
  
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};
