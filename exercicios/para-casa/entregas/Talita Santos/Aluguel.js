const { Filme } = require("./Filme");

class Aluguel extends Filme {
    diasDeAluguel;
    filmesEscolhidos = [];
    valorTotal = 0

    constructor(diasDeAluguel) {
        super()
        this.diasDeAluguel = diasDeAluguel;
    }

    adicionarFilme(tituloDoFilme) {
        this.filmesEscolhidos.push(tituloDoFilme);
    }

    calcularCustoRegular() {
        const tarifaPorDia = this.categoria.regular.tarifaDeBase;
        const diasRegularesAPagar = this.diasDeAluguel;
        return tarifaPorDia * diasRegularesAPagar
    }

    calcularCustoInfantil() {
        const tarifaPorDia = this.categoria.infantil.tarifaDeBase;
        const diasRegularesAPagar = this.diasDeAluguel;
        return tarifaPorDia * diasRegularesAPagar
    }

    calcularCustoLancamento() {
        const tarifaPorDia = this.categoria.lancamento.tarifaDeBase;
        const diasRegularesAPagar = this.diasDeAluguel;
        return tarifaPorDia * diasRegularesAPagar
    }

    calcularCustoTotalDoAluguel() {
        const filmeRegular = this.calcularCustoRegular();
        const filmeInfantil = this.calcularCustoInfantil();
        const filmeLancamento = this.calcularCustoLancamento();
        return filmeRegular + filmeInfantil + filmeLancamento;
    }

}

module.exports = Aluguel;