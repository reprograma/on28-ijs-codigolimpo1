1. Finja que você está fazendo um code review do código abaixo é: leia com atenção e anote todos os odores que você conseguir encontrar. Para cada odor, indique onde você encontrou. Se quiser, você pode escrever por que você acha que aquele código é um smell.

- Código duplicado: A lógica de cálculo de valores de aluguel é repetitiva e poderia ser refatorada para evitar duplicação de código.

- Polimorfismo: Como o calculo é todo feito no switch para determinar o preço do aluguel, vai requer modificações no código sempre que um novo tipo de filme é adicionado.


2. Usando o que você aprendeu na aula de hoje, escolha dois odores para refatorar.

// Refatoração aqui! Feita com base nos odores mencionados acima.

class Rental {
  constructor() {
    this.movies = {
      F001: { title: 'Ran', code: 'regular' },
      F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
      F003: { title: 'Cars 2', code: 'childrens' },
      F004: { title: 'Latest Hit Release', code: 'new' },
    };
  }

  calculateAmount(movie, days) {
    switch (movie.code) {
      case 'regular':
        return 2 + Math.max(0, days - 2) * 1.5;
      case 'new':
        return days * 3;
      case 'childrens':
        return 1.5 + Math.max(0, days - 3) * 1.5;
      default:
        return 0;
    }
  }

  statement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;

    for (let r of customer.rentals) {
      let movie = this.movies[r.movieID];
      let thisAmount = this.calculateAmount(movie, r.days);

      frequentRenterPoints++;
      if (movie.code === 'new' && r.days > 2) frequentRenterPoints++;

      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }

    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }
}