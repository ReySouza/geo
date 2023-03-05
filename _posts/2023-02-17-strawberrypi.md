---
title: Como podemos utilizar o método de Monte Carlo para determinar o valor de Pi
published: 2023-02-01
excerpt: "Comendo torta em um cassino italiano"
permalink: /posts/2023/02/strawberrypi/ 
---

# Problema da agulha de Buffon

"Suponha que o piso de uma casa seja feito de tábuas de madeira paralelas, cada uma com o mesmo comprimento vertical e horizontal. Você então deixa cair uma agulha no chão, qual é a probabilidade de que esta agulha caia atravessando o vão entre duas tábuas ?"

Este problema foi elaborado por George-Louis Leclerc em seu "Essai d'arithmétique morale" como a fundação da geometria estatística. A primeira vista, ele pode parecer bem intuitivo porém, sua demonstração matemática nos dá uma pequena janela para uma propriedade muito interessante que nos levará ao valor de pi.

Vamos começar a demonstração do problema colocando ele em termos matemáticos. Nós temos um chão feito de tábuas de madeira, a grossura entre as tábuas é dada por D, vamos considerar que o vão entre as tábuas é dada por um segmento de reta e por fim, vamos considerar que a agulha possui comprimento L < D e um angulo dado por θ.

![passo1](https://raw.githubusercontent.com/ReySouza/geo/master/1.png)

# Demonstração Analitica

Quando consideramos a posição da agulha em nosso problema, só precisamos nos concentrar em 3 variáveis principais, a posição do centro da agulha no eixo x, o ângulo que forma em relação a tábua e seu comprimento, então suas variáveis de estado neste momento serão L(x,θ). 

Para simplificar o problema, iremos considerar que a agulha precisa apenas atravessar uma tábua, o piso é inteiramente simétrico então sabemos que a probabilidade será a mesma, independente de quantas tábuas considerarmos, neste caso, a posição do centro da agulha será dada por.

$$0\leq x\leq D$$

A primeira vista poderiamos considerar que o ângulo da agulha precisaria ser determinado até 2π mas, considerando que a agulha também é simétrica, consideramos que seu ângulo é dado por

$$0\leq \theta \leq \pi $$

Precisamos apenas que a ponta da agulha atravesse o vão entre as tábuas para contar, então, respeitando as condições impostas acima, a distância que a ponta da agulha está de seu centro considerando um ângulo qualquer é dado por.

![passo1](https://raw.githubusercontent.com/ReySouza/geo/master/2.png)

$$\sin \theta  = \frac{\phi }{\frac{L}{2}}$$

$$\phi =\frac{L\sin \theta }{2}$$

Dessa forma, as condições para nosso experimento são tais que.

$$(x,\phi  )\in \mathbb{R}^{2}|x+ \phi> D, x-\phi < 0$$

A área total de nosso universo, ou seja, a soma das probabilidades de todas as possíveis configurações da agulha é dada pela integral dupla delimitada pelas variáveis de estado.

$$\int_{0}^{\pi}\int_{0}^{D}dxd\theta  =D\pi$$

Podemos definir de forma intuitiva que a agulha só irá cruzar uma tábua quando a soma do valor da sua coordenada x e do seu valor de φ for maior que D pois isso implica que a ponta da agulha conseguiu cruzar a tábua. Por outro lado, podemos também afirmar que outra solução seria se a subtração do valor da coordenada x da agulha pelo valor de φ for menor que D, temos que então X + φ > D ou X - φ < D. 

$$\int_{0}^{\pi }\left ( \phi  \right )d\theta =\int_{0}^{\pi }\left ( \frac{L\sin \theta }{2} \right )d\theta =L$$

Pelo efeito de simetria, sabemos que ambas as probabilidades serão iguais então, podemos finalmente calcular a probabilidade de que a agulha cruze o vão entre as tábuas de madeira.

$$P(x) = \frac{2L}{D\pi }$$

Um aspecto interessante desta solução é que se considerassemos que a agulha é exatamente metade do comprimento das tábuas, a probabilidade seria o inverso de pi

$$P(x) = \frac{2}{\pi }\frac{\frac{D}{2}}{D}=\frac{1}{\pi }$$


# Achando Pi

Podemos rearrangar a expressão encontrada para isolar π

$$\pi =\frac{2L}{DP}$$

Se considerarmos que a probabilidade da agulha atravessar a tábua é simplesmente a divisão da quantidade de agulhas que atravessaram a tábua  (m), dividido pela quantidade total de agulhas (n), temos uma forma bem mais intuitiva de atingir o resultado, se substituirmos isto em nossa expressão, podemos obter uma aproximação experimental para o valor de π

$$\pi =\frac{2L}{D\frac{m}{n}}=\frac{2Ln}{Dm}$$

<img src="https://user-images.githubusercontent.com/122836752/216226732-fcee196b-850b-43aa-980d-d363841ce827.jpg" width="50%" height="50%" style="float:right; margin-left: 10px;">

Como forma de demonstrar, eu coletei 30 palitos de fosforo, cada um tinha cerca de 4cm de comprimento, eu então derrubei eles em uma folha de papel com linhas a cada 6cm e contei a quantidade de palitos que atravessavam as linhas, totalizando 13, então, colocando na expressão acima

$$\frac{2\times 4\times 30}{6\times 13} \approx 3.07$$

Encontramos uma aproximação suficiente para pi, é claro que podemos atingir valores ainda mais precisos e eventualmente conseguir algumas aproximações famosas como 22/7 ou 355/113, mas para isto, precisariamos de uma quantidade absurda de sorteios, já não conseguiremos prosseguir experimentalmente então podemos utilizar o algoritmo do método de monte carlo e continuar pelo computador.

# Solucão usando Monte Carlo

Abrindo o terminal Python podemos iniciar nosso trabalho importando algumas bibliotecas importantes, para este projeto, iremos precisar de 4, Matplotlib.pyplot, Random, Math e Numpy

```
import matplotlib.pyplot as plt
import random
import math
import numpy as np
```
Precisamos definir as variáveis de estado de nossa agulha junto com a quantidade de agulhas que serão arremessadas, para isto, iremos definir um objeto de classe int chamado AGULHAS que irá conter o número de agulhas que serão arremessadas. Após isso, criaremos um objeto de class DefineNeddle, este objeto conterá as variáveis de estado da agulha como a suas coordenadas x e y, seu ângulo θ e o seu valor de L, os valores foram definidos como None para que um loop de if ocorra e os valores sejam definidos de forma aleatória.

```
AGULHAS = 0

class DefineNeedle:
    def __init__(self, x=None, y=None, theta=None, length=0.5):
        if x is None:
            x = random.uniform(0, 1)
        if y is None:
            y = random.uniform(0, 1)
        if theta is None:
            theta = random.uniform(0, math.pi)
```
definiremos alguns atributos a partir do numpy como self.needle_coordinates que irá representar as coordenadas do centro da agulha, o self.complex_representation representa a agulha como o número complexo.

$$\frac{L}{2}\cos \theta +\frac{L}{2}\sin \theta i$$

E por ultimo self.end_points é um atributo que representa as coordenadas da ponta da agulha, ela é calculada a partir das coordenadas do centro da agulha e o valor positivo ou negativo do self.complex_representation

```
          self.needle_coordinates = np.array([x, y])
        self.complex_representation = np.array(
            [length/2 * math.cos(theta), length/2*math.sin(theta)])
        self.end_points = np.array([np.add(self.needle_coordinates, -1*np.array(
            self.complex_representation)), np.add(self.needle_coordinates, self.complex_representation)])
```
Utilizamos o método abaixo para checkar se a coordenada y da agulha intersecta com alguma das tábuas que neste caso estarão horizontais

```
 def intersects_with_y(self, y):
        return self.end_points[0][1] < y and self.end_points[1][1] > y
```
Enfim iniciamos outra classe chamada BuffonSimulation que irá conter as informações básicas da nossa simulação, iniciaremos com o atributo self.boards em 2 o que significa que a simulação começara apenas com dois encontros entre tábuas, definimos o número de interseções como sendo 0 no ínicio do experimento e o número de agulhas vázio.

```
class BuffonSimulation:
    def __init__(self):
        self.floor = []
        self.boards = 2
        self.list_of_needle_objects = []
        self.number_of_intersections = 0

        fig = plt.figure(figsize=(10, 10))
        self.buffon = plt.subplot()
        self.results_text = fig.text(
            0, 0, self.estimate_pi(), size=15)
        self.buffon.set_xlim(-0.1, 1.1)
        self.buffon.set_ylim(-0.1, 1.1)

    def plot_floor_boards(self):
        for j in range(self.boards):
            self.floor.append(0+j)
            self.buffon.hlines(
                y=self.floor[j], xmin=0, xmax=1, color='black', linestyle='--', linewidth=2.0)

    def toss_needles(self):
        needle_object = DefineNeedle()
        self.list_of_needle_objects.append(needle_object)
        x_coordinates = [needle_object.end_points[0]
                         [0], needle_object.end_points[1][0]]
        y_coordinates = [needle_object.end_points[0]
                         [1], needle_object.end_points[1][1]]

        for board in range(self.boards):
            if needle_object.intersects_with_y(self.floor[board]):
                self.number_of_intersections += 1
                self.buffon.plot(x_coordinates, y_coordinates,
                                 color='green', linewidth=1)
                return
        self.buffon.plot(x_coordinates, y_coordinates,
                         color='red', linewidth=1)
```
Encerramos nosso código definindo a função para estimar o valor de pi e com algumas outras variáveis da simulação

```
    def plot_needles(self):
        for needle in range(AGULHAS):
            self.toss_needles()
            self.results_text.set_text(self.estimate_pi(needle+1))
            if (needle+1) % 200 == 0:
                plt.pause(1/200)
        plt.title("Estimando Pi com probabilidade")

    def plot(self):
        self.plot_floor_boards()
        self.plot_needles()
        plt.show()

simulation = BuffonSimulation()
simulation.plot()
print(type(AGULHAS))

```
Vamos iniciar a primeira simulação com 50 agulhas com comprimento de 0.5 sendo arremessadas em uma mesa contendo 3 tábuas.

No primeiro lançamento das 50 agulhas, 15 intersectaram o cruzamento das tábuas, isso nos fornece uma aproximação de Pi igual a 3.333333, eu farei mais 9 lançamentos nessas condições e então irei comparar o resultados pro valor de pi

![50-0.5-2](https://raw.githubusercontent.com/ReySouza/geo/master/50-0.5-2.PNG)

```
Lançamento 1 - 3.333333 (15 interseções)
Lançamento 2 - 2.7777777 (18 interseções)
Lançamento 3 - 4.54545454 (11 interseções)
Lançamento 4 - 2 (25 interseções)
Lançamento 5 - 2.5 (20 interseções)
Lançamento 6 - 2.6315789 (19 interseções)
Lançamento 7 - 3.5714285 (14 interseções)
Lançamento 8 - 2.5 (20 interseções)
Lançamento 9 - 4.166666 (12 interseções)
Lançamento 10 - 5.555555 (9 interseções)
```
A melhor aproximação veio com os lançamentos 1 e 7 que acertaram o primeiro digito de Pi, o lançamento 1 foi o que mais se aproximou do resultado. Em geral, a média foi 3.358168 e o desvio padrão foi de 1.111571

Vamos aumentar a quantidade de agulhar para 1000, mantendo o mesmo comprimento e a mesma quantidade de tábuas

![1000-0.5-2](https://raw.githubusercontent.com/ReySouza/geo/master/1000-0.5-2.PNG)

```
Lançamento 1 - 3.0769230 (325 interseções)
Lançamento 2 - 3.2679738 (306 interseções)
Lançamento 3 - 3.1446540 (318 interseções)
Lançamento 4 - 3.2154340 (311 interseções)
Lançamento 5 - 3.2154340 (311 interseções)
Lançamento 6 - 3.1446540 (318 interseções)
Lançamento 7 - 3.1645569 (316 interseções)
Lançamento 8 - 2.9850746 (335 interseções)
Lançamento 9 - 3.1847133 (314 interseções)
Lançamento 10 - 2.832861 (353 interseções)
```
A melhor aproximação veio com 318 interseções onde obtivemos uma aproximação de pi até a segunda casa decimal, o lançamento 3 e 6 obtiveram esse resultado, a média desse lançamento foi de 3.123228 e o desvio padrão foi de 0.1290587. Vamos encerrar o experimento com 10000 agulhas e as mesmas condições de comprimento e numero de tábuas.

![10000-0.5-2](https://raw.githubusercontent.com/ReySouza/geo/master/10000-0.5-2.PNG)

```
Lançamento 1 - 3.151591 (3173 interseções)
Lançamento 2 - 3.148614 (3176 interseções)
Lançamento 3 - 3.175611 (3140 interseções)
Lançamento 4 - 3.066544 (3261 interseções)
Lançamento 5 - 3.165558 (3159 interseções)
Lançamento 6 - 3.209242 (3116 interseções)
Lançamento 7 - 3.167564 (3157 interseções)
Lançamento 8 - 3.189792 (3135 interseções)
Lançamento 9 - 3.142677 (3182 interseções)
Lançamento 10 - 3.15357 (3171 interseções)
```

[Agora é sua vez](https://reysouza.github.io/geo//posts/2023/03/strawberrysim/)
