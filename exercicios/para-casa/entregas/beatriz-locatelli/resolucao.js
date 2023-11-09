var Rental = function () { };
// Smell  relacionado à heurística G30 ("As funções devem fazer uma coisa só"). A classe Rental está muito longa
// e está fazendo muitas funções que não tem necessariamente a ver com a classe que está. Exemplo: a const 
// frequentRenterPoints poderia estar na classe Cliente, pois tem a ver com a soma da pontuação do cliente.
Rental.prototype.statement = function (customer) {

    var movies = {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
        F003: { title: 'Cars 2', code: 'childrens' },
        F004: { title: 'Latest Hit Release', code: 'new' },
    };

    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
        // "r" é uma constante mágina. Se encaixa como um Anti-Patterns, uma vez que o "r" não está especificado ao
        // que se refere, é possível somente deduzir.
        let movie = movies[r.movieID];
        let thisAmount = 0;

        // determine amount for each movie
        // Uma boa prática seria nomear essa função ao invés de colocar um comentário dizendo para que ela serve.
        // Por exemplo: poderia ser uma função chamada amountForEachMovie()
        switch (movie.code) {
            case 'regular':
                thisAmount = 2;
                if (r.days > 2) {
                    thisAmount += (r.days - 2) * 1.5; //constante mágica. Poderia estar dentro de uma const e depois ser chamada dentro da função.
                }
                break;
            case 'new':
                thisAmount = r.days * 3; //constante mágica. Poderia estar dentro de uma const e depois ser chamada dentro da função.
                break;
            case 'childrens':
                thisAmount = 1.5;
                if (r.days > 3) {
                    thisAmount += (r.days - 3) * 1.5; //constante mágica. Poderia estar dentro de uma const e depois ser chamada dentro da função.
                }
                break;
        }

        // Mesma situação do switch case. Uma boa prática seria nomear essa função ao invés de colocar um comentário dizendo para que ela serve.
        // Por exemplo: poderia ser uma função chamada frequentRenterPoint() e estar dentro da Classe Cliente.
        //add frequent renter points
        frequentRenterPoints++;
        // add bonus for a two day new release rental
        if (movie.code === 'new' && r.days > 2) frequentRenterPoints++;

        //print figures for this rental
        result += `\t${movie.title}\t${thisAmount}\n`;
        totalAmount += thisAmount;
    }
    //Poderia ser uma função nomeada e poderia estar na Classe Cliente, porque os pontos pertencem ao cliente
    // e não ao filme ou aluguel
    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
};


//## Faça sua refatoração aqui!
const MOVIE_CATEGORY = {
    REGULAR: 1,
    NEW: 2,
    CHILDREN: 3
}

const MOVIE_CUST_BY_CATEGORY = {
    REGULAR: 5,
    NEW: 8,
    CHILDREN: 7,
};

class Rental {
    days;
    movies;
    total;
    
    constructor(days) {
        this.days = days;
        this.movies = [];
        this.total = 0;
    }

    addMovie(movie) {
        this.movies.push(movie);
        const cust = calculateRentalCost(movie);
        this.total += cust;
    }

    calculateRentalCost(movie) {
        if (movie.REGULAR) {
            this.days += (this.days * MOVIE_CUST_BY_CATEGORY.REGULAR)
            return (`Movie: ${movie.name}, Total: ${this.total}`)
        } else if (movie.NEW) {
            this.days += (this.days * MOVIE_CUST_BY_CATEGORY.NEW)
            return (`Movie: ${movie.name}, Total: ${this.total}`)
        }
        else {
            this.days += (this.days * MOVIE_CUST_BY_CATEGORY.CHILDREN)
            return (`Movie: ${movie.name}, Total: ${this.total}`)
        }
    }
}

class Movie {
    title;
    category;

    constructor(title) {
        this.title = title;
        this.category = MOVIE_CATEGORY.REGULAR;
    }
}

class Client {
    name;
    points;

    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    frequentRenterPoints(movie) {
        if (movie === MOVIE_CATEGORY.NEW && this.days > 2) {
            frequentRenterPoints = this.points++
            console.log(`You earned ${frequentRenterPoints} frequent renter points.`)
        }
    }
}




