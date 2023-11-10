# Odores encontrados

Na função que recebe customer ela executa uma série de ações em sequencia, o que caracteriza um odor. As funções precisam ser concisas.
Ao inves de 'for' vou utilizar o método map, para percorrer o array rentals de forma mais expressiva e modular.
Vou extrair as lógicas de cálculo de custo do aluguel e pontos de aluguel frequentes para funções separadas (calculateRentalCost e calculateFrequentRenterPoints), tornando o código mais compreensivel.
Vou evitar o uso de switch dentro do loop, tornando o código mais legível e evitando duplicação de lógica.
Dentro do switch case não vou utilizar outro if para analise de dias, farei uso do Math.max, assim como, não atribuirei dentro do switch case o valor da variável thisAmount, isso ocorrerá como resultado do método calculateRentalCost que vou criar.