const Movie = require("./Movie.js");

class Customer {
	#movieRentals = [];
	#name;
	#frequentRenterPoints;

	constructor(name) { this.#name = name; }

	get name() { return this.#name; }
	get movieRentals() { return this.#movieRentals; }
	get frequenterPoints() { return this.#frequentRenterPoints; }

	set frequentRenterPoints(value) {
		if(value < 0) return new Error("Points must be a positive number");
		this.#frequentRenterPoints = value;
	}

	addMovieRental(movie, days) {
		if(this.movieRentals.includes(movie)) return new Error("Movie already rented");
		this.#movieRentals.push({movie: movie, rentalDays: days});
	}

}

module.exports = Customer;
