---
title: Como podemos utilizar o método de Monte Carlo para determinar o valor de Pi
published: 2023-02-01
excerpt: "Comendo torta em um cassino italiano"
permalink: /posts/2020/08/strawberrypi/ 
---

# Problema da agulha de Buffon

"Suponha que o piso seja feito de tábuas de madeira paralelas, cada uma com o mesmo comprimento vertical e horizontal. Você então deixa cair uma agulha no chão, qual é a probabilidade de que esta agulha caia atravessando o vão entre duas tábuas ?"

Este problema foi elaborado por George-Louis Leclerc em seu "Essai d'arithmétique morale" como a fundação da geometria estatística. A primeira vista, ele pode parecer bem intuitivo porém, sua demonstração matemática nos dá uma pequena janela para uma propriedade muito interessante que nos levará ao valor de pi.

Vamos começar a demonstração do problema colocando ele em termos matemáticos. Nós temos um chão feito de tábuas de madeira, a grossura entre as tábuas é dada por D, vamos considerar que o vão entre as tábuas é dada por um segmento de reta e por fim, vamos considerar que a agulha possui comprimento L < D e um angulo dado por θ.

# Demonstração Analitica

Quando consideramos a posição da agulha em nosso problema, só precisamos nos concentrar em 3 variáveis principais, a posição do centro da agulha no eixo x, o ângulo que forma em relação a tábua e seu comprimento, então suas variáveis de estado neste momento serão L(x,θ). 

Para simplificar o problema, iremos considerar que a agulha precisa apenas atravessar uma tábua, o piso é inteiramente simétrico então sabemos que a probabilidade será a mesma, independente de quantas tábuas considerarmos, neste caso, a posição do centro da agulha será dada por.

$$0\leq x\leq D$$

A primeira vista poderiamos considerar que o ângulo da agulha precisaria ser determinado até 2π mas, considerando que a agulha também é simétrica, consideramos que seu ângulo é dado por

$$0\leq \theta \leq \pi $$

Precisamos apenas que a ponta da agulha atravesse o vão entre as tábuas para contar, então, respeitando as condições impostas acima, a distância que a ponta da agulha está de seu centro considerando um ângulo qualquer é dado por

$$\sin \theta  = \frac{\phi }{\frac{L}{2}}$$

$$\phi =\frac{L\sin \theta }{2}$$

Dessa forma, as condições para nosso experimento são tais que.

$$(x,\phi  )\in \mathbb{R}^{2}|x+ \phi> D, x-\phi < 0$$

Podemos plotar essa expressão de forma que as diferentes possibilidades sejam representadas com cores diferentes, a partir deste gráfico, podemos determinar que a probabilidade de algum evento, ou configuração específica da agulha ocorrer, sua probabilidade será dada pela divisão da área da região específica a este evento pela área do universo.

A área total de nosso universo, ou seja, a soma das probabilidades de todas as possíveis configurações da agulha é dada pela integral dupla delimitada pelas variáveis de estado.

$$\int_{0}^{\pi}\int_{0}^{D}dxd\theta  =D\pi$$

A área do gráfico para que x - φ < 0 é dada por

$$\int_{0}^{\pi }\left ( \phi  \right )d\theta =\int_{0}^{\pi }\left ( \frac{L\sin \theta }{2} \right )d\theta =L$$

Podemos ver intuitivamente pelo gráfico que a probabilidade para x + φ > D será igual a L pelo efeito de simetria, então, podemos finalmente calcular a probabilidade de que a agulha cruze o vão entre as tábuas de madeira.

$$P(x) = \frac{2L}{D\pi }$$

Um aspecto interessante desta solução é que se considerassemos que a agulha é exatamente metade do comprimento das tábuas, a probabilidade seria o inverso de pi

$$P(x) = \frac{2}{\pi }\frac{\frac{D}{2}}{D}=\frac{1}{\pi }$$


# Achando Pi

Podemos rearrangar a expressão encontrada para isolar π

$$\pi =\frac{2L}{DP}$$

Se considerarmos que a probabilidade da agulha atravessar a tábua é simplesmente a divisão da quantidade de agulhas que atravessaram a tábua  (m), dividido pela quantidade total de agulhas (n), temos uma forma bem mais intuitiva de atingir o resultado, se substituirmos isto em nossa expressão, podemos obter uma aproximação experimental para o valor de π

$$\pi =\frac{2L}{D\frac{m}{n}}=\frac{2Ln}{Dm}$$

<img src="https://user-images.githubusercontent.com/122836752/216226732-fcee196b-850b-43aa-980d-d363841ce827.jpg" width="50%" height="50%" style="float:left; margin-right: 10px;">

Como forma de demonstrar, eu coletei 30 palitos de fosforo, cada um tinha cerca de 4cm de comprimento, eu então derrubei eles em uma folha de papel com linhas a cada 6cm e contei a quantidade de palitos que atravessavam as linhas, totalizando 13, então, colocando na expressão acima

$$\frac{2\times 4\times 30}{6\times 13} \approx 3.07$$

Encontramos uma aproximação suficiente para pi, é claro que podemos atingir valores ainda mais precisos e eventualmente conseguir algumas aproximações famosas como 22/7 ou 355/113, mas para isto, precisariamos de uma quantidade absurda de sorteios, já não conseguiremos prosseguir experimentalmente então podemos utilizar o algoritmo do método de monte carlo e continuar pelo computador.

# Solucão usando Monte Carlo
