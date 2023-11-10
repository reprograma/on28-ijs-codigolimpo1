var Rental = function () { };

Rental.prototype.statement = function (customer) {
  

  var movies = {
    F001: { title: 'Ran', code: 'regular' },
    F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
    F003: { title: 'Cars 2', code: 'childrens' },
    F004: { title: 'Latest Hit Release', code: 'new' },
    //Pode alterar os filmes se você quiser :D
  };

  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;

  customer.rentals.map((rental) => {
    const movie = movies[rental.movieID];
    const thisAmount = calculateRentalCost(movie.code, rental.days);

    frequentRenterPoints += calculateFrequentRenterPoints(movie.code, rental.days);

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  });

  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

function calculateRentalCost(code, days) {
  switch (code) {
    case 'regular':
      return 2 + Math.max(0, days - 2) * 1.5;
    case 'new':
      return days * 3;
    case 'childrens':
      return 1.5 + Math.max(0, days - 3) * 1.5;
    default:
      return 0;
  }
}

function calculateFrequentRenterPoints(code, days) {
  return (code === 'new' && days > 2) ? 2 : 1;
}