---
title: Como podemos utilizar o método de Monte Carlo para determinar o valor de Pi
published: 2023-02-01
excerpt: "Como os estatísticos irão salvar a matemática"
permalink: /posts/2020/08/strawberrypi/ 
---

# Problema da agulha de Buffon

"Suponha que o piso onde você está, seja feito de tábuas de madeira paralelas, cada uma com o mesmo comprimento vertical e horizontal. Você então deixa cair uma agulha no chão, qual é a probabilidade de que esta agulha caia atravessando o vão entre duas tábuas ?"

Este problema foi elaborado por George-Louis Leclerc em seu "Essai d'arithmétique morale" como a fundação da geometria estatística. A primeira vista, ele pode parecer bem intuitivo porém, sua demonstração matemática nos dá uma pequena janela para uma propriedade muito interessante que nos levará ao valor de pi.

Vamos começar a demonstração do problema colocando ele em termos matemáticos. Nós temos um chão feito de tábuas de madeira, a grossura entre as tábuas é dada por D, vamos considerar que o vão entre as tábuas é dada por um segmento de reta e por fim, vamos considerar que a agulha possui comprimento L < D e um angulo dado por θ.

# Demonstração

Quando consideramos a posição da agulha em nosso problema, só precisamos nos concentrar em 3 variáveis principais, a posição do centro da agulha no eixo x, o ângulo que forma em relação a tábua e seu comprimento, então suas variáveis de estado neste momento serão L(x,θ). 

Para simplificar o problema, iremos considerar que a agulha precisa apenas atravessar uma tábua, o piso é inteiramente simétrico então sabemos que a probabilidade será a mesma, independente de quantas tábuas considerarmos, neste caso, a posição do centro da agulha será dada por.

$$0\leq x\leq D$$

A primeira vista poderiamos considerar que o ângulo da agulha precisaria ser determinado até 2π mas, considerando que a agulha também é simétrica, consideramos que seu ângulo é dado por

$$0\leq \theta \leq \pi $$

Precisamos apenas que a ponta da agulha toque o vão entre as tábuas para contar, então, respeitando as condições impostas acima, a distância que a ponta da agulha está de seu centro considerando um ângulo qualquer é dado por

$$\sin \theta  = \frac{\phi }{\frac{L}{2}}$$

$$\phi =\frac{L\sin \theta }{2}$$

Podemos atualizar nossas variáveis de estado para L(x,φ)
