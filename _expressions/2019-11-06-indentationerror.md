---
title: Simulações de Monte Carlo aplicadas ao Estudo de Raios Cósmicos
excerpt: Análises estatísticas envolvendo as propriedades dos Raios Cósmicos
collection: expressions
permalink: /expressions/montecarlo/ 
---

Este projeto foi desenvolvido com apoio e financiamento do [Serviço de Apoio ao Estudante](https://www.sae.unicamp.br/portal/pt/) como parte do programa de Bolsas de Auxílio Social (BAS). Ele foi desenvolvido pelo [Departamento de Raios Cósmicos e Cronologia](https://sites.ifi.unicamp.br/drcc/) do [Instituto de Física "Gleb Wataghin"](https://portal.ifi.unicamp.br) e foi ministrado pela [Profa. Dr. Carola Dobrigkeit Chinellato](http://lattes.cnpq.br/0301569503177054). 
Os dados utilizados para o projeto estão disponiveis ao público pelo [Observatório Pierre Auger](https://www.auger.org) na Argentina

Este projeto busca o aprimoramento técnico na área das ciências exatas e da natureza, proporcionando uma introdução ao método de Monte Carlo e a simulação computacional de fenômenos físicos utilizando os Raios Cósmicos como um plano de fundo.

Um relatório produzido para este projeto estará disponível no [link](https://reysouza.github.io/geo/montecarlo.pdf) a seguir

# Raios Cósmicos

Os Raios Cósmicos são partículas elementares produzidas em eventos astronômicos massivos que podem atingir energias na ordem de $$10^{21}$$ eV, em sua grande maioria, são núcleos atômicos de elementos abundantes no universo, que são então acelerados a velocidades próximas da luz para vagarem pelo espaço. Ao acertar a atmosfera terrestre e interagir com as moléculas de gás, os raios cósmicos produzem chuveiros atmosféricos extensos contendo diversas partículas secundárias com tempo de meia-vida mais curto como pions, muons e neutrinos.

A descoberta dos Raios cósmicos foi um trabalho coletivo entre diversos cientistas ao longo de mais de 40 anos para responder uma pergunta que perseguia os físicos desde a descoberta da radiação em 1903 por Marie Curie (1867-1934), seu marido, Pierre Curie (1859-1906) e Henri Becquerel (1852). Qual era a origem das partículas radioativas responsáveis pela ionização do ar, uma hipotése inicial era de que a ionização do ar ocorria por meio da emissão partículas ionizantes por elementos radioativos encontrados no solo, Urânio em especial aparecia frequentemente ligado a rochas sedimentares e argilominerais através do íon Uranila.

Theodor Wulf (1868-1946) desenvolveu um eletroscópio capaz de detectar a quantidade de partículas radioativas estavam presentes na atmosfera, ele acreditava que se as fontes naturais de radiação no solo fossem as responsáveis pela ionização, então a medida que ele subisse, elas deveriam cair drasticamente. No chão, ele obteu uma leitura de 6 íons / cm cúbico e então subiu ao topo da torre eiffel a 330m, lá ele obteu uma leitura de apenas 3.5 íons / cm cúbico, uma queda muito menor do que esperava. Em 1911, Domenico Pacini (1878-1934), outro físico interessado em resolver o problema, desenvolveu o mesmo experimento em condições diferentes, ele obteve leituras no topo de montanhas e no fundo do oceano e percebeu que a ionização diminuia drasticamente no oceano.

Em 1912, Victor Hess (1883-1964) desenvolveu o mesmo experimento só que um grau ainda maior de meticulosidade, ele fez viagens com balões, chegando até 5300 m de altitude, lá ele percebeu que a ionização diminuia até uma altitude de 1km onde ela então aumentava novamente, ele repetiu estas viagens diversas vezes, de dia e de noite e até mesmo durante um eclipse solar para confirmar que a origem da radiação era extraterrestre.

A confirmação da natureza dos raio cósmicos veio somente com Robert Andrews Millikan (1868-1953) que cunhou o termo "Raios Cósmicos" e determinou que a composição destas poartículas deveria ser de 90% prótons, 9% partículas alfa e cerca de 1% outras partículas como elétrons e elementos mais pesados. Pierre Victor Auger (1899-1993) desenvolveu um trabalho concomitante onde ele conseguiu determinar que eventos de raios cósmicos podem estar conectados, partículas primárias poderiam interagir com os gases na atmosfera e gerar uma cascata de outros efeitos em um "Chuveiro Atmosférico Extenso"

# Utilidades para a geocronologia

Em 1939, Serge Korff (1906 - 1989) determinou que raios cósmicos primários poderiam gerar nêutrons na atmosfera, esses nêutrons então poderiam interagir com o nitrogênio na atmosfera gerando a seguinte equação.

$$_{0}^{1}\textrm{n} + _{7}^{14}\textrm{N} \rightarrow _{6}^{14}\textrm{C} +_{1}^{1}\textrm{p}$$
 
A equação abaixo determina que um nêutron pode reagir com o nitrogênio gasoso e gerar um próton e Carbono-14, um isótopo de carbono com tempo de meia vida de 5730 40 anos. Um dos nêutrons desse isótopo pode decair e se transformar em um próton, assim transformando o carbono em nitrogênio e liberando uma partícula  e um elétron antineutrino.

$$_{}^{14}\textrm{C}\rightarrow _{}^{14}\textrm{N}+_{}^{0}\textrm{e}+\nu _{e}+156keV$$

Willard Libby (1908 - 1980) percebeu que o carbono-14 emitido sofre todas as reações que o carbono normalmente sofreria, com mudanças mínimas na forma em que interage com a natureza, ele pode ser transformado em dióxido de carbono (CO2) e participar do ciclo do carbono, ele é então fixado por bactérias no solo e pelas plantas no processo de fotossíntese, os animais adquirem esse carbono ao comer essas plantas ou respirando ele diretamente. Quando os seres vivos morrem, eles deixam de adquirir esse carbono-14 enquanto aquele já existente em seus organismos passa a sofrer o processo de decaimento radioativo naturalmente. Isso garante que todo organismo possui uma espécie de relógio nuclear natural, e que pode ser medido a partir da quantidade de carbono-14 presente em seu organismo, esse método de datação se tornou fundamental para a área da paleontologia e a geocronologia pois permitiu que organismos que viveram entre 500 e 50.000 anos atrás pudessem ser datados com alto grau de precisão.

O processo de datação por Carbono-14 é muito útil para determinação da idade geológica de animais e plantas que já morreram mas, é um processo limitado à ambientes relativamente recentes e cobertos com vegetação, existem diversos outros elementos gerados por raios cósmicos que podem ser mais práticos para outros tipos de datação, esses elementos são chamados de Nuclídeos Cosmogênicos e sua datação fornece informações valiosas quanto ao transporte e deposição de rochas sedimentares ao estimar uma idade para a exposição dessas rochas. São geralmente formados pelo processo de espalação de raios cósmicos a partir da colisão de nêutrons diretamente com a estrutura cristalina da rocha, os elementos formados podem ficar presos na estrutura cristalina e gerar pequenos agregados que podem ser observados por espectrometria. 

Rochas frequentemente usadas no processo de datação são granitos e arenitos pois eles apresentam grande quantidade de quartzo cuja estrutura cristalina é constituída quase exclusivamente de sílica (SiO2) onde o oxigênio reage com o nêutron cósmico através da reação. 

$$_{}^{1}\textrm{p}+_{}^{16}\textrm{O}\rightarrow 2_{}^{1}\textrm{p}+_{}^{1}\textrm{n}+_{}^{4}\textrm{He}+_{}^{10}\textrm{Be}$$
 
## Método de Monte Carlo

O método de Monte Carlo constitui uma série de processos matemáticos computacionais utilizados em simulações de larga escala que recorrem a amostragens aleatórias. Podemos resumir o método como uma forma de atingir resultados numéricos para problemas que são, pelo menos em princípio, determínisticos, por meio de variáveis pseudorrandômicas, isto é, que são gerados por um algorítmo computacional a partir de uma seed específica

Este método é particularmente util para fenômenos físicos que são descritos por muitas variáveis e são sujeitos a muitas incertezas experimentais como é o caso daqueles encontrados nas ciências da natureza, incluindo a geociências

O procedimento utilizado no projeto envolve a determinação de funções densidade de probabilidade definida por uma variável aleatória x tal que

$$f(x)\geq 0,\forall x\in \mathbb{R}$$
$$\int_{-\infty }^{\infty }f(x)dx=1$$

Assumindo que a soma de todas as probabilidades seja igual a um, podemos normalizar esta f.d.p para que possamos sortear um valor e utilizar o método de Monte Carlo.

$$F_{x}=P(X\leq x) = \int_{-\infty }^{x}f(x)udu$$

[Quer saber mais sobre o método de Monte Carlo ? ](https://reysouza.github.io/geo//posts/2020/08/strawberrypi/)
