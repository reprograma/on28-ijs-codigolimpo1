70% de armazenamento usado … Caso atinja o limite de armazenamento, não será possível criar, editar ou fazer upload de arquivos. Aproveite 100 GB de armazenamento por R$ 6,99 R$ 1,69 por mês, durante 3 meses.
# Exercício!

1. Finja que você está fazendo um code review do código abaixo é: leia com atenção e anote todos os odores que você conseguir encontrar. Para cada odor, indique onde você encontrou. Se quiser, você pode escrever por que você acha que aquele código é um smell.
Ótimo! Sua análise identificou vários code smells relevantes no código. Aqui está um resumo desses code smells e possíveis ações para mitigá-los:

- **Função Enorme**:
   - A função `statement` faz muitas coisas ao mesmo tempo. Divida-a em funções menores, cada uma responsável por uma tarefa específica.

- **Nomenclatura de Variável**:
   - Evite nomes seja de variáveis seja de funções não descritivos, como `r`. Dê nomes significativos às variáveis para melhorar a legibilidade e compreensão do código.

- **Legibilidade com Constantes**:
   - Substituir valores literais por constantes com nomes descritivos. Isso tornará o código mais legível e mais fácil de manter.

- **Polimorfismo no lugar do Switch Case**:
   - Em vez de usar um switch case para determinar o valor de `thisAmount` com base no tipo de filme, usar polimorfismo para calcular o valor. Isso tornará o código mais flexível.