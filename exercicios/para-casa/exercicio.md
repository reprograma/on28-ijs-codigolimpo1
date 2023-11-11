# Exercício!

O código a seguir, retirado de [`refactoring-exercise-javascript`](https://github.com/greatersum/refactoring-exercise-javascript/), representa o sistema base de uma locadora de DVDs. Esse sistema é um legado, e sua missão essa semana é torná-lo melhor. O que você precisa fazer é:

**[SUGESTÃO DA AULA]**: entregar em um arquivo `.js` ao invés de editar o Markdown.

1. Finja que você está fazendo um code review do código abaixo é: leia com atenção e anote todos os odores que você conseguir encontrar. Para cada odor, indique onde você encontrou. Se quiser, você pode escrever por que você acha que aquele código é um smell.

2. Usando o que você aprendeu na aula de hoje, escolha dois odores para refatorar. Escreva sua solução no segundo bloco, a partir da linha 65.

3. Desafio extra: se você estiver se sentindo aventureira, refatore todos os odores que conseguir encontrar. Você também pode aproveitar para migrar esse código para usar classes do ES6 ao invés de protótipos.

Vamos revisitar esse código juntas na semana 10 (SOLID), então guardem suas respostas se quiserem comparar e medir o progresso :D

```
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
```

## Faça sua refatoração aqui!

```
class Movie {
  constructor(title, code) {
    this.title = title;
    this.code = code;
  }
}

class Rental {
  constructor(name, rentals) {
    this.name = name;
    this.rentals = rentals;
  }

  statement() {
    const movies = {
      F001: new Movie('Ran', 'regular'),
      F002: new Movie('Trois Couleurs: Bleu', 'regular'),
      F003: new Movie('Cars 2', 'childrens'),
      F004: new Movie('Latest Hit Release', 'new'),
    };

    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${this.name}\n`;

    for (const rental of this.rentals) {
      const movie = movies[rental.movieID];
      const thisAmount = this.calculateAmount(movie.code, rental.days);

      frequentRenterPoints += this.calculateFrequentRenterPoints(movie.code, rental.days);

      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }

    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }

  calculateAmount(movieCode, days) {
    switch (movieCode) {
      case 'regular':
        return this.calculateRegularAmount(days);
      case 'new':
        return this.calculateNewAmount(days);
      case 'childrens':
        return this.calculateChildrensAmount(days);
      default:
        return 0;
    }
  }

  calculateRegularAmount(days) {
    let amount = 2;
    if (days > 2) {
      amount += (days - 2) * 1.5;
    }
    return amount;
  }

  calculateNewAmount(days) {
    return days * 3;
  }

  calculateChildrensAmount(days) {
    let amount = 1.5;
    if (days > 3) {
      amount += (days - 3) * 1.5;
    }
    return amount;
  }

  calculateFrequentRenterPoints(movieCode, days) {
    let points = 1;
    if (movieCode === 'new' && days > 2) {
      points++;
    }
    return points;
  }
}

// Testes de uso
const customer = { name: 'Ana Costa', rentals: [{ movieID: 'F001', days: 3 }] };
const rental = new Rental(customer.name, customer.rentals);
console.log(rental.statement());
```
