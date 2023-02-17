---
title: Conclusão do modelo geológico 3D da bacia de Taubaté e aplicação na pesquisa educacional em Geociências
excerpt: A visualização em três dimensões é imprescindível para estudantes e profissionais de Geologia pois facilita o entendimento de corpos rochosos e dos processos que controlam a dinâmica terrestre. Modelos 3D são essenciais em diversas áreas de atuação, como prospecção de minérios e hidrocarbonetos. O projeto da Bacia de Taubaté dará continuidade a projetos anteriores, que desenvolvem modelos físicos de algumas bacias brasileiras. 
collection: expressions
permalink: /expressions/geobacias/ 
---

Este projeto foi desenvolvido com apoio e financiamento do [Serviço de Apoio ao Estudante](https://www.sae.unicamp.br/portal/pt/) e pela [Pró-Reitoria de Pesquisa da Unicamp](https://www.prp.unicamp.br/iniciacao-cientifica/pibic-pibiti/programas/pibic/#:~:text=O%20objetivo%20do%20Programa%20Institucional,da%20Unicamp%2C%20outorgando%20bolsas%20no) a partir do Programa Institucional de Bolsas de Iniciação Cientifica e Tecnológica dentro da modalidade de projeto de Iniciação Cientifica. O projeto é orientado pelo [Prof. Dr. Celso Dal Ré Carneiro](https://ige.unicamp.br/colaborador/celso-dal-re-carneiro) e recebe o suporte tecnológico do [Centro de Tecnologia da Informação Renato Archer](https://www1.cti.gov.br/pt-br).

O projeto busca desenvolver a confecção de modelos tridimensionais da Bacia sedimentar de Taubaté, para isso, são empregados os amblientes Blender, de representação tridimensional e os softwares tradicionais de Sistema de Informação Geográfica como Arcgis e Qgis. A modelagem do relevo fundamenta-se em informações obtidas de arquivos SRTM, processados e trabalhados pelos softwares de SIG para a criação de arquivos TIN que podem então ser lidos pelo ambiente Blender. A produção dos modelos físicos irá ser conduzida junto ao Centro de Tecnologia da Informação Renato Archer que dispõe de equipe habilitada composta por estudantes de pós-graduação e de impressoras 3D que podem gerar os modelos.

Os elementos gerados na impressão permitirão a produção de guias didáticos, tanto para discentes quanto docentes que desejarem introduzir conceitos de geomorfologia, geodésia e geologia em suas aulas.

# Métodos e Procedimentos

A confecção de modelos tridimensionais envolve uma série de etapas com programas diferentes e que pode exigir um poder computacional elevado, eu estarei demonstrando as etapas utilizadas para gerar o modelo tridimensional no ambiente Blender. A primeira etapa é escolher o nosso alvo e delimitar a área que será modelada, para este exercício, eu estarei utilizando a Caldeira de Poços de Caldas. 

Poços de Caldas é um município localizado no sul do estado de Minas Gerais, próximo da divisa com o Estado de São Paulo, possui cerca de 544 km quadrados e fica a uma altitude média de 1300m. A grande fama turistica da cidade provém de suas fontes hidrotermais e águas sulfurosas, que de acordo com mitos locais, podem curar doenças, estas fontes são resquícios de uma antiga caldeira vulcânica datada de pelo menos 80 Ma.

 A caldeira vulcânica de Poços de Caldas compõe um complexo alcalino em formato elíptico que engloba boa parte do município, após um processo de domeamento e muitas fraturas seguindo a quebra do continente Gondwana, seu domo desabou gerando o planalto de Poços de Caldas e o rodeando com as bordas da antiga caldeira que logo se tornaram as serras de Poços de Caldas, que podem atingir altitudes de até 1800m.
 
 Agora que já sabemos um pouco mais sobre a geomorfologia e a geologia de Poços de Caldas, podemos iniciar o trabalho abrindo o Qgis. Iniciaremos o trabalho escolhendo o sistema de Coordenadas do projeto, neste caso escolheremos o EPSG: 31983 ou SIRGAS 2000 / UTM Zona 23S, a partir da extensão QuickMapServices, podemos abrir o google maps e mover a tela para a área onde a caldeira fica localizada

<img src="https://reysouza.github.io/geo/passo1.png/" width="50%" height="50%">

Uma das grandes utilidades do Qgis é a sua natureza Open Source ou Código Aberto, isto permite que a comunidade crie extensões e modificações para o software, estas extensões permitem que o usuário não precise utilizar sites terceiros para baixar arquivos e obter informações. A partir da extensão SRTM-Downloader, podemos instalar arquivos raster com modelos digitais de terreno sem precisar sair do Qgis, esta extensão acessa o servidor direto da earthdata da NASA e fornece imagens atualizadas dos satélites da linha Sentinel desde que você já possua um cadastro no site. Abrindo a extensão, podemos selecionar para instalar os dados raster para a região da caldeira, pelo nível de zoom que a tela está, esperamos que pelo menos 6 arquivos raster sejam gerados.

<img src="https://reysouza.github.io/geo/Passo2.png/" width="50%" height="50%">

Após instalarmos, as imagens devem carregar e aparecer no mapa imediatamente, vemos que a área gerada é bem maior do que a que precisamos que compreende a região da caldeira, só iremos precisar de 2 dessas imagens, o resto podemos deletar ou simplesmente tornar invisivel.

<img src="https://reysouza.github.io/geo/Passo3.png/" width="50%" height="50%">

Precisamos juntar aquelas 2 imagens que restaram em uma só, para isto, podemos ir na barra de ferramentas e selecionar a opção Raster -> Miscelânea -> Mesclar, escolhemos as 2 imagens e mesclamos elas em uma só.

<img src="https://reysouza.github.io/geo/Passo4.png/" width="50%" height="50%">

Você pode preferir cortar a imagem um pouco mais a fim de evitar que outras feições de terreno possam aparecer com mais proeminência do que a caldeira de Poços.

<img src="https://reysouza.github.io/geo/Passo5.png/" width="50%" height="50%">

Após isso, precisamos salvar nosso arquivo, verifique que o formato dele está como GeoTIFF e o modo de saída dele está como Imagem renderizada, é importante mas não é inteiramente essencial que a SRC esteja correta.

<img src="https://reysouza.github.io/geo/Passo6.png/" width="50%" height="50%">

Com o arquivo pronto, podemos abrir o blender, a versão do blender que iremos usar possui uma modificação especial chamada de Blender GIS, se você não tiver o blender pode conseguir por este [link](https://www.blender.org/download/), você pode também conseguir essa extensão pelo [link](https://github.com/domlysz/BlenderGIS). Com tudo pronto e instalado, o botão GIS deve aparecer na barra de ferramentas, simplesmente escolha a opção GIS -> Importar -> Georeferenced Raster (.tif, .jpg, .jp2, .png)

<img src="https://reysouza.github.io/geo/Passo7.png/" width="50%" height="50%">

Escolha seu arquivo GeoTIFF e verifique de selecionar a opção DEM as displacement texture (modelo digital de terreno como textura de deslocamento), se tudo estiver correto, seu modelo deveria ser gerado prontamente.

<img src="https://reysouza.github.io/geo/Passo8.png/" width="50%" height="50%">

Na aba das propriedades dos modificadores, você pode alterar a propriedade do DEM de deslocar a textura do plano onde ele está, é neste local que você irá determinar o nível de exagero vertical para o seu modelo. Inicialmente podemos melhorar a renderização, a qualidade e a porta de visão do modelo de 6,6,3 para 8,8,8, podemos também aumentar o exagero vertical de 255 para 500

<img src="https://reysouza.github.io/geo/Passo9.png/" width="50%" height="50%">

Perceba que a quantidade de vertices do objeto saltou de 4.225 para 66.049, é por isso que é importante ter um poder computacional bom ao desenvolver este tipo de projeto, podemos continuar aumentando o exagero vertical até atingirmos um bom patamar.

<img src="https://reysouza.github.io/geo/Passo10.png/" width="50%" height="50%">

Dessa forma, conseguimos gerar um modelo tridimensional a partir de um arquivo matricial em um mapa.

<img src="https://reysouza.github.io/geo/Passo11.png/" width="50%" height="50%">

[Quer saber mais sobre a Bacia de Taubaté ?](https://reysouza.github.io/geo//posts/2023/02/baciataubate/)
