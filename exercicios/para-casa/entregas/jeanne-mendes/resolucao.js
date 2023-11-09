var Rental = function () { };

Rental.prototype.statement = function (customer) {

  var movies = {
    F001: { title: 'Ran', code: 'regular' },
    F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
    F003: { title: 'Cars 2', code: 'childrens' },
    F004: { title: 'Latest Hit Release', code: 'new' },
    //Pode alterar os filmes se você quiser :D
  };

  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie
    switch (movie.code) {
      case 'regular':
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case 'new':
        thisAmount = r.days * 3;
        break;
      case 'childrens':
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movie.code === 'new' && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};


class Movie {
    constructor(title, code){
        this.title = title;
        this.code = code;
    }
}

class Client{
    constructor(nome){
        this.nome = nome

    }
}

class Rent{

    constructor(client){
        if(client instanceof Client){
            this.client = client
            this.movies = []
        }

        
    }
    addMovie(film, days){
        this.movies.push(film, days)

    }

    calcTotalAmount(){
        let result = 0
        for( movie[1] in Movie){                   
            console.log(this.movies[1])
        }
        return result
    }

}


const client = new Client("ana")
const filme1 = new Movie("Cars 2", "regular")
const filme2 = new Movie("Atividade Paranormal", "new")
const rent1 = new Rent(client)
rent1.addMovie(filme1, 3)
rent1.addMovie(filme2, 2)
console.log(rent1.movies)
console.log(rent1.calcTotalAmount())
/* var customer = {
    name: 'Jeanne',
    rentals: [
      { movieID: 'F001', days: 3 },
      { movieID: 'F003', days: 3 }
      // Adicione mais filmes ou altere conforme necessário
    ]
  };
  
  var rental = new Rental();
  var statement = rental.statement(customer);
  
  console.log(statement);
 */
