class Rental {
    constructor() {
      this.movies = {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
        F003: { title: 'Cars 2', code: 'childrens' },
        F004: { title: 'Latest Hit Release', code: 'new' },
      };
    }
  
    statement(customer) {
      let totalAmount = 0;
      let frequentRenterPoints = 0;
      let result = `Rental Record for ${customer.name}\n`;
  
      for (let rental of customer.rentals) {
        const movie = this.movies[rental.movieID];
        const thisAmount = this.calculateRentalCost(movie.code, rental.days);
  
        frequentRenterPoints += this.calculateFrequentRenterPoints(movie.code, rental.days);
  
        result += `\t${movie.title}\t${thisAmount}\n`;
        totalAmount += thisAmount;
      }
  
      result += `Amount owed is ${totalAmount}\n`;
      result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  
      return result;
    }
  
    calculateRentalCost(code, days) {
      const baseAmounts = {
        regular: 2,
        new: 3,
        childrens: 1.5,
      };
  
      let thisAmount = baseAmounts[code] || 0;
  
      if (code === 'regular' && days > 2) {
        thisAmount += (days - 2) * 1.5;
      } else if (code === 'childrens' && days > 3) {
        thisAmount += (days - 3) * 1.5;
      }
  
      return thisAmount;
    }
  
    calculateFrequentRenterPoints(code, days) {
      if (code === 'new' && days > 2) {
        return 2;
      }
      return 1;
    }
  }
  