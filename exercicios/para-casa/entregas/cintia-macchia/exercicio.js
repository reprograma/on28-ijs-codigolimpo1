class Cliente {
pontosAluguel = []

    constructor(nome){
        this.nome = nome
        this.pontosAluguel = pontoAluguel
    }

    pontosAluguel(pontoAluguel){
        this.pontosAluguel.push(pontoAluguel)
    }

    pontoAluguelFrequente(){
        if (CATEGORIA_FILMES === "lançamento" &&  days > 2) pontoAluguel++;
        return   pontoAluguel
    }
}

class Aluguel{
    constructor(dias){
        this.dias = dias;
        this.filmes = [];
        this.total = 0
    }

    imprimirDadosAluguel(){
         const resultado = 
         `Rental Record for ${Cliente.name}\n`;
         `\t${Filme.titulo}\n`; 
         `O valor devido é ${calcularCustoAluguel()}\n`;
         `Você ganhou ${pontoAluguelFrequente()} pontos de aluguel frequente\n`;
         return resultado
       }
     
    }


    class Aluguel{
        constructor(dias){
            this.dias = dias;
            this.filmes = [];
            this.total = 0
        }


 
    calcularDiasExtra(){
            const tarifaPorDia = CUSTO_BASE_FILME[Filme.categoria];
            const diasCortesia = DIAS_GRATIS_CATEGORIA[Filme.categoria];
            const diasTotaisAluguel = this.dias;
            const diasExtrasAPagar =
            diasTotaisAluguel > diasCortesia ?  diasTotaisAluguel : diasCortesia
            return (diasExtrasAPagar - diasTotaisAluguel) * tarifaPorDia
           
    }
    }
    