const Rental = require("./Rental.js");
const Customer = require("./Customer.js");
const Movie = require("./Movie.js");
const RentalTag = require("./RentalTag.js");


const rental = new Rental();

const customer1 = new Customer("Stella");
const customer2 = new Customer("Luna");

const movie1 = new Movie("The Matrix");
const movie2 = new Movie("Openheimer");
const movie3 = new Movie("Inception");
const movie4 = new Movie("Boss Baby");

const rentalTag1 = new RentalTag("New", 3, 1, 3);
const rentalTag2 = new RentalTag("Regular", 2, 2, 1.5);
const rentalTag3 = new RentalTag("Children", 1.5, 3, 1.5);

rental.addMovieToCatalog(movie1, rentalTag2);
rental.addMovieToCatalog(movie2, rentalTag1);
rental.addMovieToCatalog(movie3, rentalTag2);
rental.addMovieToCatalog(movie4, rentalTag3);

customer1.addMovieRental(movie1, 3);
customer1.addMovieRental(movie2, 4);
customer2.addMovieRental(movie3, 1);
customer2.addMovieRental(movie4, 2);


rental.calculateCustomerRentalsCost(customer1);
rental.calculateCustomerRentalsCost(customer2);


