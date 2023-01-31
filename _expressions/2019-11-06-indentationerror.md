---
title: Simulações de Monte Carlo aplicadas ao Estudo de Raios Cósmicos
excerpt: Análises estatísticas envolvendo as propriedades dos Raios Cósmicos
collection: expressions
permalink: /expressions/montecarlo/ 
---

Este projeto foi desenvolvido com apoio e financiamento do [Serviço de Apoio ao Estudante](https://www.sae.unicamp.br/portal/pt/) como parte do programa de Bolsas de Auxílio Social (BAS). Ele foi desenvolvido pelo [Departamento de Raios Cósmicos e Cronologia](https://sites.ifi.unicamp.br/drcc/) do [Instituto de Física "Gleb Wataghin"](https://portal.ifi.unicamp.br) e foi ministrado pela [Profa. Dr. Carola Dobrigkeit Chinellato](http://lattes.cnpq.br/0301569503177054
).

Este projeto busca o aprimoramento técnico na área das ciências exatas e da natureza, ele visa proporcionar uma introdução ao método de Monte Carlo e a simulação computacional de fenômenos físicos utilizando os Raios Cósmicos como um plano de fundo.

## Método de Monte Carlo

O método de Monte Carlo constitui uma série de métodos computacionais utilizados em simulações de larga escala que recorrem a amostragens aleatórias. Podemos resumir o método como uma forma de atingir resultados numéricos para problemas que são, pelo menos em princípio, determínisticos, por meio de variáveis pseudorrandômicas, isto é, que são gerados por um algorítmo computacional a partir de uma seed específica

Este método é particularmente util para fenômenos físicos que são descritos por muitas variáveis e são sujeitos a muitas incertezas experimentais.

Uma forma interessante de visualizar o método de Monte Carlo pode vir pelo problema da agulha de Buffon, um problema matemático proposto por Georges-Louis Leclerc no século 18. O problema é o seguinte:
"Supondo que o chão seja feito de diversas tábuas de madeira paralelas e equidistantes, supondo que a distância entre as tábuas seja t, ao arremessarmos uma agulha de comprimento l < t no chão. Qual é a probabilidade de que ela atravesse uma tábua"

A orientação da agulha é descrita pelas coordenadas cartesianas de seu centro e o ângulo em que forma com o seu eixo vertical. A coordenada vertical, y não irá influenciar a movimentação da agulha então iremos considerar o problema como sendo unidirecional. Podemos definir então que uma agulha arremessada ao acaso só irá suprir nossas condições se sua coordenada x estiver no intervalo

```math
(0\leq x\leq l)
```
Podemos considerar que a agulha apresenta simetria rotacional e considerar que seu angulo precisa estar no intervalo

```math
(0\leq \theta \leq \pi )
```

A agulha irá intersectar uma linha apenas se parte dela intersectar x=0 ou x=l então podemos considerar a projeção da agulha no eixo x e verificar se este valor, somado ou subtraido com a coordenada x do centro de agulha intersecta as tábuas

```math
x + \frac{l}{2}\sin \theta \geq l \, \, \, \, \, \, ou\, \, \, \, \, \, x - \frac{l}{2}\sin \theta \geq 0
```
Utilizando esta expressão, podemos obter um gráfico com a área compreendida pelas desigualdades


As variáveis pseudorrandômicas são então avaliadas utilizando uma função densidade de probabilidade, essa função é então normalizada de forma que x assuma um valor entre o intervalo x e x + dx, consideramos que exista a possibilidade da variável pertencer ao intervalo de uma reta entre $(-\infty,x]$, assim temos um função de distribuição acumulada, denotada por Fx

```math
F_{x}(x) = P(X\leq x) =\int_{-\infty }^{x}f(x)u\, du
```

A partir desta definição, sorteamos as variáveis aleatórias a partir das diversas distribuições de um função densidade de probabilidade e plotamos os resultados obtidos.

