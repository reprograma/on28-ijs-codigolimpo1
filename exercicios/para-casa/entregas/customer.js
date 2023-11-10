const Movie = require("./viviane-luz/movie");

class Customer {
    constructor(name, rentals){
        this.name = name;
        this.rentals = rentals;
    }

    statement() {
        let allAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Rental for ${this.name} \n`;

        for (const rental of this.rentals) {
            const movie = rental.movie;
            const thisAmount = this.calculateMovieAmount(movie, rental.days);

            frequentRenterPoints ++;

            result += `\t${movie.title}\t${thisAmount}\n`;
            allAmount += thisAmount;
        }

        result += `Amount is ${allAmount} \n`;
        result += `You won ${frequentRenterPoints} frequent renter points\n`

        return result;
    }
/** Se o filme for da categoria regular, o custo base é 2.
Se o número de dias for maior que 2, é adicionado um valor adicional de (days - 2) * 1.5.
Caso contrário, o custo adicional é zero. */

/** Se o filme for da categoria lançamento, o custo é simplesmente o número de dias multiplicado por 3. */
/**Se o filme for da categoria infantil, o custo base é 1.5.
Se o número de dias for maior que 3, é adicionado um valor adicional de (days - 3) * 1.5. */

    calculateMovieAmount(movie, days) {
        if (movie.category === regular) {
            return 2 + Math.max(0, days -2) * 1.5;

        } else {
           (movie.category ===  'lançamento' )
        }
         if (movie.category === infantil ) {
            return 1.5 + Math.max(0, days - 3) * 1.5;

        } else {
            return 0;
        }
    }
}

const AMOUNT_TYPE_MOVIE = {
    lançamento: 3,
    infantil: 1.5,
    regular: 2
};

const DAYS_FREE_CATEGORY = {
    lançamento: 3,
    infantil: 3,
    regular: 2,
};

const CATEGORY_MOVIE = {
    lançamento: 0,
    infantil: 3,
    regular: 2,
};

const matrix = new Movie("Matrix", "lançamento");
const client = new Rental("Name Client", [{movie: matrix, days: 5}]);
console.log(client.statement());

module.exports = Customer;