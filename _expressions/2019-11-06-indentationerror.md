---
title: Simulações de Monte Carlo aplicadas ao Estudo de Raios Cósmicos
excerpt: Análises estatísticas envolvendo as propriedades dos Raios Cósmicos
collection: expressions
permalink: /expressions/montecarlo/ 
---

Este projeto foi desenvolvido com apoio e financiamento do [Serviço de Apoio ao Estudante](https://www.sae.unicamp.br/portal/pt/) como parte do programa de Bolsas de Auxílio Social (BAS). Ele foi desenvolvido pelo [Departamento de Raios Cósmicos e Cronologia](https://sites.ifi.unicamp.br/drcc/) do [Instituto de Física "Gleb Wataghin"](https://portal.ifi.unicamp.br) e foi ministrado pela [Profa. Dr. Carola Dobrigkeit Chinellato](http://lattes.cnpq.br/0301569503177054). 
Os dados utilizados para o projeto estão disponiveis ao público pelo [Observatório Pierre Auger](https://www.auger.org) na Argentina

Este projeto busca o aprimoramento técnico na área das ciências exatas e da natureza, ele visa proporcionar uma introdução ao método de Monte Carlo e a simulação computacional de fenômenos físicos utilizando os Raios Cósmicos como um plano de fundo.

# Raios Cósmicos

Os Raios Cósmicos são partículas elementares produzidas em eventos astronômicos massivos que podem atingir energias na ordem de $$10^{21}$$ eV, em sua grande maioria, são núcleos atômicos de elementos abundantes no universo com sua camada eletrônica removida, e que são então acelerados a velocidades próximas da luz para vagarem pelo espaço. Ao acertar a atmosfera terrestre e interagir com as moléculas de gás, os raios cósmicos produzem chuveiros atmosféricos extensos contendo diversas partículas secundárias com tempo de meia-vida mais curto como pions, muons e neutrinos.

A descoberta dos Raios cósmicos foi um trabalho coletivo entre diversos cientistas ao longo de mais de 40 anos como Theodor Wulf (1868-1946), Victor Hess (1883-1964), Robert Andrews Millikan (1868-1953) e por fim Pierre Auger (1899-1993). Este homens inicialmente estavam interessados em resolver um problema que confundia os físicos desde a descoberta da radioatividade por Marie Curie (1867-1934) em 1903, que era a presença de partículas ionizantes na atmosfera.

As viagens de balão de Hess foram essenciais na determinação da origem destas partículas. Hess chegou até 5.3km e então percebeu que a radiação ionizante ficava extremamente baixa até próximo de 1km onde voltava a aumentar, ele repetiu estas viagens diversas vezes, de dia e de noite e até mesmo durante um eclipse solar para confirmar que a origem da radiação era extraterrestre.

Em 1939, Serge Korff (1906-1989) determinou que os raios cósmicos poderiam gerar neutrons na atmosfera, estes nêutrons poderiam interagir com o gás nitrogênio a partir da reação. O produto desta reação é um isótopo radioativo do carbono com 6 protons e 8 neutrons, o carbono-14

 $$_{}^{1}\textrm{n} + _{}^{14}\textrm{N} \rightarrow _{}^{14}\textrm{C} +_{}^{1}\textrm{p}$$
 
O carbono-14 pode formar gás carbônico normalmente, desta forma, ele pode participar do ciclo do carbono e estar presente no organismo de plantas e animais que o absorverem. Desta forma, a produção cósmica de carbono-14 é muito util dentro da geocronologia do quaternário pois permite que seres vivos que tenha vivido a pelo menos 50.000 podem ter sua idade determinada com alto grau de precisão

## Método de Monte Carlo

O método de Monte Carlo constitui uma série de métodos computacionais utilizados em simulações de larga escala que recorrem a amostragens aleatórias. Podemos resumir o método como uma forma de atingir resultados numéricos para problemas que são, pelo menos em princípio, determínisticos, por meio de variáveis pseudorrandômicas, isto é, que são gerados por um algorítmo computacional a partir de uma seed específica

Este método é particularmente util para fenômenos físicos que são descritos por muitas variáveis e são sujeitos a muitas incertezas experimentais como é o caso daqueles encontrados nas ciências da natureza, incluindo a geociências
