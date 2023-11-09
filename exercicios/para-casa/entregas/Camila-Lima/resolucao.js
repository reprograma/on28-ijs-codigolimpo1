//Odores percebidos

//Substituir as variáveis var por let e const
//Retirar os comentários
//Usar variáveis somente português ou inglês, mantendo o mesmo idioma
//Quebrar funções em sub-funções afim de que fique mais claro e possa estar reutilizando em outros cenários 
//Substituir os nomes de variáveis abreviadas por nomes descritivos ou claros.
//Criação de classes Movie, Rental e Customer

class Movie {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
}

class Rental {
  constructor(customer) {
    this.customer = customer;
    this.movies = [];
  }

  addRental(movie, days) {
    this.movies.push({ movie, days });
  }

  calculateRentalCost(movie, days) {
    const baseCost = {
      "release": 3,
      "children": 1.5,
      "regular": 2,
    }[movie.category];
    
    const extraCostPerDay = {
      "release": 3,
      "children": 1.5,
      "regular": 1.5,
    }[movie.category];

    if (movie.category === "regular" && days > 2) {
      return baseCost + (days - 2) * extraCostPerDay;
    }

    return baseCost * days;
  }

  statement() {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${this.customer}\n`;

    for (const { movie, days } of this.movies) {
      const rentalCost = this.calculateRentalCost(movie, days);

      frequentRenterPoints++;
      if (movie.category === "release" && days > 2) {
        frequentRenterPoints++;
      }

      result += `\t${movie.title}\t${rentalCost}\n`;
      totalAmount += rentalCost;
    }

    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }
  
  toString() {
    return this.name;
  }
}

// Exemplo de uso:
const customer = new Customer("Alice");
const rental = new Rental(customer);

const ran = new Movie("Ran", "regular");
const cars2 = new Movie("Cars 2", "infantil");

rental.addRental(ran, 3);
rental.addRental(cars2, 4);

console.log(rental.statement());

