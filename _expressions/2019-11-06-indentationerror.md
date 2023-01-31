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

O método de Monte Carlo constitui uma série de métodos computacionais utilizados em simulações de larga escala que recorrem a amostragens aleatórias. Podemos resumir o método como uma forma de atingir resultados numéricos para problemas determínisticos, pelo menos em princípio, por meio de variáveis pseudorrandômicas, isto é, que são gerados por um algorítmo computacional a partir de uma seed específica

Este método é particularmente util para fenômenos físicos que são descritos por muitas variáveis e são sujeitos a muitas incertezas experimentais.

As variáveis pseudorrandômicas são então avaliadas utilizando uma função densidade de probabilidade, essa função é definida de forma que

$$F_{x}(x) = P(X\leq x) =\int_{-\infty }^{x}f(x)u\, du

