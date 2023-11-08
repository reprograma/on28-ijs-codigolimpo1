//Uma função fazendo muitas tarefas. Manter funções curtas e focadas
//Os filmes podem ser passados como parâmetros em uma classe, ficando um código mais limpo visualmente
Rental.prototype.statement = function (customer) {
  var movies = {
    F001: { title: "Ran", code: "regular" },
    F002: { title: "Trois Couleurs: Bleu", code: "regular" },
    F003: { title: "Cars 2", code: "childrens" },
    F004: { title: "Latest Hit Release", code: "new" },
  };
};

//Usar nomes significativos, o r fica uma letra perdida, não sabemos ao certo o que ele é
for (let r of customer.rentals) {
  let movie = movies[r.movieID];
  let thisAmount = 0;
}

//Constantes mágicas, temos muitas no código todo, substituir por constantes com nomes descritivos
switch (movie.code) {
  case "regular":
    thisAmount = 2;
    if (r.days > 2) {
      thisAmount += (r.days - 2) * 1.5;
    }
    break;
}
