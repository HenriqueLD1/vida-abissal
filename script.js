let chegouNoFim = false;
console.log("THREE:", typeof THREE);
const ocean = document.getElementById("ocean");
const depthUI = document.getElementById("depth");
const sidebar = document.getElementById("sidebar");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const close = document.getElementById("close");
const SCALE = 9;
const zones = [
  { name: "Zona de Luz Solar", depth: 0 },
  { name: "Zona do Crepúsculo", depth: 200 },
  { name: "Zona da Meia-Noite", depth: 1000 },
  { name: "Zona Abissal", depth: 4000 },
  { name: "Zona Hadal", depth: 6000 }
];
const elements = [
{ file: "coral-de-fogo.jpg", depth: 10, zone: "Zona de Luz Solar", desc: "o coral de fogo é um hidrocoral urticante pertencente à classe hydrozoa, encontrado principalmente em águas tropicais e subtropicais, incluindo o litoral brasileiro. apesar de ser chamado de coral, ele não é um coral verdadeiro, mas sim um organismo colonial formado por pequenos pólipos interligados. sua aparência pode variar entre formas ramificadas, placas ou estruturas semelhantes a rochas. curiosidade: o nome 'coral de fogo' vem da sensação intensa de queimação que ele provoca ao contato com a pele, causada por células especializadas chamadas nematocistos, que injetam toxinas. esse contato pode causar desde irritações leves até lesões mais graves, com dor persistente e até cicatrizes em casos mais extremos." },
{ file: "estrela-do-mar.jpg", depth: 10, zone: "Zona de Luz Solar", desc: "a estrela do mar é um equinodermo com simetria radial, geralmente possuindo cinco braços que partem de um disco central, embora algumas espécies apresentem mais braços. seu corpo é coberto por uma pele áspera com pequenas estruturas calcárias. ela se locomove através de pés ambulacrais que funcionam por pressão hidráulica. curiosidade: uma das características mais impressionantes é sua capacidade de regeneração, podendo reconstruir braços perdidos e, em algumas espécies, até gerar um novo indivíduo a partir de um único braço. além disso, retirar uma estrela do mar da água pode ser fatal, pois ela realiza trocas gasosas através da superfície do corpo e pode sofrer danos irreversíveis fora do ambiente aquático." },
{ file: "dragao-azul.jpg", depth: 0, zone: "Zona de Luz Solar", desc: "o dragão azul é uma pequena lesma marinha flutuante, conhecida cientificamente como glaucus atlanticus, encontrada em oceanos tropicais e subtropicais. possui coloração azul intensa e um corpo adaptado para flutuar na superfície do mar, utilizando uma bolsa de gás. curiosidade: ele se alimenta de organismos altamente venenosos, como a caravela-portuguesa, e é capaz de armazenar e reutilizar esse veneno em suas próprias células, tornando-se ainda mais perigoso do que suas presas originais." },
{ file: "camarao-pistola.jpg", depth: 20, zone: "Zona de Luz Solar", desc: "o camarão pistola é um pequeno crustáceo que vive em regiões costeiras e recifes de coral, conhecido por sua habilidade única de produzir um dos sons mais altos do reino animal. ele possui uma pinça modificada que funciona como uma arma extremamente eficiente. curiosidade: ao fechar sua pinça em altíssima velocidade, ele cria uma bolha de cavitação que implode gerando uma onda de choque capaz de atordoar ou matar presas instantaneamente, além de produzir um som superior a 200 decibéis e temperaturas comparáveis à superfície do sol por frações de segundo." },
{ file: "polvo-de-recife.jpg", depth: 20, zone: "Zona de Luz Solar", desc: "o polvo de recife é um cefalópode altamente inteligente que habita áreas rasas de recifes de coral, sendo conhecido por sua incrível capacidade de adaptação e aprendizado. possui corpo mole, oito tentáculos com ventosas e um sistema nervoso altamente desenvolvido. curiosidade: ele possui cerca de 500 milhões de neurônios distribuídos entre o cérebro central e os tentáculos, permitindo que cada braço atue de forma semi-independente. além disso, consegue mudar instantaneamente a cor e textura da pele para se camuflar ou se comunicar." },
{ file: "peixe-palhaco.jpg", depth: 30, zone: "Zona de Luz Solar", desc: "o peixe-palhaço é um pequeno peixe tropical famoso por sua coloração vibrante e pela relação simbiótica com anêmonas marinhas. ele vive protegido entre os tentáculos venenosos dessas anêmonas, dos quais é imune devido a uma camada de muco especial. curiosidade: todos os peixes-palhaço nascem machos, e o indivíduo dominante do grupo pode se transformar em fêmea caso necessário, assumindo o papel reprodutivo principal." },
{ file: "cavalo-marinho.jpg", depth: 20, zone: "Zona de Luz Solar", desc: "o cavalo-marinho é um peixe ósseo com corpo coberto por placas rígidas e postura vertical característica. ele vive em águas rasas e utiliza sua cauda preênsil para se fixar em plantas marinhas. curiosidade: diferentemente da maioria dos animais, é o macho que engravida, recebendo os ovos da fêmea em uma bolsa incubadora onde os filhotes se desenvolvem até o nascimento." },
{ file: "baiacu.jpg", depth: 40, zone: "Zona de Luz Solar", desc: "o baiacu é um peixe conhecido por sua capacidade de inflar o corpo ao ingerir água ou ar, aumentando drasticamente de tamanho como mecanismo de defesa. possui corpo geralmente arredondado e espinhos que ficam mais evidentes quando inflado. curiosidade: contém uma das toxinas mais potentes do mundo, a tetrodotoxina, que pode causar paralisia e morte em humanos, sendo milhares de vezes mais potente que o cianeto." },
{ file: "cirurgiao-azul.jpg", depth: 40, zone: "Zona de Luz Solar", desc: "o cirurgião-azul é um peixe de recife com corpo comprimido lateralmente e coloração intensa. vive em águas tropicais e se alimenta principalmente de algas. curiosidade: possui espinhos extremamente afiados próximos à cauda, utilizados para defesa, que lembram lâminas cirúrgicas e podem causar cortes profundos em predadores." },
{ file: "tartaruga-verde.jpg", depth: 50, zone: "Zona de Luz Solar", desc: "a tartaruga-verde é uma das maiores espécies de tartarugas marinhas, podendo ultrapassar 1 metro de comprimento e pesar centenas de quilos. habita águas tropicais e subtropicais e se alimenta principalmente de algas e plantas marinhas. curiosidade: possui uma incrível capacidade de navegação, sendo capaz de atravessar oceanos inteiros e retornar exatamente à praia onde nasceu para se reproduzir." },
{ file: "polvo-de-aneis-azuis.jpg", depth: 50, zone: "Zona de Luz Solar", desc: "o polvo-de-anéis-azuis é um pequeno cefalópode encontrado em águas rasas do oceano pacífico, famoso por seus anéis brilhantes que aparecem quando se sente ameaçado. curiosidade: apesar do tamanho reduzido, é um dos animais mais venenosos do planeta, possuindo toxinas capazes de causar paralisia respiratória em poucos minutos, sem antídoto conhecido." },
{ file: "ourico-do-mar.jpg", depth: 60, zone: "Zona de Luz Solar", desc: "o ouriço-do-mar é um equinodermo com corpo esférico coberto por espinhos móveis que servem para defesa e locomoção. vive em fundos rochosos e recifes. curiosidade: algumas espécies podem viver mais de 200 anos, sendo consideradas entre os animais mais longevos do planeta, além de possuírem uma estrutura bucal complexa chamada lanterna de Aristóteles." },
{ file: "tubarao-lixa.jpg", depth: 60, zone: "Zona de Luz Solar", desc: "o tubarão-lixa é um peixe de hábitos noturnos encontrado em águas rasas, conhecido por seu comportamento relativamente calmo. possui corpo alongado e pele áspera. curiosidade: utiliza um sistema de sucção extremamente poderoso para capturar presas, conseguindo sugar animais escondidos em fendas e quebrar conchas resistentes." },
{ file: "tubarao-gato.jpg", depth: 70, zone: "Zona de Luz Solar", desc: "o tubarão-gato é um pequeno tubarão de comportamento discreto, geralmente encontrado próximo ao fundo do mar. possui olhos grandes adaptados à visão em baixa luz. curiosidade: algumas espécies apresentam biofluorescência, emitindo um brilho esverdeado sob luz azul, algo raro entre vertebrados." },
{ file: "peixe-porco-cinza.jpg", depth: 70, zone: "Zona de Luz Solar", desc: "o peixe-porco-cinza é um peixe robusto encontrado em regiões costeiras, com hábitos alimentares variados que incluem moluscos e crustáceos. curiosidade: quando capturado ou fora da água, ele emite sons semelhantes a grunhidos de porco, o que originou seu nome popular." },
{ file: "camarao-mantis.jpg", depth: 80, zone: "Zona de Luz Solar", desc: "o camarão-mantis é um dos predadores mais impressionantes do oceano, conhecido por sua força extrema e visão avançada. possui olhos capazes de detectar uma ampla gama de cores e polarizações. curiosidade: seu golpe é tão rápido que cria cavitação na água, podendo quebrar conchas, vidro e até aquários, sendo considerado o ataque mais rápido do reino animal." },
{ file: "caranguejo-aranha.jpg", depth: 80, zone: "Zona de Luz Solar", desc: "o caranguejo-aranha possui pernas longas e finas que lembram as de uma aranha, sendo encontrado em diversos ambientes marinhos. curiosidade: ele se camufla cobrindo o corpo com algas, esponjas e outros detritos, tornando-se praticamente invisível no ambiente." },
{ file: "peixe-escorpiao.jpg", depth: 90, zone: "Zona de Luz Solar", desc: "o peixe-escorpião é um predador venenoso que utiliza camuflagem para se esconder entre rochas e corais. possui espinhos dorsais que injetam veneno. curiosidade: pode permanecer imóvel por longos períodos, atacando suas presas com extrema rapidez quando elas se aproximam." },
{ file: "lula-de-vidro.jpg", depth: 90, zone: "Zona de Luz Solar", desc: "a lula-de-vidro é um cefalópode quase totalmente transparente, permitindo ver seus órgãos internos. vive em águas abertas e utiliza essa transparência como forma de camuflagem. curiosidade: usa compostos como amônia para controlar sua flutuabilidade sem gastar energia." },
{ file: "peixe-pedra.jpg", depth: 100, zone: "Zona de Luz Solar", desc: "o peixe-pedra é considerado o peixe mais venenoso do mundo, extremamente bem camuflado entre rochas. possui espinhos que liberam veneno potente ao contato. curiosidade: pode permanecer imóvel por longos períodos e até sobreviver fora da água por algum tempo se estiver úmido." },
{ file: "caranguejo-azul.jpg", depth: 100, zone: "Zona de Luz Solar", desc: "o caranguejo-azul é um crustáceo marinho altamente adaptável, encontrado principalmente em regiões costeiras, estuários e manguezais, onde a salinidade da água pode variar bastante. ele possui um exoesqueleto rígido que precisa ser trocado periodicamente através de um processo chamado muda, permitindo seu crescimento. suas pinças são fortes e utilizadas tanto para defesa quanto para captura de alimento, que inclui pequenos peixes, moluscos e matéria orgânica. curiosidade: o sangue do caranguejo-azul possui uma substância extremamente valiosa chamada hemocianina, rica em cobre, que dá a coloração azul e é utilizada na medicina para detectar a presença de bactérias em vacinas e equipamentos médicos, sendo essencial para a segurança farmacêutica mundial." },
{ file: "garoupa.jpg", depth: 110, zone: "Zona de Luz Solar", desc: "a garoupa é um peixe de grande porte que habita recifes de coral e estruturas rochosas, sendo um predador de emboscada extremamente eficiente. ela permanece imóvel por longos períodos, camuflada no ambiente, aguardando o momento ideal para atacar suas presas com um movimento extremamente rápido. sua boca larga permite engolir presas inteiras. curiosidade: muitas espécies de garoupa apresentam hermafroditismo sequencial, o que significa que podem mudar de sexo ao longo da vida, geralmente passando de fêmea para macho quando atingem determinado tamanho ou quando há necessidade no grupo." },
{ file: "peixe-soldado.jpg", depth: 110, zone: "Zona de Luz Solar", desc: "o peixe-soldado é um peixe de recife com olhos grandes e sensíveis, adaptados para enxergar em ambientes de baixa luminosidade. durante o dia, ele permanece escondido em cavernas, saindo à noite para se alimentar de pequenos invertebrados. seu corpo geralmente apresenta coloração avermelhada, que se torna menos visível em águas profundas. curiosidade: vive em cardumes organizados e sua movimentação sincronizada lembra formações militares, o que inspirou seu nome, além de aumentar sua proteção contra predadores." },
{ file: "tubarao-lanterna.jpg", depth: 120, zone: "Zona de Luz Solar", desc: "o tubarão-lanterna é uma das menores espécies de tubarão conhecidas, vivendo em profundidades maiores e possuindo características únicas para sobreviver em ambientes escuros. seu corpo é coberto por fotóforos, estruturas que produzem luz. curiosidade: essa bioluminescência funciona como uma forma de camuflagem chamada contra-iluminação, onde o animal emite luz para se misturar com a luminosidade da superfície, tornando-se invisível para predadores que observam de baixo." },
{ file: "peixe-morcego-de-labios-vermelhos.jpg", depth: 120, zone: "Zona de Luz Solar", desc: "o peixe-morcego-de-lábios-vermelhos é uma espécie incomum encontrada principalmente nas ilhas Galápagos, conhecida por sua aparência peculiar e comportamento único. ele possui corpo achatado e nadadeiras adaptadas que funcionam como apoio para caminhar no fundo do mar. curiosidade: seus lábios vermelhos chamativos são extremamente incomuns entre peixes e acredita-se que possam desempenhar papel na comunicação ou seleção sexual durante o acasalamento." },
{ file: "peixe-bruxa.jpg", depth: 130, zone: "Zona de Luz Solar", desc: "o peixe-bruxa é um dos vertebrados mais primitivos existentes, com corpo alongado, sem mandíbula e com aparência semelhante a uma enguia. ele vive em regiões profundas e se alimenta principalmente de carcaças, desempenhando papel importante na reciclagem de matéria orgânica. curiosidade: ao se sentir ameaçado, ele libera uma grande quantidade de muco viscoso que pode expandir rapidamente em contato com a água, entupindo as brânquias de predadores e dificultando ataques." },
{ file: "tubarao-touro.jpg", depth: 140, zone: "Zona de Luz Solar", desc: "o tubarão-touro é uma das espécies mais agressivas e adaptáveis de tubarão, conhecido por sua capacidade de viver tanto em água salgada quanto em água doce. possui corpo robusto, comportamento territorial e grande força. curiosidade: é um dos poucos tubarões que conseguem regular a concentração de sal no corpo, permitindo que sejam encontrados em rios como o Amazonas e até mesmo a centenas de quilômetros do oceano." },
{ file: "leao-marinho.jpg", depth: 140, zone: "Zona de Luz Solar", desc: "o leão-marinho é um mamífero marinho altamente ágil e social, pertencente ao grupo dos pinípedes. ele possui nadadeiras fortes que permitem nadar rapidamente e realizar movimentos complexos tanto na água quanto em terra. curiosidade: diferente das focas, consegue girar suas nadadeiras traseiras para caminhar, o que facilita sua locomoção fora da água, além de viver em colônias organizadas com hierarquias sociais bem definidas." },
{ file: "camarao.jpg", depth: 150, zone: "Zona de Luz Solar", desc: "o camarão é um crustáceo extremamente abundante nos oceanos, com grande diversidade de espécies que ocupam diferentes habitats, desde águas rasas até regiões mais profundas. ele é essencial na cadeia alimentar marinha, servindo de alimento para diversos predadores. curiosidade: algumas espécies possuem a capacidade de emitir bioluminescência, criando nuvens luminosas para confundir predadores e facilitar sua fuga em ambientes escuros." },
{ file: "tambor-preto.jpg", depth: 150, zone: "Zona de Luz Solar", desc: "o tambor-preto é um peixe costeiro conhecido por sua capacidade de produzir sons através da vibração de músculos próximos à bexiga natatória. esses sons são utilizados principalmente durante a reprodução e comunicação entre indivíduos. curiosidade: grandes grupos podem produzir ruídos tão intensos que já foram detectados por equipamentos submarinos a grandes distâncias, funcionando quase como um 'coro submarino'." },
{ file: "bacalhau.jpg", depth: 160, zone: "Zona de Luz Solar", desc: "o bacalhau é um peixe de águas frias com grande importância econômica e histórica, sendo amplamente consumido em diversas culturas. possui corpo alongado e hábitos migratórios. curiosidade: sua conservação através da salga é uma prática milenar que permitiu sua distribuição global, especialmente durante as grandes navegações europeias." },
{ file: "peixe-voador.jpg", depth: 180, zone: "Zona de Luz Solar", desc: "o peixe-voador possui nadadeiras peitorais altamente desenvolvidas que funcionam como asas, permitindo que ele salte para fora da água e plane por grandes distâncias. curiosidade: pode atingir velocidades superiores a 60 km/h ao sair da água e percorrer mais de 200 metros no ar, sendo uma estratégia eficiente para escapar de predadores." },
{ file: "tartaruga-oliva.jpg", depth: 200, zone: "Zona do Crepúsculo", desc: "a tartaruga-oliva é uma tartaruga marinha migratória que percorre grandes distâncias entre áreas de alimentação e reprodução. habita oceanos tropicais e subtropicais e possui dieta variada. curiosidade: realiza eventos conhecidos como arribadas, onde milhares de tartarugas chegam simultaneamente à praia para desovar, criando um dos maiores eventos naturais do planeta." },
{ file: "peixe-mao.jpg", depth: 210, zone: "Zona do Crepúsculo", desc: "o peixe-mão é uma espécie extremamente rara que utiliza suas nadadeiras modificadas para caminhar pelo fundo do mar, ao invés de nadar. ele vive em habitats muito específicos. curiosidade: devido à sua baixa mobilidade, depende fortemente do ambiente ao redor, sendo altamente vulnerável a mudanças ambientais e considerado uma das espécies mais raras do oceano." },
{ file: "medusa-fantasma-gigante.jpg", depth: 230, zone: "Zona do Crepúsculo", desc: "a medusa fantasma gigante é uma água-viva de grandes dimensões e aparência translúcida, raramente observada devido à profundidade em que vive. curiosidade: foi registrada pouquíssimas vezes na história, sendo considerada uma das criaturas mais misteriosas do oceano profundo." },
{ file: "tubarao-branco.jpg", depth: 250, zone: "Zona do Crepúsculo", desc: "o tubarão-branco é um dos maiores predadores marinhos, com corpo poderoso e grande capacidade de caça. curiosidade: possui sensores chamados ampolas de lorenzini que detectam campos elétricos de outros animais, permitindo localizar presas mesmo sem enxergá-las." },
{ file: "baleia-azul.jpg", depth: 280, zone: "Zona do Crepúsculo", desc: "a baleia-azul é o maior animal que já existiu em toda a história do planeta terra, superando até mesmo os maiores dinossauros. pode atingir mais de 30 metros de comprimento e pesar mais de 180 toneladas. apesar do tamanho colossal, sua alimentação é baseada em organismos minúsculos como o krill, filtrando milhares de litros de água por dia através de suas barbatanas. curiosidade: o coração de uma baleia-azul pode pesar mais de 180 kg e suas batidas podem ser detectadas a quilômetros de distância, além disso, seu canto é considerado o som mais alto produzido por um animal no planeta." },
{ file: "peixe-machadinha.jpg", depth: 300, zone: "Zona do Crepúsculo", desc: "o peixe-machadinha é um pequeno peixe de águas profundas com corpo extremamente achatado lateralmente e aparência metálica, refletindo a pouca luz disponível. ele vive na chamada zona mesopelágica e possui adaptações únicas para sobreviver em ambientes com baixa luminosidade. curiosidade: sua bioluminescência é utilizada como camuflagem, emitindo luz na parte inferior do corpo para se misturar com a iluminação vinda da superfície, tornando-se praticamente invisível para predadores que observam de baixo." },
{ file: "gonostomatidae.jpg", depth: 350, zone: "Zona do Crepúsculo", desc: "os peixes da família gonostomatidae são pequenos peixes abissais extremamente abundantes nos oceanos, desempenhando um papel essencial na cadeia alimentar marinha. apesar de pouco conhecidos, são fundamentais para o equilíbrio ecológico das profundezas. curiosidade: acredita-se que sejam um dos grupos de vertebrados mais numerosos do planeta, com populações gigantescas que participam diariamente de migrações verticais, subindo à superfície à noite para se alimentar e retornando às profundezas durante o dia." },
{ file: "baleia-jubarte.jpg", depth: 400, zone: "Zona do Crepúsculo", desc: "a baleia-jubarte é um mamífero marinho conhecido por seus comportamentos espetaculares, como saltos fora da água e complexos padrões de canto. pode atingir até 16 metros de comprimento e realiza longas migrações entre áreas de alimentação e reprodução. curiosidade: seus cantos podem durar horas e são considerados uma forma de comunicação altamente complexa, variando entre populações e funcionando quase como uma 'linguagem' transmitida culturalmente entre indivíduos." },
{ file: "peixe-morcego-panqueca.jpg", depth: 400, zone: "Zona do Crepúsculo", desc: "o peixe-morcego-panqueca é um peixe de fundo com corpo extremamente achatado, lembrando uma panqueca, e aparência incomum. ele não é um nadador eficiente e prefere se locomover lentamente pelo fundo do oceano. curiosidade: utiliza suas nadadeiras como se fossem pernas, permitindo que caminhe sobre o leito marinho em vez de nadar, uma adaptação rara entre peixes." },
{ file: "nautilus.jpg", depth: 450, zone: "Zona do Crepúsculo", desc: "o nautilus é um molusco cefalópode com concha espiralada externa, sendo um dos poucos representantes vivos de um grupo que dominou os oceanos há milhões de anos. ele possui dezenas de tentáculos e um sistema primitivo em comparação com polvos e lulas. curiosidade: sua concha é dividida em câmaras internas que ele utiliza para controlar a flutuabilidade, regulando gases dentro delas, além de ser considerado um verdadeiro 'fóssil vivo' devido à sua pouca mudança evolutiva." },
{ file: "peixe-semaforo.jpg", depth: 500, zone: "Zona do Crepúsculo", desc: "o peixe-semáforo é uma espécie que utiliza bioluminescência como principal forma de comunicação e sobrevivência em ambientes de baixa luz. seus órgãos luminosos podem ser ativados em diferentes padrões. curiosidade: esses sinais luminosos funcionam como um sistema de comunicação visual no escuro, podendo ser usados para atrair presas, afastar predadores ou até interagir com outros indivíduos da mesma espécie." },
{ file: "pinguim-imperador.jpg", depth: 550, zone: "Zona do Crepúsculo", desc: "o pinguim-imperador é a maior espécie de pinguim existente, vivendo nas regiões extremamente frias da antártida. ele é altamente adaptado ao mergulho profundo, podendo alcançar centenas de metros abaixo da superfície em busca de alimento. curiosidade: consegue prender a respiração por mais de 20 minutos e reduzir drasticamente sua frequência cardíaca durante o mergulho, conservando oxigênio para sobreviver em condições extremas." },
{ file: "caranguejo-aranha-japones.jpg", depth: 550, zone: "Zona do Crepúsculo", desc: "o caranguejo-aranha-japonês é o maior artrópode do mundo, podendo atingir até 3,7 metros de envergadura com as pernas estendidas. ele vive em águas profundas ao redor do japão e possui aparência que lembra uma aranha gigante. curiosidade: apesar do tamanho impressionante, é relativamente lento e se alimenta principalmente de matéria orgânica em decomposição, desempenhando papel importante na limpeza do fundo oceânico." },
{ file: "cachalote.jpg", depth: 600, zone: "Zona do Crepúsculo", desc: "o cachalote é uma das maiores baleias do mundo e o maior predador com dentes do planeta. ele é especializado em mergulhos profundos para caçar lulas gigantes. curiosidade: possui o maior cérebro do reino animal e utiliza ecolocalização extremamente poderosa para navegar e localizar presas em total escuridão." },
{ file: "peixe-espada.jpg", depth: 650, zone: "Zona do Crepúsculo", desc: "o peixe-espada é um predador veloz com corpo hidrodinâmico e um longo bico afiado que utiliza para caçar. ele é capaz de atingir altas velocidades na água. curiosidade: usa seu 'espada' para golpear cardumes, atordoando várias presas de uma vez antes de se alimentar, sendo uma estratégia altamente eficiente." },
{ file: "caranguejo-rei.jpg", depth: 750, zone: "Zona do Crepúsculo", desc: "o caranguejo-rei é um crustáceo de grande porte encontrado em águas frias, especialmente no hemisfério norte. possui carapaça rígida e pinças fortes. curiosidade: apesar do nome, ele não é um verdadeiro caranguejo, sendo mais próximo evolutivamente dos ermitões, e pode atingir tamanhos impressionantes." },
{ file: "anoplogaster.jpg", depth: 800, zone: "Zona do Crepúsculo", desc: "o anoplogaster, também conhecido como peixe-dente-de-presas, é um dos peixes mais assustadores do oceano profundo, com dentes extremamente grandes em relação ao corpo. curiosidade: seus dentes são tão longos que ele precisa de adaptações especiais no crânio para conseguir fechar a boca sem se machucar." },
{ file: "peixe-futebol.jpg", depth: 850, zone: "Zona do Crepúsculo", desc: "o peixe-futebol possui corpo arredondado e coloração escura, adaptado à vida em ambientes de baixa luminosidade. curiosidade: sua coloração ajuda a absorver quase toda a luz, tornando-o praticamente invisível no ambiente profundo." },
{ file: "tubarao-martelo.jpg", depth: 850, zone: "Zona do Crepúsculo", desc: "o tubarão-martelo é conhecido por sua cabeça em formato único, chamada cefalofólio, que melhora sua capacidade sensorial. curiosidade: essa estrutura permite uma percepção mais ampla do ambiente, aumentando sua eficiência na caça ao detectar sinais elétricos de presas escondidas." },
{ file: "peixe-tripe.jpg", depth: 900, zone: "Zona do Crepúsculo", desc: "o peixe-tripe é um animal adaptado ao fundo oceânico, utilizando nadadeiras longas como suporte para se manter estável. curiosidade: ele pode permanecer praticamente imóvel por longos períodos, esperando pacientemente por presas, economizando energia em um ambiente onde alimento é escasso." },
{ file: "enguia-gulper.jpg", depth: 950, zone: "Zona do Crepúsculo", desc: "a enguia-gulper é uma criatura de aparência impressionante, com boca extremamente grande e expansível. vive em profundidades onde alimento é raro. curiosidade: sua boca pode se expandir de forma gigantesca, permitindo engolir presas maiores que seu próprio corpo, uma adaptação essencial para sobreviver no oceano profundo." },
{ file: "lula-vampira-do-inferno.jpg", depth: 1000, zone: "Zona da Meia-Noite", desc: "a lula-vampira-do-inferno, cientificamente conhecida como vampyroteuthis infernalis, é uma das criaturas mais fascinantes e incomuns do oceano profundo. apesar do nome, ela não é nem uma lula verdadeira nem um polvo, representando uma linhagem evolutiva única entre os cefalópodes. vive em regiões com níveis extremamente baixos de oxigênio, onde poucos animais conseguem sobreviver. seu corpo é gelatinoso, de coloração escura e com uma membrana que conecta seus tentáculos, lembrando uma capa. curiosidade: ao invés de liberar tinta como outros cefalópodes, ela libera uma nuvem de partículas bioluminescentes que brilham no escuro, confundindo predadores e criando um verdadeiro espetáculo de luz nas profundezas." },
{ file: "peixe-pescador.jpg", depth: 1000, zone: "Zona da Meia-Noite", desc: "o peixe-pescador é um dos símbolos mais icônicos do oceano profundo, conhecido por sua aparência assustadora e estratégia de caça extremamente eficiente. ele possui uma estrutura modificada na cabeça chamada ilício, que funciona como uma vara com uma 'isca' luminosa na ponta, atraindo presas no ambiente completamente escuro. curiosidade: os machos são minúsculos em comparação às fêmeas e, ao encontrarem uma parceira, se fundem permanentemente ao corpo dela, tornando-se dependentes e funcionando praticamente como um órgão reprodutivo vivo." },
{ file: "orca.jpg", depth: 1050, zone: "Zona da Meia-Noite", desc: "a orca, também conhecida como baleia-assassina, é um dos predadores mais inteligentes e organizados do planeta. apesar de frequentemente associada à superfície, pode mergulhar a grandes profundidades em busca de alimento. vive em grupos familiares chamados de pods, que apresentam comportamentos culturais únicos. curiosidade: cada grupo de orcas possui sua própria forma de comunicação e técnicas de caça específicas, transmitidas entre gerações, sendo um dos raros exemplos de cultura animal complexa." },
{ file: "golfinho.jpg", depth: 1200, zone: "Zona da Meia-Noite", desc: "os golfinhos são mamíferos marinhos extremamente inteligentes, capazes de realizar mergulhos profundos e utilizar ecolocalização para navegar e caçar. seu cérebro altamente desenvolvido permite aprendizado, comunicação e até reconhecimento de si mesmos. curiosidade: são um dos poucos animais capazes de se reconhecer no espelho, demonstrando autoconsciência, além de utilizarem sons únicos como 'nomes' para identificar indivíduos dentro do grupo." },
{ file: "tubarao-duende.jpg", depth: 1250, zone: "Zona da Meia-Noite", desc: "o tubarão-duende é uma das espécies mais raras e primitivas de tubarão, com aparência incomum caracterizada por um focinho alongado e mandíbula altamente projetável. ele vive em águas profundas e se alimenta de peixes e invertebrados. curiosidade: sua mandíbula pode se projetar para frente em alta velocidade para capturar presas, um mecanismo extremamente eficiente em ambientes onde cada oportunidade de alimentação é valiosa." },
{ file: "peixe-bolha.jpg", depth: 1300, zone: "Zona da Meia-Noite", desc: "o peixe-bolha é um animal adaptado à pressão extrema das profundezas, possuindo um corpo gelatinoso com densidade próxima à da água. essa característica permite que ele flutue sem gastar energia. curiosidade: quando retirado de seu habitat natural, seu corpo perde a forma devido à diferença de pressão, resultando em uma aparência 'derretida' que ficou famosa na internet." },
{ file: "narval.jpg", depth: 1400, zone: "Zona da Meia-Noite", desc: "o narval é um cetáceo conhecido por sua longa presa em espiral, que na verdade é um dente altamente desenvolvido. vive em águas frias do ártico e realiza mergulhos profundos. curiosidade: essa presa é extremamente sensível e funciona como um órgão sensorial capaz de detectar mudanças no ambiente, como temperatura, salinidade e pressão." },
{ file: "peixe-dragao-negro.jpg", depth: 1500, zone: "Zona da Meia-Noite", desc: "o peixe-dragão-negro é um predador abissal com corpo alongado, dentes afiados e capacidade de produzir luz. sua coloração extremamente escura absorve quase toda a luz, tornando-o praticamente invisível. curiosidade: ele pode emitir luz vermelha, algo raro no oceano profundo, permitindo enxergar presas sem ser detectado, já que a maioria dos animais não consegue ver essa cor." },
{ file: "peixe-lanterna.jpg", depth: 1500, zone: "Zona da Meia-Noite", desc: "o peixe-lanterna é um dos peixes mais abundantes do planeta, desempenhando papel fundamental no ecossistema marinho. possui órgãos bioluminescentes que produzem luz. curiosidade: realiza migração vertical diária, subindo à superfície durante a noite para se alimentar e retornando às profundezas durante o dia, sendo um dos maiores movimentos de biomassa do planeta." },
{ file: "peixe-frankenstein.jpg", depth: 1600, zone: "Zona da Meia-Noite", desc: "o peixe conhecido como 'frankenstein' é um exemplo das adaptações extremas do oceano profundo, apresentando aparência incomum com estruturas corporais incomuns. vive em regiões onde a pressão e a escuridão são intensas. curiosidade: suas características são resultado de milhões de anos de evolução em condições extremas, tornando-o altamente especializado para sobreviver onde poucos organismos conseguem." },
{ file: "tubarao-cobra.jpg", depth: 1550, zone: "Zona da Meia-Noite", desc: "o tubarão-cobra é uma espécie primitiva com corpo alongado semelhante ao de uma enguia e boca cheia de dentes afiados. ele habita águas profundas e raramente é visto. curiosidade: sua aparência pouco mudou ao longo de milhões de anos, sendo considerado um verdadeiro fóssil vivo da evolução dos tubarões." },
{ file: "polvo-telescopio.jpg", depth: 1700, zone: "Zona da Meia-Noite", desc: "o polvo-telescópio possui olhos extremamente grandes e adaptados para captar o mínimo de luz disponível nas profundezas. seu corpo é translúcido e delicado. curiosidade: seus olhos são capazes de detectar silhuetas contra a pouca luz que vem da superfície, permitindo identificar presas e predadores em um ambiente quase totalmente escuro." },
{ file: "peixe-vibora.jpg", depth: 1800, zone: "Zona da Meia-Noite", desc: "o peixe-víbora é um predador assustador com dentes longos e afiados que não cabem completamente dentro da boca. ele utiliza bioluminescência para atrair presas. curiosidade: seus dentes funcionam como armadilhas, impedindo que a presa escape uma vez capturada." },
{ file: "caranguejo-yeti.jpg", depth: 1900, zone: "Zona da Meia-Noite", desc: "o caranguejo-yeti é um crustáceo descoberto recentemente, conhecido por possuir estruturas semelhantes a pelos em suas pinças. vive próximo a fontes hidrotermais. curiosidade: esses 'pelos' abrigam bactérias simbióticas que ajudam na alimentação do animal, sendo um exemplo impressionante de simbiose." },
{ file: "tubarao-baleia.jpg", depth: 1950, zone: "Zona da Meia-Noite", desc: "o tubarão-baleia é o maior peixe do mundo, podendo ultrapassar 12 metros de comprimento. apesar do tamanho, é completamente inofensivo, alimentando-se por filtração. curiosidade: pode filtrar milhares de litros de água por hora para capturar pequenos organismos como plâncton." },
{ file: "peixe-diabo-negro.jpg", depth: 2000, zone: "Zona da Meia-Noite", desc: "o peixe-diabo-negro é uma das criaturas mais emblemáticas do oceano profundo, com aparência assustadora e dentes afiados. utiliza uma isca bioluminescente para atrair presas. curiosidade: sua estratégia de caça é baseada em paciência extrema, permanecendo imóvel até que a presa se aproxime o suficiente." },
{ file: "lula-colossal.jpg", depth: 2000, zone: "Zona da Meia-Noite", desc: "a lula-colossal é um dos maiores invertebrados do planeta, com tentáculos equipados com ganchos. vive em águas profundas e raramente é observada. curiosidade: possui os maiores olhos do reino animal, adaptados para detectar movimentos em ambientes extremamente escuros." },
{ file: "isopode-gigante.jpg", depth: 2100, zone: "Zona da Meia-Noite", desc: "o isópode gigante é um crustáceo que lembra um tatu terrestre, porém adaptado ao fundo do oceano. vive em regiões profundas e se alimenta de matéria orgânica em decomposição. curiosidade: pode sobreviver por anos sem se alimentar, devido ao ambiente com escassez de comida." },
{ file: "peixe-engolidor-negro.jpg", depth: 2200, zone: "Zona da Meia-Noite", desc: "o peixe-engolidor-negro possui um estômago altamente expansível que permite engolir presas maiores que ele próprio. vive em águas profundas com pouca disponibilidade de alimento. curiosidade: essa adaptação é essencial para sobreviver, já que oportunidades de alimentação são raras." },
{ file: "polvo-de-vidro.jpg", depth: 2300, zone: "Zona da Meia-Noite", desc: "o polvo-de-vidro é um cefalópode com corpo quase totalmente transparente, permitindo ver seus órgãos internos. vive em regiões profundas e utiliza essa característica como camuflagem. curiosidade: sua transparência o torna praticamente invisível em um ambiente onde não há muitos esconderijos físicos." },
{ file: "olhos-de-barril.jpg", depth: 2400, zone: "Zona da Meia-Noite", desc: "o peixe-olhos-de-barril possui olhos tubulares e transparentes voltados para cima, protegidos por uma estrutura transparente na cabeça. curiosidade: seus olhos podem girar para frente, permitindo enxergar tanto acima quanto à frente, uma adaptação única para detectar presas e predadores." },
{ file: "tubarao-fantasma.jpg", depth: 2500, zone: "Zona da Meia-Noite", desc: "o tubarão-fantasma, também conhecido como quimera, possui aparência incomum com corpo alongado e nadadeiras largas. vive em águas profundas e se alimenta de pequenos organismos. curiosidade: utiliza sensores altamente sensíveis para detectar presas no fundo do mar, compensando a falta de luz." },
{ file: "verme-lula.jpg", depth: 2600, zone: "Zona da Meia-Noite", desc: "o verme-lula é uma criatura rara com aparência híbrida entre um verme e uma lula, possuindo tentáculos longos e corpo incomum. curiosidade: utiliza seus tentáculos para capturar partículas e pequenos organismos, sendo um exemplo das formas de vida mais incomuns do oceano profundo." },
{ file: "caulophrynidae.jpg", depth: 2700, zone: "Zona da Meia-Noite", desc: "os caulophrynidae são peixes pescadores abissais com adaptações extremas para caça em ambientes escuros. curiosidade: possuem estruturas luminosas altamente eficientes para atrair presas em completa escuridão." },
{ file: "gastropode-de-pe-escamoso.jpg", depth: 2700, zone: "Zona da Meia-Noite", desc: "esse molusco possui uma característica única: escamas contendo ferro em sua estrutura corporal. vive próximo a fontes hidrotermais. curiosidade: é o único animal conhecido que incorpora metais em sua armadura natural, tornando-o extremamente resistente." },
{ file: "verme-zumbi.jpg", depth: 2900, zone: "Zona da Meia-Noite", desc: "o verme-zumbi vive no fundo do mar e se alimenta de ossos de animais mortos, como baleias. curiosidade: não possui boca ou sistema digestivo tradicional, utilizando bactérias simbióticas para decompor matéria orgânica." },
{ file: "baleia-bicuda-de-cuvier.jpg", depth: 3000, zone: "Zona da Meia-Noite", desc: "essa baleia é conhecida por realizar alguns dos mergulhos mais profundos já registrados entre mamíferos. curiosidade: pode permanecer submersa por mais de duas horas, suportando níveis extremos de pressão." },
{ file: "esponja-de-vidro.jpg", depth: 3100, zone: "Zona da Meia-Noite", desc: "as esponjas de vidro possuem estruturas feitas de sílica que formam esqueletos delicados e complexos. vivem em águas profundas. curiosidade: algumas podem viver milhares de anos, sendo consideradas entre os organismos mais antigos do planeta." },
{ file: "pena-do-mar.jpg", depth: 3200, zone: "Zona da Meia-Noite", desc: "a pena-do-mar é uma colônia de organismos que se assemelha a uma pena, fixando-se no fundo oceânico. curiosidade: pode emitir luz quando estimulada, criando um efeito bioluminescente impressionante." },
{ file: "esponja-harpa.jpg", depth: 3400, zone: "Zona da Meia-Noite", desc: "a esponja-harpa é uma esponja carnívora que captura pequenos animais utilizando estruturas semelhantes a ganchos. curiosidade: ao contrário da maioria das esponjas, ela não filtra água, mas sim caça ativamente suas presas." },
{ file: "tubarao-charuto.jpg", depth: 3500, zone: "Zona da Meia-Noite", desc: "o tubarão-charuto é conhecido por retirar pedaços circulares de carne de animais maiores. curiosidade: deixa marcas perfeitamente circulares em suas presas, como se fossem cortes feitos por ferramenta." },
{ file: "peixe-lagarto.jpg", depth: 3600, zone: "Zona da Meia-Noite", desc: "o peixe-lagarto é um predador de fundo que utiliza camuflagem para capturar presas. curiosidade: permanece imóvel por longos períodos esperando o momento ideal para atacar." },
{ file: "cetomimidae.jpg", depth: 3700, zone: "Zona da Meia-Noite", desc: "os cetomimidae apresentam dimorfismo extremo entre machos e fêmeas. curiosidade: os machos não possuem sistema digestivo funcional e vivem apenas para reprodução." },
{ file: "titanic.jpg", depth: 3800, zone: "Zona da Meia-Noite", desc: "o titanic foi um navio de passageiros que afundou em 1912 após colidir com um iceberg. seus destroços permanecem no fundo do oceano. curiosidade: foram encontrados apenas em 1985, décadas após o naufrágio, e continuam sendo estudados até hoje." },
{ file: "merluza-negra.jpg", depth: 3900, zone: "Zona da Meia-Noite", desc: "a merluza-negra é um peixe de águas profundas com crescimento lento e longa expectativa de vida. curiosidade: é altamente valorizada comercialmente, o que levou à sobrepesca em algumas regiões." },
{ file: "polvo-dumbo.jpg", depth: 4000, zone: "Zona Abissal", desc: "o polvo-dumbo é um cefalópode das profundezas conhecido por suas nadadeiras laterais que lembram as orelhas do personagem dumbo. ele vive em regiões extremamente profundas, onde a pressão é esmagadora e a luz solar não chega. seu corpo é macio e adaptado para flutuar com eficiência, economizando energia em um ambiente com escassez de alimento. curiosidade: ao contrário de muitos polvos, ele não precisa fugir rapidamente de predadores, pois possui poucos inimigos naturais nesse ambiente extremo, adotando um estilo de vida mais lento e eficiente energeticamente." },
{ file: "atolla.jpg", depth: 4000, zone: "Zona Abissal", desc: "a água-viva do gênero atolla é uma criatura bioluminescente que habita as profundezas oceânicas. possui um corpo em forma de disco com tentáculos distribuídos ao redor. curiosidade: quando ameaçada, ela emite uma sequência de flashes luminosos em forma de ondas circulares, conhecidos como 'alarme de ladrão', que servem para atrair predadores maiores e afastar quem a atacou." },
{ file: "ophiuroidea.jpg", depth: 4100, zone: "Zona Abissal", desc: "os ophiuroidea, conhecidos como estrelas-serpente, são equinodermos com braços longos e flexíveis que utilizam para locomoção e alimentação. vivem no fundo do oceano e são extremamente adaptáveis. curiosidade: seus braços podem se regenerar rapidamente caso sejam perdidos, e algumas espécies conseguem se locomover de forma surpreendentemente rápida para padrões abissais." },
{ file: "macrouridae.jpg", depth: 4200, zone: "Zona Abissal", desc: "os peixes da família macrouridae, também conhecidos como granadeiros, possuem caudas longas e corpos adaptados para a vida no fundo oceânico. são comuns em grandes profundidades e desempenham papel importante na cadeia alimentar. curiosidade: possuem metabolismo lento e podem viver muitos anos em um ambiente onde o crescimento e a reprodução ocorrem de forma muito mais lenta do que na superfície." },
{ file: "eurythenes-gryllus.jpg", depth: 4300, zone: "Zona Abissal", desc: "o eurythenes gryllus é um anfípode gigante das profundezas, semelhante a um pequeno camarão, mas com tamanho muito maior do que seus parentes de águas rasas. vive em regiões abissais e hadal. curiosidade: já foi encontrado em diversas partes do mundo, demonstrando uma incrível capacidade de adaptação global a ambientes extremos." },
{ file: "pepino-do-mar.jpg", depth: 4400, zone: "Zona Abissal", desc: "o pepino-do-mar é um equinodermo que desempenha papel fundamental no ecossistema marinho, alimentando-se de matéria orgânica presente no sedimento. ele processa o fundo do mar, ajudando a reciclar nutrientes. curiosidade: algumas espécies podem expulsar seus próprios órgãos internos como mecanismo de defesa, regenerando-os posteriormente." },
{ file: "peixe-sem-rosto.jpg", depth: 4500, zone: "Zona Abissal", desc: "o peixe-sem-rosto é uma criatura rara com aparência incomum, onde suas estruturas faciais são pouco visíveis externamente. vive em grandes profundidades. curiosidade: seus órgãos sensoriais são adaptados para detectar vibrações e movimentos na água, compensando a ausência de visão eficiente." },
{ file: "peixe-ogro.jpg", depth: 4600, zone: "Zona Abissal", desc: "o peixe-ogro é um predador abissal com dentes extremamente grandes e afiados, projetados para capturar presas com eficiência. curiosidade: seus dentes são tão longos que ele não consegue fechar completamente a boca, mas essa característica não prejudica sua capacidade de caça." },
{ file: "colossendeis.jpg", depth: 4800, zone: "Zona Abissal", desc: "o colossendeis é uma aranha-do-mar gigante, pertencente a um grupo de artrópodes marinhos com pernas extremamente longas e corpo pequeno. curiosidade: grande parte de seus órgãos internos se estende para dentro das pernas, uma adaptação curiosa para seu formato corporal incomum." },
{ file: "enguia-cega.jpg", depth: 5000, zone: "Zona Abissal", desc: "a enguia-cega é uma espécie adaptada à escuridão total, possuindo olhos reduzidos ou inexistentes. vive em ambientes de alta pressão. curiosidade: depende quase exclusivamente de outros sentidos, como tato e detecção de vibrações, para se orientar e encontrar alimento." },
{ file: "magnapinna.jpg", depth: 5000, zone: "Zona Abissal", desc: "a lula magnapinna é uma das criaturas mais misteriosas do oceano profundo, com tentáculos extremamente longos que podem se estender por vários metros. curiosidade: seu modo de locomoção e alimentação ainda não é totalmente compreendido, sendo uma das espécies mais enigmáticas já registradas." },
{ file: "peixe-granadeiro-abissal.jpg", depth: 5250, zone: "Zona Abissal", desc: "o peixe-granadeiro-abissal é comum em grandes profundidades e possui corpo adaptado para ambientes de alta pressão. curiosidade: sua dieta inclui praticamente qualquer material orgânico disponível, sendo um importante reciclador do ecossistema profundo." },
{ file: "peixe-aranha-abissal.jpg", depth: 5500, zone: "Zona Abissal", desc: "o peixe-aranha-abissal possui aparência assustadora e comportamento predatório. curiosidade: utiliza camuflagem e paciência extrema para capturar presas em um ambiente onde oportunidades são raras." },
{ file: "peixe-remo.jpg", depth: 5700, zone: "Zona Abissal", desc: "o peixe-remo é um dos peixes mais longos do mundo, com corpo alongado e aparência serpentiforme. curiosidade: é frequentemente associado a lendas de serpentes marinhas devido ao seu tamanho e forma incomuns." },
{ file: "ss-rio-grande.jpg", depth: 5762, zone: "Zona Abissal", desc: "o ss rio grande é um naufrágio histórico localizado em grandes profundidades. ao longo do tempo, tornou-se um ecossistema artificial. curiosidade: naufrágios como esse funcionam como recifes artificiais, abrigando diversas formas de vida marinha." },
{ file: "scotoplanes.jpg", depth: 6000, zone: "Zona Hadal", desc: "o scotoplanes, conhecido como 'porco-do-mar', é um tipo de pepino-do-mar que vive em profundidades extremas. possui corpo gelatinoso e patas adaptadas para locomoção no fundo. curiosidade: frequentemente se move em grupos, formando verdadeiras 'manadas' no fundo do oceano." },
{ file: "barathrites-iris.jpg", depth: 6300, zone: "Zona Hadal", desc: "o barathrites iris é um peixe adaptado às pressões extremas das fossas oceânicas. possui corpo frágil e metabolismo lento. curiosidade: consegue sobreviver em condições que esmagariam a maioria dos organismos conhecidos." },
{ file: "uss-johnston.jpg", depth: 6460, zone: "Zona Hadal", desc: "o uss johnston é um destróier da segunda guerra mundial encontrado em profundidades extremas. curiosidade: é um dos naufrágios mais profundos já localizados, preservado pelo ambiente frio e de baixa oxigenação." },
{ file: "uss-samuel-b-roberts.jpg", depth: 6895, zone: "Zona Hadal", desc: "o uss samuel b roberts é considerado um dos naufrágios mais profundos do mundo. curiosidade: sua descoberta foi um marco na exploração oceânica, demonstrando os avanços tecnológicos em exploração de grandes profundidades." },
{ file: "agua-viva-pente.jpg", depth: 7000, zone: "Zona Hadal", desc: "as águas-vivas pente são organismos gelatinosos que utilizam fileiras de cílios para se locomover, criando efeitos luminosos impressionantes. curiosidade: sua bioluminescência cria padrões iridescentes que parecem arco-íris em movimento no escuro." },
{ file: "peixe-caracol.jpg", depth: 8000, zone: "Zona Hadal", desc: "o peixe-caracol é um dos poucos vertebrados capazes de viver em profundidades extremas. possui corpo mole e adaptado à pressão. curiosidade: seu corpo contém compostos especiais que estabilizam proteínas sob pressão extrema." },
{ file: "abyssobrotula-galatheae.jpg", depth: 8300, zone: "Zona Hadal", desc: "o abyssobrotula galatheae é um dos peixes mais profundos já registrados. curiosidade: representa o limite conhecido da vida de peixes no oceano." },
{ file: "hirondellea-gigas.jpg", depth: 10000, zone: "Zona Hadal", desc: "o hirondellea gigas é um crustáceo encontrado nas fossas oceânicas mais profundas do planeta. curiosidade: possui enzimas especiais que permitem sobreviver sob pressões extremamente altas, além de conseguir digerir madeira e outros materiais incomuns." },
];
ocean.style.height = (12000 * SCALE) + "px";
zones.forEach(z => {
  const div = document.createElement("div");
  div.className = "absolute w-full text-center text-white/30 text-3xl font-bold tracking-widest";
  div.innerText = z.name;
  div.style.top = (z.depth * SCALE) + "px";
  ocean.appendChild(div);
});
const sorted = [...elements].sort((a, b) => a.depth - b.depth);
let i = 0;
sorted.forEach(el => {
  const div = document.createElement("div");

  div.className = `
    item absolute cursor-pointer opacity-0 scale-75
    transition-all duration-700 ease-out
  `;
  const img = document.createElement("img");
  img.src = "./images/" + el.file;
  img.className = `
    w-[150px]
    transition-all duration-300 ease-out
    drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]
    hover:scale-125
    hover:drop-shadow-[0_0_25px_rgba(0,255,255,1)]
  `;
  div.appendChild(img);
  const positions = [10, 80, 30, 60];
  div.style.left = positions[i % 4] + "%";
  div.style.top = (el.depth * SCALE + (i % 3) * 40) + "px";
div.onclick = () => {
  const name = el.file.replace(".jpg", "").replace(/-/g, " ");
  title.innerText = name;
  let descricao = el.desc;
  let curiosidade = "";
  if (el.desc.toLowerCase().includes("curiosidade:")) {
    const partes = el.desc.split(/curiosidade:/i);
    descricao = partes[0];
    curiosidade = partes[1];
  }
  desc.innerHTML = `
    <p>${descricao}</p>
    <p style="color:#00e5ff; margin-top:10px;">
      <strong>Zona:</strong> ${el.zone}
    </p>
    <p style="margin-top:10px; color:#9be7ff;">
      <strong>Curiosidade:</strong> ${curiosidade}
    </p>
  `;
  sidebar.classList.add("active");
};
  ocean.appendChild(div);
  i++;
});
const canvasP = document.getElementById("particles");
const ctxP = canvasP.getContext("2d");
function resizeParticles() {
  canvasP.width = window.innerWidth;
  canvasP.height = window.innerHeight;
}
resizeParticles();
window.addEventListener("resize", resizeParticles);
let particles = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvasP.width,
  y: Math.random() * canvasP.height,
  size: Math.random() * 2,
  speed: Math.random() * 0.5
}));
function drawParticles() {
  ctxP.clearRect(0, 0, canvasP.width, canvasP.height);
  particles.forEach(p => {
    p.y -= p.speed;
    p.x += Math.sin(p.y * 0.01) * 0.3;
    ctxP.beginPath();
    ctxP.fillStyle = "rgba(255,255,255,0.15)";
    ctxP.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctxP.fill();
    if (p.y < 0) {
      p.y = canvasP.height;
      p.x = Math.random() * canvasP.width;
    }
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
const canvasS = document.getElementById("stars");
const ctxS = canvasS.getContext("2d");
function resizeStars() {
  canvasS.width = window.innerWidth;
  canvasS.height = window.innerHeight;
}
resizeStars();
window.addEventListener("resize", resizeStars);
let stars = Array.from({ length: 140 }, () => ({
  x: Math.random() * canvasS.width,
  y: Math.random() * canvasS.height,
  size: Math.random() * 2.2,
  opacity: Math.random(),
  twinkle: Math.random() * 0.02
}));
function drawStars(depth) {
  ctxS.clearRect(0, 0, canvasS.width, canvasS.height);
  let visibility = 0;
  if (depth > 2000) {
    visibility = Math.min((depth - 2000) / 3000, 1);
  }
  stars.forEach(s => {
    s.opacity += s.twinkle;
    if (s.opacity > 1 || s.opacity < 0) s.twinkle *= -1;

    ctxS.beginPath();
    ctxS.fillStyle = `rgba(0,255,255,${s.opacity * visibility})`;
    ctxS.shadowBlur = 40 * visibility;
    ctxS.shadowColor = "cyan";
    ctxS.arc(s.x, s.y, s.size + visibility * 1.5, 0, Math.PI * 2);
    ctxS.fill();
  });
}
function updateStars() {
  const depth = window.scrollY / SCALE;
  drawStars(depth);
  requestAnimationFrame(updateStars);
}
updateStars();
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const depth = Math.floor(scroll / SCALE);
  if (depth >= 10100 && !chegouNoFim) {
    chegouNoFim = true;
    title.innerText = "Fim do Oceano";
    desc.innerHTML = `
      <p>
        Você ultrapassou os <strong>10.000 metros de profundidade</strong>.
      </p>
      <p style="margin-top:10px;">
        Pouco antes daqui, encontramos o último registro conhecido de vida:
      </p>
      <p style="margin-top:10px; color:#00e5ff;">
        <strong>Hirondellea gigas</strong>
      </p>
      <p style="margin-top:10px;">
        A partir deste ponto, as condições se tornam extremas demais:
        pressão esmagadora, ausência total de luz e escassez absoluta de energia.
      </p>
      <p style="margin-top:10px;">
        Aqui, o oceano deixa de ser um ecossistema conhecido...
        e se torna um deserto profundo e silencioso.
      </p>
      <p style="margin-top:15px; color:#9be7ff;">
        <strong>Obrigado pela visita.</strong>
      </p>
    `;
    sidebar.classList.add("active");
  }
  if (depth < 10100) {
    chegouNoFim = false;
  }
  depthUI.innerText = depth + " m";
  const darkness = Math.min(depth / 14000, 1);
  ocean.style.filter = `brightness(${1 - darkness * 0.75})`;
  document.querySelectorAll(".item").forEach(item => {
    const y = parseInt(item.style.top || 0);

    if (scroll > y - 800) {
      item.classList.remove("opacity-0", "scale-75");
      item.classList.add("opacity-100", "scale-100");
    }
  });
});
const canvas3D = document.getElementById("water3d");
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas3D,
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0);
const material = new THREE.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
uniform float u_time;
uniform vec2 u_resolution;
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.2;
  float wave1 = noise(uv * 3.0 + t);
  float wave2 = noise(uv * 6.0 - t * 1.2);
  float wave3 = noise(uv * 12.0 + t * 0.6);
  float wave = (wave1 + wave2 * 0.5 + wave3 * 0.25);
  vec2 distortion = vec2(
    wave * 0.05,
    sin(uv.x * 8.0 + t) * 0.03
  );
  vec2 dUV = uv + distortion;
  float light = sin(dUV.x * 30.0 + t) * sin(dUV.y * 30.0 - t);
  light = smoothstep(0.2, 1.0, light);
  vec3 color = vec3(0.0, 1.5, 2.3) * light;
  float glow = wave * 0.3;
  gl_FragColor = vec4(color + glow, 0.3);
}
`
});
const geometry = new THREE.PlaneGeometry(2, 2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
function animateWater() {
  requestAnimationFrame(animateWater);
  material.uniforms.u_time.value += 0.02;
  renderer.render(scene, camera);
}
animateWater();
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  material.uniforms.u_resolution.value.set(
    window.innerWidth,
    window.innerHeight
  );
});
const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});