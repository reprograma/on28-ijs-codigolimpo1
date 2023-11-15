## Code Review
<i> Começando pelo óbvio, o código é bastante confuso. Não ter documentação, contexto, ou até mesmo, quais são as regras de negócio, para avaliar se o código está executando o que é esperado, também dificultam a leitura.

Ao iniciar um teste localmente, não é possível visualizar as informações do objeto corretamente. A instância da classe retorna erro pois foi invocada como ``Movie`` em vez de ``Filme``. Então, a partir disso, iniciei a limpeza/refatoração do código. </i>


## Code Smells encontrados

- <b>Dead code encontrado na linha 75</b>: o construtor da classe ``Filme`` recebe o ``titulo`` como parâmetro, mas sua propriedade estava vazia, e só retornava a ``categoria``;

- <b>Dead code encontrado na linha 108</b>: método ``calcularcustoExtra() {}`` que não tinha uma implementação e, portanto, não era executado.

## Anti-Patterns
- <b>Programação copia e cola</b> - entre as linhas 55 e 71, ``CUSTO_BASE_FILME``, ``DIAS_GRATIS_CATEGORIA`` e ``CATEGORIAS_FILME`` sendo criados, e dentre eles, a diferença é apenas o nome dos objetos. Como consequência, a utilização deles não é legível, e por isso foi refatorada (deletados).

## Boas práticas
- Os "comentários ruins" - que descrevem um ou mais blocos de código que não é legível - foram removidos;

- Optei por criar as classes e fazer as devidas refatorações em arquivos separados, para ter um código mais organizado, e exercitar as boas práticas de POO;

- Diferente do original, as variáveis e classes foram criadas em PT-BR e de modo mais descritivo em relação ao que representam.