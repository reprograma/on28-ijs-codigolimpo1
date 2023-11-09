
//2. Usando o que você aprendeu na aula de hoje, escolha dois odores para refatorar. 
//Escreva sua solução no segundo bloco, a partir da linha 65.
// Criei as classes movie aluguel e cliente e adicionei na classe cliente um método
// para contar os pontos de fidelidade do cliente 
//


class Movie{
    constructor(titulo){
        this.titulo = titulo
        this.categoria = CATEGORIAFILMES.LANCAMENTO
    }
}
class Aluguel{
    constructor(dias){
    this.dias = dias,
    this.filmes =[]
    this.total = 0
}
adicionarFilme(filme){
    this.filmes.push(filme)
    const custo = calcularCustoAluguel(filme)
    this.total += custo 
}
}
class Cliente{
    constructor(nome){
    this.nome = nome
    this.filmesAlugados = []
    this.totalDePontosDoCliente = 0
    }
    alugarFilme(filme){
        this.filmesAlugados.push(filme)
    }
    calcularPontosDoCliente(){   
        const filmesLancamentosAlugados= this.filmesAlugados.filter(filme => filme.categoria == "release")
        const pontosBonusporCliente = len(filmesLancamentosAlugados)*1
        const pontosRegularCliente = len(this.filmeAlugados)*1
        return pontosBonusporCliente + pontosRegularCliente
    }
}