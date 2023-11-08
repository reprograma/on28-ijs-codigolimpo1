const Movie = require("./Movie.js");
const Customer = require("./Customer.js");
const RentalTag = require("./RentalTag.js");

class Rental {
    #catalog = [];

    addMovieToCatalog(movie, rentalTag) {
        if(this.#catalog.includes(movie)) throw new Error("Movie already in catalog");
        this.#catalog.push({movie: movie, rentalTag: rentalTag});
    }

    calculateMovieRentalCost(movie, days) {
        if(this.#catalog.find((element) => element.movie === movie) === undefined) throw new Error("Movie not in catalog");
        let rentalTag = this.#catalog.find((element) => element.movie === movie).rentalTag;
        return rentalTag.baseCost + Math.max(0, (days - rentalTag.daysThreshold) * rentalTag.costPerDay);
    }

	calculateCustomerRentalsCost(customer) {
        let totalRentalsCost = 0;
        let frequentRenterPointsEarned = 0;

        console.log(`Rental Record for ${customer.name}:`)

        for(let rental of customer.movieRentals) {
            let rentalCost = this.calculateMovieRentalCost(rental.movie, rental.rentalDays);
            totalRentalsCost += rentalCost;

            frequentRenterPointsEarned += rental.rentalDays > 2 && this.#catalog.find((element) => element.movie === rental.movie).rentalTag.name == "New" ? 2 : 1;

            console.log(rental.movie.title + ": $" + rentalCost.toFixed(2));
        }

        customer.frequentRenterPoints += frequentRenterPointsEarned;

        console.log(`\nTotal amount owed: $${totalRentalsCost.toFixed(2)}`);
        console.log(`You earned ${frequentRenterPointsEarned} frequent renter points.\n`);

        return totalRentalsCost;
    }    
}

module.exports = Rental;