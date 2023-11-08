class Rental {
  constructor() {
    this.movies = {
      F001: { title: "Ran", code: "regular" },
      F002: { title: "Trois Couleurs: Bleu", code: "regular" },
      F003: { title: "Cars 2", code: "childrens" },
      F004: { title: "Latest Hit Release", code: "new" },
    };

    this.totalAmount = 0;
    this.frequentRenterPoints = 0;
    this.result = "";
  }

  calculateTotalRental(movie, days) {
    let amount = 0;

    const AMOUNT_MOVIE = {
      NEW: 0,
      CHILDREN: 1.5,
      EXTRA_CHILDREN: 1.5,
      REGULAR: 2,
      EXTRA_REGULAR: 1.5,
    };

    switch (movie.code) {
      case "regular":
        amount = AMOUNT_MOVIE.REGULAR;
        if (days > 2) {
          amount += (days - 2) * AMOUNT_MOVIE.EXTRA_REGULAR;
        }
        break;
      case "new":
        amount = days * 3;
        break;
      case "childrens":
        amount = AMOUNT_MOVIE.CHILDREN;
        if (days > 3) {
          amount += (days - 3) * AMOUNT_MOVIE.EXTRA_CHILDREN;
        }
        break;
    }

    return amount;
  }

  calculateRenterPoints(movie, days) {
    return movie.code === "new" && days > 2 ? 2 : 1;
  }

  printTotalRental() {
    this.result += `Amount owed is ${this.totalAmount}\n`;
    return this.result;
  }

  printRenterPoints() {
    this.result += `You earned ${this.frequentRenterPoints} frequent renter points\n`;
    return this.result;
  }

  statement(customer) {
    this.result = `Rental Record for ${customer.name}\n`;

    const rentalResults = customer.rentals.map((rental) => {
      const movie = this.movies[rental.movieID];
      const thisAmount = this.calculateTotalRental(movie, rental.days);
      this.frequentRenterPoints += this.calculateRenterPoints(
        movie,
        rental.days
      );

      this.totalAmount += thisAmount;
      return `${rental.title} - ${thisAmount}`;
    });

    this.result += rentalResults.join("\n") + "\n";

    this.printTotalRental();
    this.printRenterPoints();

    return this.result;
  }
}
