class Rental {
  constructor() {
    this.movies = {
      F001: { title: "Ran", code: "regular" },
      F002: { title: "Trois Couleurs: Bleu", code: "regular" },
      F003: { title: "Cars 2", code: "childrens" },
      F004: { title: "Latest Hit Release", code: "new" },
    };
  }

  calculateTotalAmount(movie, days) {
    let amount = 0;

    switch (movie.code) {
      case "regular":
        amount = 2;
        if (days > 2) {
          amount += (days - 2) * 1.5;
        }
        break;
      case "new":
        amount = days * 3;
        break;
      case "childrens":
        amount = 1.5;
        if (days > 3) {
          amount += (days - 3) * 1.5;
        }
        break;
    }

    return amount;
  }

  statement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;

    for (let r of customer.rentals) {
      let movie = this.movies[r.movieID];
      let thisAmount = this.calculateTotalAmount(movie, r.days);

      frequentRenterPoints++;
      if (movie.code === "new" && r.days > 2) frequentRenterPoints++;

      // print figures for this rental
      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }

    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }
}

const customer = {
  name: "Verônica",
  rentals: [
    { movieID: "F001", title: "Ran", code: "regular", days: 3 },
    { movieID: "F004", title: "Latest Hit Release", code: "new", days: 2 },
    { movieID: "F003", title: "Cars 2", code: "childrens", days: 5 },
  ],
};

const rental = new Rental();
const statement = rental.statement(customer);
console.log(statement);
