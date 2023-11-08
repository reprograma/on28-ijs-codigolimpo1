class MovieCategory {
  baseAmount;
  noTaxDays;
  tax;
  giveExtraRenterPoints;

  constructor(baseAmount, noTaxDays, tax, giveExtraRenterPoints) {
    this.baseAmount = baseAmount;
    this.noTaxDays = noTaxDays;
    this.tax = tax;
    this.giveExtraRenterPoints = giveExtraRenterPoints;
  }
}

class Movie {
  title;
  category;

  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
}

class Rental {
  movie;
  days;

  constructor(movie, days) {
    this.movie = movie;
    this.days = days;
  }
}

class Customer {
  name;
  rentals;

  constructor(name, rentals) {
    this.name = name;
    this.rentals = rentals;
  }
}

class CustomerAmountCalculator {
  customer;

  constructor(customer) {
    this.customer = customer;
  }

  calculate() {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${this.customer.name}\n`;

    for (let rental of this.customer.rentals) {
      const movieCategory = rental.movie.category;
      let rentalAmount = 0;
      rentalAmount += movieCategory.baseAmount;
      if (rental.days > movieCategory.noTaxDays) {
        const taxDays = rental.days - movieCategory.noTaxDays;
        rentalAmount += taxDays * movieCategory.tax;
      }

      frequentRenterPoints++;
      if (movieCategory.giveExtraRenterPoints && rental.days > 2) {
        frequentRenterPoints++;
      }

      result += `\t${rental.movie.title}\t${rentalAmount}\n`;
      totalAmount += rentalAmount;
    }
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }
}

const regularCategory = new MovieCategory(2, 2, 1.5, false);
const newCategory = new MovieCategory(0, 0, 3, true);
const childrenCategory = new MovieCategory(1.5, 3, 1.5, false);

const movie1 = new Movie("Trois Couleurs: Bleu", regularCategory);
const movie2 = new Movie("Latest Hit Release", newCategory);

const rental1 = new Rental(movie1, 2);
const rental2 = new Rental(movie2, 3);

const customer = new Customer("Larissa Gnandt", [rental1, rental2]);

const calculator = new CustomerAmountCalculator(customer);
console.log(calculator.calculate());
