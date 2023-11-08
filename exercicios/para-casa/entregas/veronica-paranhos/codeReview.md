# 1. Code Review da Classe Rental

- A classe Rental está muito longa.
  - O ideal é separar as responsabilidades em métodos diferentes. Classes muito longa, ou Blobs, são de dífícil entendimento e manutenção.
- Variável com "var" em vez de "let".
  - Nas linhas 14 e 18 temos o uso da variável "var". "Var" tem escopo global e isso significa que ela pode ser modificada fora do escopo da função ou da classe onde ela está inserida e isso pode quebrar toda a aplicação. Por isso é preferível o uso de "let".
- Grande quantidade de comentários.
  - Comentários indicam que código não é de fácil entendimento. Separando bem as responsabilidades dos métodos, o código fica mais claro e não necessita de comentários para entendê-lo.
- Variável com nome que não revelam o seu propósito.
  - Na linha 29 tem uma váriavel "r" que não fica claro no código a que se refere. O ideal é usar nome de variáveis que façam sentido para um maior entendimento do código e reaproveitamento dessa variável.
- Uso de Constantes Mágicas.
  - Dentro do Switch Case existem constantes com valores que não ficam claros de onde vem e o que significam. Caso esses valores precisem ser modificados no futuro fica complicado saber em quais outros lugares do código ele foi utilizado também.

# 3. Desafio Extra

- Refatorei o código modificando todos os pontos apontados no Code Review.
