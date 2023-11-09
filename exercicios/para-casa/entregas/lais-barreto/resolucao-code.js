class Movie {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
}

class RegularMovie extends Movie {
  calculateRentalCost(days) {
    const BASE_COST = 2;
    const ADDITIONAL_COST_PER_DAY = 1.5;

    let cost = BASE_COST;
    if (days > 2) {
      cost += (days - 2) * ADDITIONAL_COST_PER_DAY;
    }
    return cost;
  }
}

class NewReleaseMovie extends Movie {
  calculateRentalCost(days) {
    const BASE_COST = 3;
    return days * BASE_COST;
  }
}

class ChildrensMovie extends Movie {
  calculateRentalCost(days) {
    const BASE_COST = 1.5;
    const ADDITIONAL_COST_PER_DAY = 1.5;

    let cost = BASE_COST;
    if (days > 3) {
      cost += (days - 3) * ADDITIONAL_COST_PER_DAY;
    }
    return cost;
  }
}

class RentalService {
  calculateRentalCost(rental) {
    let movie = rental.movie;
    return movie.calculateRentalCost(rental.days);
  }

  calculateTotalCost(customer) {
    let totalCost = 0;
    for (let rental of customer.rentals) {
      totalCost += this.calculateRentalCost(rental);
    }
    return totalCost;
  }

  calculateFrequentRenterPoints(customer) {
    let frequentRenterPoints = 0;
    for (let rental of customer.rentals) {
      let movie = rental.movie;
      frequentRenterPoints++;

      if (movie.category === "new" && rental.days > 2) {
        frequentRenterPoints++;
      }
    }
    return frequentRenterPoints;
  }

  generateRentalStatement(customer) {
    let totalCost = 0;
    let frequentRenterPoints = 0;
    let statement = `Rental Record for ${customer.name}\n`;

    for (let rental of customer.rentals) {
      let movie = rental.movie;
      let rentalCost = this.calculateRentalCost(rental);
      statement += `\t${movie.title}\t${rentalCost}\n`;
      totalCost += rentalCost;
      frequentRenterPoints++;
      if (movie.category === "new" && rental.days > 2) {
        frequentRenterPoints++;
      }
    }

    statement += `Amount owed is ${totalCost}\n`;
    statement += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return statement;
  }
}

const ran = new RegularMovie("Ran", "regular");
const troisCouleursBleu = new RegularMovie("Trois Couleurs: Bleu", "regular");
const cars2 = new ChildrensMovie("Cars 2", "childrens");
const latestHitRelease = new NewReleaseMovie("Latest Hit Release", "new");

const rentalService = new RentalService();

const customer = {
  name: "John Doe",
  rentals: [
    { movie: ran, days: 3 },
    { movie: troisCouleursBleu, days: 2 },
    { movie: cars2, days: 4 },
    { movie: latestHitRelease, days: 5 },
  ],
};

const statement = rentalService.generateRentalStatement(customer);

console.log(statement);
