class Filme {

    constructor(titulo, categoria) {
        this.titulo = titulo;
        this.categoria = {
            infantil: { tarifaDeBase: 0.5, diasGratuitos: 1 },
            regular: { tarifaDeBase: 2, diasGratuitos: 1 },
            lancamento: { tarifaDeBase: 3, diasGratuitos: 0 }
        }
    }
}

const matrix = new Filme("Matrix");
console.log(matrix)

module.exports = { Filme }