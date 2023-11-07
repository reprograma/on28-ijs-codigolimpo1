// Essa função, que poderia ser convertida em uma classe é muito longa.
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

    frequentRenterPoints++;
    if (movie.code === "new" && r.days > 2) frequentRenterPoints++;

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};

const customer = {
  name: "Verônica",
  rentals: [
    { movieID: "F001", code: "regular", days: 3 },
    { movieID: "F004", code: "new", days: 3 },
    { movieID: "F003", code: "childrens", days: 5 },
  ],
};

const rental = new Rental();
const statement = rental.statement(customer);
console.log(statement);
