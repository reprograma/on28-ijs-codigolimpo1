### CODE SMELLS:

1. MÉTODO LONGO: O método statement é longo, o que pode tornar difícil a manutenção e leitura.
- O método statement foi dividido em funções menores para tornar o código mais legível e fácil de manter.

2. Switch: O switch é usado para calcular o valor de aluguel, o que pode ser melhorado para evitar a complexidade condicional.
- As lógicas do switch foram substituídas por funções separadas, calculateRentalCost e calculateFrequentRenterPoints, simplificando a lógica e evitando duplicação.