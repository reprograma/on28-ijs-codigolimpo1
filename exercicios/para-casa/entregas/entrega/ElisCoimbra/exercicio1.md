# Exercício!

O código a seguir, retirado de [`refactoring-exercise-javascript`](https://github.com/greatersum/refactoring-exercise-javascript/), representa o sistema base de uma locadora de DVDs. Esse sistema é um legado, e sua missão essa semana é torná-lo melhor. O que você precisa fazer é:

1. Finja que você está fazendo um code review do código abaixo é: leia com atenção e anote todos os odores que você conseguir encontrar. Para cada odor, indique onde você encontrou. Se quiser, você pode escrever por que você acha que aquele código é um smell.

A classe Rental é uma classe extremamente longa que centraliza e controla todos métodos que o sistema necessita como por exemplo o cálculo do aluguel de  cada filme, o soma dos aluguéis que devem ser fornecidas ao cliente e  os pontos do cliente. 
Na linha 29 encontramos uma constante denominada r que aparente é uma constante mágica que não se pode identificar sua utilidade  em um primeiro momento.
