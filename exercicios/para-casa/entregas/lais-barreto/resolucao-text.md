---

# Respostas ao exercício

**1. Code smells encontrados:**

- Método muito longo
  o método `statement` é longo e faz muitas coisas diferentes, tornando difícil de compreender e de realizar manutenção

- Uso de `switch/case`
  o switch-case é usado para determinar o custo de aluguel de acordo com o código do filme. o uso desse tipo de estrutura torna o código propenso a erros e de difícil manutenção

- Uso de variáveis mágicas
  no momento de calcular o valor do aluguel, o código traz valores (1.5, 2 e 3) sem especificar do que se tratam. isso torna confuso e de difícil manutenção.

- Uso de variáveis com nomes pouco descritivos (`r, thisAmount, result`)
  o uso de variáveis genéricas torna difícil a compreensão do código
