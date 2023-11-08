# Exercício!


O código a seguir, retirado de [`refactoring-exercise-javascript`](https://github.com/greatersum/refactoring-exercise-javascript/), representa o sistema base de uma locadora de DVDs. Esse sistema é um legado, e sua missão essa semana é torná-lo melhor. O que você precisa fazer é:

1. Finja que você está fazendo um code review do código abaixo, leia com atenção e anote todos os odores que você conseguir encontrar. Para cada odor, indique onde você encontrou. Se quiser, você pode escrever por que você acha que aquele código é um smell.
    - _Code Smells_:
      - uso de `var` -> alterado para const
      - código muito longo, separar em pelo menos 2 funções
      - corrigir variáveis mágicas (1.5 -> tax)
      - nomear melhor as siglas (r -> rental)
      - colocar default no switch-case
      - ajustar cases

2. Usando o que você aprendeu na aula de hoje, escolha dois odores para refatorar. Escreva sua solução no segundo bloco, a partir da linha 65.
    - arquivo `resolucaoGeice.js`

3. Desafio extra: se você estiver se sentindo aventureira, refatore todos os odores que conseguir encontrar. Você também pode aproveitar para migrar esse código para usar classes do ES6 ao invés de protótipos.

Vamos revisitar esse código juntas na semana 10 (SOLID), então guardem suas respostas se quiserem comparar e medir o progresso :D
