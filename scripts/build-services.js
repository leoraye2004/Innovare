const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.innovaredecoracoes.com.br";
const WHATSAPP = "5547989292335";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.`;

const SERVICES = [
  {
    slug: "drywall",
    name: "Drywall",
    h1: "Drywall em Joinville com Material e Instalação",
    heroSub: "Paredes, forros e divisórias prontos para pintar, com equipe própria do início ao acabamento.",
    detailTitle: "Paredes, forros e divisórias em drywall",
    metaTitle: "Drywall em Joinville com Material e Instalação | Innovare",
    metaDesc: "Drywall em Joinville com material e instalação inclusos: paredes, forros e divisórias prontos para pintar, feitos por equipe própria. Peça seu orçamento grátis.",
    heroImg: "images/5.png",
    heroAlt: "Equipe da Innovare instalando placa de drywall em Joinville",
    detailImg: "images/old-drywall.jpg",
    detailAlt: "Instalação de drywall em ambiente comercial",
    intro: [
      "O drywall é hoje uma das soluções mais usadas para criar e dividir ambientes com rapidez, sem a sujeira e o tempo de uma obra em alvenaria tradicional. Na Innovare, a instalação é feita por equipe própria, do início ao acabamento — nunca vendemos só o material.",
      "Trabalhamos com drywall em residências, escritórios, lojas, clínicas e ambientes corporativos em Joinville e região, sempre com estrutura reforçada e acabamento pronto para pintura."
    ],
    benefits: [
      "Execução rápida, com menos sujeira e entulho que a alvenaria",
      "Acabamento liso e moderno, pronto para pintura",
      "Bom isolamento térmico e acústico entre ambientes",
      "Flexível para criar salas, sancas, nichos e forros sob medida"
    ],
    faq: [
      ["Quanto tempo leva para instalar uma parede de drywall?", "Depende do tamanho do ambiente, mas costuma ser bem mais rápido que uma parede de alvenaria — muitos projetos ficam prontos em poucos dias."],
      ["Parede de drywall aguenta pendurar TV e prateleira?", "Sim. A fixação é feita nos montantes da estrutura metálica interna, e nossa equipe já planeja esses pontos de reforço durante a instalação."],
      ["Drywall isola bem o som entre os ambientes?", "Isola, principalmente quando combinado com manta acústica ou lã de vidro no miolo da parede — uma opção que também instalamos."]
    ]
  },
  {
    slug: "divisorias-navais",
    name: "Divisórias Navais",
    h1: "Divisórias Navais em Joinville",
    metaTitle: "Divisórias Navais em Joinville | Innovare Decorações",
    metaDesc: "Divisórias navais em vidro e alumínio para escritórios e empresas em Joinville. Visual moderno, resistência e instalação profissional. Peça seu orçamento.",
    heroImg: "images/6.png",
    heroAlt: "Divisórias navais em vidro instaladas em escritório corporativo",
    detailImg: "images/7.png",
    detailAlt: "Divisórias navais com estrutura em alumínio e vidro",
    intro: [
      "As divisórias navais combinam estrutura em alumínio com fechamento em vidro ou painel, criando ambientes corporativos modernos sem perder a entrada de luz natural entre as salas. É a solução mais usada em escritórios, recepções e salas de reunião que buscam um visual sofisticado.",
      "A Innovare projeta e instala as divisórias sob medida para o seu espaço, com estrutura resistente e acabamento alinhado à identidade da empresa."
    ],
    benefits: [
      "Visual moderno e profissional para escritórios e recepções",
      "Estrutura em alumínio resistente, com fechamento em vidro ou painel",
      "Mantém a luz natural circulando entre os ambientes",
      "Fácil de reconfigurar se a empresa precisar mudar o layout no futuro"
    ],
    faq: [
      ["Divisória naval é resistente para uso comercial intenso?", "Sim, a estrutura em alumínio é reforçada para suportar o uso diário em ambientes corporativos, com fechamento em vidro temperado ou painel."],
      ["Dá para reformar o layout do escritório depois de instalado?", "Sim, as divisórias navais são modulares, o que facilita remanejar ou ampliar os ambientes futuramente."],
      ["Vocês atendem empresas de qualquer porte em Joinville?", "Atendemos desde pequenos escritórios até empresas maiores, sempre com projeto e instalação profissional inclusos."]
    ]
  },
  {
    slug: "divisorias-eucatex",
    name: "Divisórias Eucatex",
    h1: "Divisórias Eucatex em Joinville",
    metaTitle: "Divisórias Eucatex em Joinville | Innovare Decorações",
    metaDesc: "Divisórias Eucatex para escritórios e comércios em Joinville, com ótimo custo-benefício e instalação profissional. Solicite seu orçamento grátis.",
    heroImg: "images/old-divisorias.jpg",
    heroAlt: "Divisórias Eucatex instaladas em escritório",
    detailImg: "images/6.png",
    detailAlt: "Ambiente corporativo dividido com painéis",
    intro: [
      "As divisórias Eucatex são uma alternativa prática e com ótimo custo-benefício para dividir salas comerciais sem obra pesada. Os painéis criam ambientes bem definidos, com acabamento uniforme e instalação rápida.",
      "É uma opção muito usada por comércios e pequenas empresas em Joinville que precisam separar ambientes com agilidade e orçamento controlado."
    ],
    benefits: [
      "Ótimo custo-benefício comparado a paredes de alvenaria",
      "Instalação rápida, sem obra pesada",
      "Acabamento uniforme, pronto para uso imediato",
      "Boa opção para dividir salas comerciais e consultórios"
    ],
    faq: [
      ["Divisória Eucatex serve para qualquer tipo de ambiente?", "É mais indicada para ambientes comerciais internos, como salas, consultórios e escritórios que precisam de divisão rápida e econômica."],
      ["Qual a diferença entre divisória Eucatex e divisória naval?", "A Eucatex tem custo mais baixo e acabamento mais simples; a naval usa alumínio e vidro, com visual mais sofisticado. Ajudamos a escolher a melhor opção pro seu projeto."],
      ["A instalação suja ou danifica o ambiente existente?", "Não. A instalação é limpa e rápida, sem quebra-quebra, ideal para quem já está com o comércio funcionando."]
    ]
  },
  {
    slug: "forro-modular",
    name: "Forro Modular",
    h1: "Forro Modular em Joinville",
    metaTitle: "Forro Modular em Joinville | Innovare Decorações",
    metaDesc: "Instalação de forro modular em Joinville para ambientes comerciais e corporativos. Acesso fácil à manutenção elétrica e hidráulica. Orçamento grátis.",
    heroImg: "images/12.png",
    heroAlt: "Forro modular instalado em corredor comercial",
    detailImg: "images/old-forro-mineral.jpg",
    detailAlt: "Forro modular em grade metálica",
    intro: [
      "O forro modular é a escolha ideal para ambientes comerciais e corporativos que precisam de fácil acesso à parte elétrica, hidráulica e de ar-condicionado — as placas se encaixam numa estrutura que pode ser aberta a qualquer momento para manutenção.",
      "Instalamos forro modular em lojas, escritórios, clínicas e galpões em Joinville, com estrutura nivelada e acabamento uniforme."
    ],
    benefits: [
      "Acesso fácil para manutenção elétrica, hidráulica e de climatização",
      "Acabamento uniforme e moderno para ambientes comerciais",
      "Boa absorção acústica, reduzindo o ruído do ambiente",
      "Instalação rápida sobre estrutura suspensa"
    ],
    faq: [
      ["O forro modular aguenta luminárias embutidas?", "Sim, a estrutura suporta luminárias, difusores de ar-condicionado e outros equipamentos embutidos no forro."],
      ["É fácil fazer manutenção depois de instalado?", "Sim, essa é uma das maiores vantagens: qualquer placa pode ser removida individualmente para acessar a parte elétrica ou hidráulica."],
      ["Serve para ambientes residenciais também?", "É mais comum em ambientes comerciais e corporativos, mas pode ser usado em áreas técnicas residenciais, como lavanderias e garagens."]
    ]
  },
  {
    slug: "forro-eps",
    name: "Forro EPS",
    h1: "Forro em EPS em Joinville",
    metaTitle: "Forro em EPS em Joinville | Innovare Decorações",
    metaDesc: "Instalação de forro em EPS (isopor) em Joinville, com isolamento térmico eficiente e instalação leve e rápida. Peça seu orçamento grátis.",
    heroImg: "images/13.png",
    heroAlt: "Forro em EPS instalado em galpão",
    detailImg: "images/12.png",
    detailAlt: "Forro em placas modulares",
    intro: [
      "O forro em EPS (poliestireno expandido) é uma solução leve e com ótimo isolamento térmico, muito usada em galpões, lojas e ambientes comerciais que precisam reduzir o calor interno sem pesar na estrutura do telhado.",
      "A instalação é rápida e limpa, e a Innovare cuida de todo o processo, do encaixe das placas ao acabamento final."
    ],
    benefits: [
      "Isolamento térmico eficiente, reduzindo o calor interno",
      "Placas leves, que não sobrecarregam a estrutura do telhado",
      "Instalação rápida e limpa",
      "Boa opção para galpões, lojas e áreas comerciais"
    ],
    faq: [
      ["Forro de EPS é resistente ao fogo?", "Trabalhamos com placas próprias para uso comercial; se sua obra exige um índice específico de resistência ao fogo, nos avise antes do orçamento para indicar a placa certa."],
      ["O EPS ajuda a reduzir o calor dentro do galpão ou loja?", "Sim, esse é o principal benefício do forro em EPS: reduzir a transferência de calor do telhado para o ambiente interno."],
      ["Qual a diferença entre forro EPS e forro modular?", "O EPS é focado em isolamento térmico com placas leves; o modular é mais indicado quando você precisa de acesso fácil para manutenção. Podemos te ajudar a escolher."]
    ]
  },
  {
    slug: "forro-mineral",
    name: "Forro Mineral",
    h1: "Forro Mineral em Joinville",
    metaTitle: "Forro Mineral em Joinville | Innovare Decorações",
    metaDesc: "Instalação de forro mineral em Joinville, com resistência à umidade e ótimo custo-benefício para ambientes comerciais. Orçamento grátis.",
    heroImg: "images/old-forro-mineral.jpg",
    heroAlt: "Forro mineral instalado em ambiente comercial",
    detailImg: "images/13.png",
    detailAlt: "Detalhe de forro em placas",
    intro: [
      "O forro mineral é uma das opções mais usadas em ambientes comerciais por unir bom custo-benefício, resistência à umidade e acabamento uniforme. É uma escolha comum para escritórios, lojas, clínicas e prédios corporativos.",
      "Fazemos a instalação completa da estrutura e das placas, garantindo nivelamento e acabamento sem falhas."
    ],
    benefits: [
      "Ótimo custo-benefício para grandes áreas comerciais",
      "Boa resistência à umidade",
      "Acabamento uniforme e profissional",
      "Compatível com luminárias e sistemas de ar-condicionado embutidos"
    ],
    faq: [
      ["Forro mineral resiste à umidade de banheiros e cozinhas comerciais?", "Sim, é uma das vantagens desse tipo de placa, mas em áreas de umidade muito alta recomendamos avaliar o ambiente antes para indicar a melhor solução."],
      ["Qual o prazo médio de instalação?", "Depende do tamanho do ambiente; em geral, ambientes comerciais de porte médio ficam prontos em poucos dias."],
      ["Dá pra combinar com iluminação embutida?", "Sim, o forro mineral é muito usado justamente por facilitar a instalação de luminárias e difusores de ar embutidos."]
    ]
  },
  {
    slug: "piso-vinilico",
    name: "Piso Vinílico",
    h1: "Instalação de Piso Vinílico em Joinville",
    metaTitle: "Instalação de Piso Vinílico em Joinville | Innovare Decorações",
    metaDesc: "Instalação de piso vinílico em Joinville para residências e empresas. Conforto, praticidade e fácil manutenção. Orçamento grátis com instalação inclusa.",
    heroImg: "images/4.png",
    heroAlt: "Piso vinílico instalado em residência com escada",
    detailImg: "images/4.png",
    detailAlt: "Detalhe do piso vinílico instalado",
    intro: [
      "O piso vinílico é uma das soluções mais procuradas hoje por unir beleza, conforto ao caminhar e manutenção simples — sem o custo e o tempo de obra de um piso tradicional. Fica pronto sobre o contrapiso existente, com acabamento que imita madeira, pedra ou outros materiais.",
      "Instalamos piso vinílico em residências, escritórios e ambientes comerciais em Joinville, sempre com nivelamento correto da base antes da aplicação."
    ],
    benefits: [
      "Conforto térmico e acústico ao caminhar",
      "Fácil manutenção e limpeza no dia a dia",
      "Instalação rápida sobre o piso existente, sem quebra-quebra",
      "Diversos padrões que imitam madeira, pedra e outros acabamentos"
    ],
    faq: [
      ["Piso vinílico pode ser instalado sobre o piso atual?", "Na maioria dos casos sim, desde que a base esteja nivelada e em boas condições. Avaliamos isso na visita técnica."],
      ["Piso vinílico é resistente para ambientes com bastante movimento?", "Sim, existem linhas específicas para uso comercial com maior resistência ao tráfego, que indicamos conforme o seu caso."],
      ["Como é feita a limpeza do piso vinílico?", "A limpeza é simples, com pano úmido e produtos neutros — não precisa de ceras ou tratamentos especiais."]
    ]
  },
  {
    slug: "piso-laminado",
    name: "Piso Laminado",
    h1: "Instalação de Piso Laminado em Joinville",
    metaTitle: "Instalação de Piso Laminado em Joinville | Innovare Decorações",
    metaDesc: "Instalação de piso laminado em Joinville com excelente custo-benefício e acabamento que imita madeira. Orçamento grátis com instalação inclusa.",
    heroImg: "images/old-piso-laminado-pra-casas.jpg",
    heroAlt: "Piso laminado instalado em sala residencial",
    detailImg: "images/old-piso-laminado-pra-casas.jpg",
    detailAlt: "Detalhe do piso laminado",
    intro: [
      "O piso laminado entrega o visual aconchegante da madeira com um custo mais acessível e instalação mais rápida. É uma escolha muito comum para quartos, salas e escritórios que buscam conforto visual sem abrir mão da praticidade.",
      "A Innovare cuida de toda a instalação, incluindo o nivelamento da base e o acabamento com rodapés, deixando o ambiente pronto para uso."
    ],
    benefits: [
      "Visual aconchegante que imita madeira natural",
      "Excelente custo-benefício comparado a pisos de madeira maciça",
      "Instalação rápida e limpa",
      "Boa durabilidade em ambientes residenciais e escritórios"
    ],
    faq: [
      ["Piso laminado pode ser usado em qualquer cômodo?", "É mais indicado para ambientes secos, como quartos, salas e escritórios. Para áreas molhadas, indicamos o piso vinílico."],
      ["Qual a durabilidade do piso laminado?", "Com o uso e manutenção corretos, dura muitos anos — a durabilidade também depende da linha escolhida, que ajudamos a definir no orçamento."],
      ["É preciso preparar o piso antigo antes de instalar?", "Sim, o contrapiso precisa estar nivelado e seco. Fazemos essa avaliação na visita técnica antes de fechar o orçamento."]
    ]
  },
  {
    slug: "manta-homogenea",
    name: "Manta Homogênea",
    h1: "Manta Homogênea (Piso Hospitalar) em Joinville",
    metaTitle: "Manta Homogênea Hospitalar em Joinville | Innovare Decorações",
    metaDesc: "Instalação de manta homogênea (piso hospitalar) em Joinville para hospitais, clínicas e laboratórios. Alta resistência e higiene. Orçamento grátis.",
    heroImg: "images/old-manta-hospitalar-em-joinville.jpg",
    heroAlt: "Manta homogênea hospitalar instalada em corredor",
    detailImg: "images/old-manta-hospitalar-em-joinville.jpg",
    detailAlt: "Detalhe da manta homogênea sem emendas",
    intro: [
      "A manta homogênea é o piso indicado para ambientes que exigem o máximo de controle sanitário, como hospitais, clínicas e laboratórios. A instalação é feita sem emendas visíveis, facilitando a limpeza e reduzindo o acúmulo de sujeira e bactérias.",
      "Trabalhamos com fornecimento e instalação completa em unidades de saúde em Joinville e região, seguindo os requisitos técnicos desse tipo de ambiente."
    ],
    benefits: [
      "Alta resistência a produtos de limpeza hospitalar",
      "Superfície sem emendas, facilitando a higienização",
      "Indicado para ambientes que exigem controle sanitário rígido",
      "Boa resistência ao tráfego intenso de equipamentos e macas"
    ],
    faq: [
      ["Manta homogênea serve só para hospitais?", "É mais usada em hospitais, clínicas e laboratórios, mas também pode ser aplicada em outros ambientes que exigem alta higiene, como indústrias alimentícias."],
      ["A instalação sem emendas é feita como?", "As emendas entre as réguas são soldadas termicamente, criando uma superfície contínua e sem frestas para acúmulo de sujeira."],
      ["Vocês atendem clínicas de pequeno porte também?", "Sim, atendemos desde consultórios e clínicas pequenas até unidades hospitalares maiores."]
    ]
  },
  {
    slug: "carpetes-corporativos",
    name: "Carpetes Corporativos",
    h1: "Instalação de Carpetes Corporativos em Joinville",
    metaTitle: "Instalação de Carpetes Corporativos em Joinville | Innovare Decorações",
    metaDesc: "Instalação de carpetes corporativos em Joinville para escritórios e empresas. Conforto acústico e térmico com acabamento sofisticado. Orçamento grátis.",
    heroImg: "images/1.png",
    heroAlt: "Carpete corporativo instalado em corredor comercial",
    detailImg: "images/1.png",
    detailAlt: "Detalhe do carpete em placas corporativas",
    intro: [
      "O carpete corporativo, instalado em placas, é a escolha de muitas empresas por unir conforto acústico, aparência sofisticada e facilidade de manutenção — inclusive a troca de placas isoladas em caso de dano ou desgaste.",
      "Instalamos carpete em placas para escritórios, recepções e ambientes corporativos em Joinville, com nivelamento correto do piso antes da aplicação."
    ],
    benefits: [
      "Reduz o ruído de passos e conversas no escritório",
      "Conforto térmico em relação a pisos frios",
      "Visual sofisticado para recepções e salas de reunião",
      "Placas trocáveis individualmente em caso de desgaste"
    ],
    faq: [
      ["Carpete em placas é fácil de trocar quando desgasta?", "Sim, essa é uma das grandes vantagens: dá pra trocar só a placa danificada, sem precisar refazer o piso inteiro."],
      ["O carpete corporativo é resistente ao tráfego de um escritório?", "Sim, as placas usadas em ambientes corporativos são desenvolvidas para tráfego intenso e uso diário."],
      ["Como é feita a limpeza do carpete corporativo?", "Aspiração regular e limpeza específica para carpetes resolve a manutenção do dia a dia — orientamos os cuidados após a instalação."]
    ]
  },
  {
    slug: "persianas",
    name: "Persianas",
    h1: "Instalação de Persianas em Joinville",
    metaTitle: "Instalação de Persianas em Joinville | Innovare Decorações",
    metaDesc: "Instalação de persianas em Joinville para residências e escritórios. Controle de luz e privacidade com estilo. Orçamento grátis.",
    heroImg: "images/old-persianas.jpg",
    heroAlt: "Persianas instaladas em escritório",
    detailImg: "images/old-persianas.jpg",
    detailAlt: "Detalhe das persianas instaladas",
    intro: [
      "As persianas dão controle sobre a entrada de luz e a privacidade do ambiente, com um acabamento mais elegante que cortinas comuns. É uma solução usada tanto em residências quanto em escritórios que buscam praticidade no dia a dia.",
      "A Innovare instala persianas sob medida para cada ambiente, com opções de modelos e tecidos que combinam com a decoração do espaço."
    ],
    benefits: [
      "Controle fácil da entrada de luz durante o dia",
      "Mais privacidade para o ambiente",
      "Acabamento elegante, combinando com diferentes estilos de decoração",
      "Fácil manutenção e limpeza"
    ],
    faq: [
      ["Persiana serve pra qualquer tipo de janela?", "Fazemos a medição no local pra indicar o modelo certo conforme o tamanho e o tipo da sua janela."],
      ["Dá pra instalar persiana em escritório com vidro grande?", "Sim, é uma aplicação bem comum — ajuda a controlar a luz e o calor em salas com fachada de vidro."],
      ["Qual a diferença entre os modelos de persiana?", "Existem opções em tecido, PVC e outros materiais, com diferentes níveis de bloqueio de luz. Explicamos as opções na hora do orçamento."]
    ]
  },
  {
    slug: "isolamento-acustico",
    name: "Isolamento Acústico",
    h1: "Isolamento Acústico em Joinville",
    metaTitle: "Isolamento Acústico em Joinville | Innovare Decorações",
    metaDesc: "Instalação de isolamento acústico em Joinville para residências e empresas. Redução de ruído e mais conforto sonoro. Orçamento grátis.",
    heroImg: "images/old-isolamento-acusto-em-joinville.jpg",
    heroAlt: "Isolamento acústico instalado em parede",
    detailImg: "images/old-isolamento-acusto-em-joinville.jpg",
    detailAlt: "Detalhe do painel acústico instalado",
    intro: [
      "O isolamento acústico reduz a passagem de som entre ambientes, trazendo mais conforto tanto em casa quanto no trabalho. É muito usado em estúdios, salas de reunião, consultórios e ambientes comerciais que precisam de mais privacidade sonora.",
      "A Innovare instala painéis e sistemas acústicos combinados com drywall ou aplicados diretamente na parede, conforme a necessidade do ambiente."
    ],
    benefits: [
      "Redução do ruído entre ambientes internos",
      "Mais privacidade sonora para salas de reunião e consultórios",
      "Pode ser combinado com drywall na mesma obra",
      "Melhora o conforto acústico interno do ambiente"
    ],
    faq: [
      ["Isolamento acústico bloqueia o som totalmente?", "Reduz significativamente a passagem de som, mas o nível de bloqueio depende do material e da espessura escolhidos — avaliamos isso conforme sua necessidade."],
      ["Dá pra fazer isolamento acústico numa reforma já pronta?", "Sim, existem soluções que podem ser aplicadas sem precisar quebrar a parede existente."],
      ["Isolamento acústico serve pra home studio ou sala de música?", "Sim, é uma das aplicações mais comuns — ajudamos a definir o melhor sistema pro seu caso."]
    ]
  },
  {
    slug: "gesso-rodapes",
    name: "Gesso & Rodapés",
    h1: "Instalação de Gesso e Rodapés em Joinville",
    metaTitle: "Instalação de Gesso e Rodapés em Joinville | Innovare Decorações",
    metaDesc: "Instalação de sancas de gesso, molduras e rodapés em Joinville, valorizando o acabamento do ambiente. Orçamento grátis com instalação inclusa.",
    heroImg: "images/old-gesso-em-joinville.jpg",
    heroAlt: "Sanca de gesso com iluminação embutida",
    detailImg: "images/old-gesso-em-joinville.jpg",
    detailAlt: "Detalhe do acabamento em gesso",
    intro: [
      "Sancas, molduras e rodapés são detalhes que fazem toda diferença no acabamento final de um ambiente — valorizam a iluminação, escondem fiações e dão um aspecto mais acabado e sofisticado para o espaço.",
      "A Innovare instala gesso e rodapés em residências e ambientes comerciais em Joinville, sempre alinhando o acabamento ao restante do projeto."
    ],
    benefits: [
      "Valoriza a iluminação embutida do ambiente",
      "Esconde fiações e imperfeições no encontro parede-teto",
      "Acabamento mais sofisticado para o projeto",
      "Combina com drywall, forro e outros acabamentos"
    ],
    faq: [
      ["Sanca de gesso combina com forro de drywall?", "Sim, é uma combinação muito comum — instalamos os dois juntos como parte do mesmo projeto."],
      ["Rodapé de gesso é mais caro que o de madeira ou PVC?", "O custo varia conforme o modelo escolhido. Apresentamos as opções e valores no orçamento, conforme o que combina com seu projeto."],
      ["Dá pra fazer sanca com iluminação embutida?", "Sim, é uma das aplicações mais pedidas — já deixamos o espaço preparado para a fiação da iluminação."]
    ]
  },
  {
    slug: "placas-cimenticias",
    name: "Placas Cimentícias",
    h1: "Instalação de Placas Cimentícias em Joinville",
    metaTitle: "Instalação de Placas Cimentícias em Joinville | Innovare Decorações",
    metaDesc: "Instalação de placas cimentícias em Joinville para fachadas e áreas internas ou externas. Solução resistente e versátil. Orçamento grátis.",
    heroImg: "images/old-placas-cimenticias-em-joinville.jpg",
    heroAlt: "Fachada revestida com placas cimentícias",
    detailImg: "images/old-placas-cimenticias-em-joinville.jpg",
    detailAlt: "Detalhe da fachada em placas cimentícias",
    intro: [
      "As placas cimentícias são uma solução resistente e versátil para revestir fachadas e paredes internas ou externas, com um visual moderno e boa resistência à umidade e às condições externas.",
      "A Innovare instala placas cimentícias em residências e empreendimentos comerciais em Joinville, com estrutura de fixação adequada para cada tipo de aplicação."
    ],
    benefits: [
      "Boa resistência à umidade e às condições externas",
      "Visual moderno para fachadas residenciais e comerciais",
      "Pode ser usada em áreas internas e externas",
      "Baixa manutenção ao longo do tempo"
    ],
    faq: [
      ["Placa cimentícia serve para fachada externa?", "Sim, é uma das aplicações mais comuns, por resistir bem à umidade e às variações de temperatura."],
      ["Dá pra usar placa cimentícia em área interna também?", "Sim, funciona bem como revestimento de parede interna com visual diferenciado, tipo industrial ou moderno."],
      ["Qual a manutenção necessária depois de instalada?", "É bem baixa — não exige pintura frequente nem tratamentos especiais, apenas limpeza ocasional."]
    ]
  }
];

const SELECT_VALUE = {
  "drywall": "Drywall",
  "divisorias-navais": "Divisórias Navais",
  "divisorias-eucatex": "Divisórias Eucatex",
  "forro-modular": "Forro Modular / EPS / Mineral",
  "forro-eps": "Forro Modular / EPS / Mineral",
  "forro-mineral": "Forro Modular / EPS / Mineral",
  "piso-vinilico": "Piso Vinílico",
  "piso-laminado": "Piso Laminado",
  "manta-homogenea": "Manta Homogênea",
  "carpetes-corporativos": "Carpete Corporativo",
  "persianas": "Persianas",
  "isolamento-acustico": "Isolamento Acústico",
  "gesso-rodapes": "Gesso / Rodapés",
  "placas-cimenticias": "Placas Cimentícias"
};

const SELECT_OPTIONS = [
  "Drywall", "Divisórias Navais", "Divisórias Eucatex", "Forro Modular / EPS / Mineral",
  "Piso Vinílico", "Piso Laminado", "Manta Homogênea", "Carpete Corporativo",
  "Persianas", "Isolamento Acústico", "Gesso / Rodapés", "Placas Cimentícias", "Outro / Não sei ainda"
];

function serviceSelectHtml(service) {
  const match = SELECT_VALUE[service.slug];
  const opts = SELECT_OPTIONS.map(opt =>
    `<option${opt === match ? " selected" : ""}>${opt}</option>`
  ).join("\n          ");
  return `<option value="" disabled${match ? "" : " selected"}>Selecione um serviço</option>\n          ${opts}`;
}

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function faqJsonLd(service) {
  const items = service.faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  }));
  return JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items }, null, 2);
}

function serviceJsonLd(service) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.h1,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Innovare Decorações & Revestimentos",
      telephone: "+55 47 98929-2335",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Minas Gerais - Nova Brasília",
        addressLocality: "Joinville",
        addressRegion: "SC",
        postalCode: "89214-600",
        addressCountry: "BR"
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "11:30" }
      ]
    },
    areaServed: "Joinville e região",
    url: `${SITE_URL}/servicos/${service.slug}.html`
  }, null, 2);
}

function relatedLinks(current) {
  return SERVICES.filter(s => s.slug !== current.slug)
    .map(s => `<a href="${s.slug}.html">${s.name}</a>`)
    .join("\n        ");
}

function page(service) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<!-- Google Consent Mode v2: padrão negado até o visitante aceitar os cookies -->
<script>
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
  try {
    if (localStorage.getItem('innovare_cookie_consent') === 'accepted') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
  } catch (e) {}
})();
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBQ758QF');</script>
<!-- End Google Tag Manager -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(service.metaTitle)}</title>
<meta name="description" content="${esc(service.metaDesc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/servicos/${service.slug}.html">

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(service.metaTitle)}">
<meta property="og:description" content="${esc(service.metaDesc)}">
<meta property="og:image" content="${SITE_URL}/${service.heroImg}">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="${SITE_URL}/servicos/${service.slug}.html">

<link rel="icon" type="image/png" href="../images/logo.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet" href="../css/styles.css?v=7">

<script type="application/ld+json">
${serviceJsonLd(service)}
</script>
<script type="application/ld+json">
${faqJsonLd(service)}
</script>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBQ758QF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header class="header" id="header">
  <div class="container header__inner">
    <a href="../index.html#top" class="header__logo">
      <img src="../images/logo.png" alt="Innovare Decorações & Revestimentos - Joinville" width="48" height="48">
      <span class="header__logo-text">INNOVARE<small>REVESTIMENTOS &amp; DECORAÇÕES</small></span>
    </a>

    <nav class="header__nav" id="nav">
      <a href="../index.html#servicos">Serviços</a>
      <a href="../index.html#portfolio">Portfólio</a>
      <a href="../index.html#diferenciais">Diferenciais</a>
      <a href="../index.html#faq">Dúvidas</a>
      <a href="../index.html#contato">Contato</a>
    </nav>

    <div class="header__actions">
      <a data-conversao="ligacao" href="tel:+5547989292335" class="btn btn--ghost btn--sm" data-track="call_header">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
        (47) 98929-2335
      </a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary btn--sm" data-track="whatsapp_header">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
        WhatsApp
      </a>
    </div>

    <button class="header__burger" id="burger" aria-label="Abrir menu"><span></span><span></span><span></span></button>
  </div>
</header>

<section class="hero hero--service">
  <div class="hero__media">
    <img src="../${service.heroImg}" alt="${esc(service.heroAlt)}" loading="eager">
    <div class="hero__overlay"></div>
  </div>
  <div class="container hero__content">
    <nav class="breadcrumb reveal" aria-label="breadcrumb">
      <a href="../index.html#top">Início</a> <span>/</span>
      <a href="../index.html#servicos">Serviços</a> <span>/</span>
      <span>${esc(service.name)}</span>
    </nav>
    <p class="eyebrow reveal">Innovare Decorações &amp; Revestimentos · Joinville - SC</p>
    <h1 class="reveal">${esc(service.h1)}</h1>${service.heroSub ? `
    <p class="hero__sub reveal">${esc(service.heroSub)}</p>` : ""}
    <div class="hero__cta reveal">
      <a href="#orcamento" class="btn btn--primary btn--lg" data-track="cta_hero_form">Quero meu Orçamento Grátis</a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--outline btn--lg" data-track="cta_hero_whatsapp">
        <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
        Falar no WhatsApp agora
      </a>
    </div>
  </div>
</section>

<section class="section service-detail">
  <div class="container service-detail__grid">
    <div class="service-detail__media reveal">
      <img src="../${service.detailImg}" alt="${esc(service.detailAlt)}" loading="lazy">
    </div>
    <div>
      <p class="section__eyebrow reveal">${esc(service.name)}</p>
      <h2 class="section__title reveal">${esc(service.detailTitle || service.h1)}</h2>
      ${service.intro.map(p => `<p class="reveal">${esc(p)}</p>`).join("\n      ")}
      <ul class="service-detail__benefits">
        ${service.benefits.map(b => `<li class="reveal"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> ${esc(b)}</li>`).join("\n        ")}
      </ul>
      <a href="#orcamento" class="btn btn--primary btn--lg reveal" data-track="cta_detail">Solicitar Orçamento Grátis</a>
    </div>
  </div>
</section>

<section id="orcamento" class="section orcamento">
  <div class="container orcamento__grid">
    <div class="orcamento__info reveal">
      <p class="section__eyebrow section__eyebrow--light">Orçamento grátis</p>
      <h2>Peça agora sua proposta sem compromisso</h2>
      <p>Preencha o formulário e fale diretamente com nossa equipe pelo WhatsApp. Atendemos Joinville e região.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Resposta rápida pelo WhatsApp</li>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Visita técnica agendada</li>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Orçamento sem compromisso</li>
      </ul>
      <a data-conversao="ligacao" href="tel:+5547989292335" class="orcamento__phone">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
        (47) 98929-2335
      </a>
    </div>

    <form class="orcamento__form reveal" id="leadForm">
      <h3>Solicitar orçamento</h3>
      <label class="hp-field" aria-hidden="true">Deixe em branco
        <input type="text" name="website" tabindex="-1" autocomplete="off">
      </label>
      <label>Nome
        <input type="text" name="nome" placeholder="Seu nome completo" required>
      </label>
      <label>WhatsApp
        <input type="tel" name="telefone" placeholder="(47) 99999-9999" required>
      </label>
      <label>Serviço de interesse
        <select name="servico" required>
          ${serviceSelectHtml(service)}
        </select>
      </label>
      <label>Conte um pouco sobre o projeto
        <textarea name="mensagem" rows="3" placeholder="Ex: preciso de ${esc(service.name.toLowerCase())} para um ambiente de 30m²"></textarea>
      </label>
      <button type="submit" class="btn btn--primary btn--lg" data-track="cta_form_submit">Enviar e receber orçamento</button>
      <p class="orcamento__form-note">Ao enviar, você será direcionado ao WhatsApp da Innovare para finalizar seu pedido.</p>
    </form>
  </div>
</section>

<section class="section faq">
  <div class="container">
    <p class="section__eyebrow reveal">Dúvidas frequentes</p>
    <h2 class="section__title reveal">Perguntas sobre ${esc(service.name)}</h2>
    <div class="faq__list">
      ${service.faq.map(([q, a], i) => `<details class="faq__item reveal"${i === 0 ? " open" : ""}>
        <summary>${esc(q)}</summary>
        <p>${esc(a)}</p>
      </details>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="related-services">
  <div class="container">
    <p class="section__eyebrow reveal">Outros serviços</p>
    <h2 class="section__title reveal">Também trabalhamos com</h2>
    <div class="related-services__grid reveal">
      ${relatedLinks(service)}
    </div>
  </div>
</section>

<section class="cta-final">
  <div class="container cta-final__inner reveal">
    <h2>Pronto para transformar seu espaço?</h2>
    <p>Fale agora com a Innovare Decorações &amp; Revestimentos e peça seu orçamento gratuito.</p>
    <div class="cta-final__buttons">
      <a href="#orcamento" class="btn btn--primary btn--lg" data-track="cta_final_form">Solicitar Orçamento Grátis</a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--outline-light btn--lg" data-track="cta_final_whatsapp">Chamar no WhatsApp</a>
    </div>
  </div>
</section>

<footer class="footer" id="contato">
  <div class="container footer__grid">
    <div>
      <img src="../images/logo.png" alt="Innovare Decorações & Revestimentos" width="64" height="64" class="footer__logo">
      <p>Especialistas em revestimentos e decoração com instalação profissional inclusa em Joinville e região.</p>
      <a href="https://www.instagram.com/innovaredecoracoes/" target="_blank" rel="noopener" class="footer__social">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/></svg>
        @innovaredecoracoes
      </a>
    </div>
    <div>
      <h4>Contato</h4>
      <p><a data-conversao="ligacao" href="tel:+5547989292335">(47) 98929-2335</a></p>
      <p>R. Minas Gerais - Nova Brasília,<br>Joinville - SC, 89214-600</p>
      <p>Horário de Atendimento<br>Seg à Sex - 07h30 às 18h00<br>Sáb - 08h00 às 11h30</p>
    </div>
    <div>
      <h4>Serviços</h4>
      <p>Drywall · Divisórias · Forros<br>Piso Vinílico · Piso Laminado<br>Carpetes · Persianas · Gesso</p>
    </div>
    <div class="footer__map">
      <iframe
        title="Localização Innovare Decorações Joinville"
        src="https://www.google.com/maps?q=R.+Minas+Gerais,+Nova+Brasília,+Joinville+-+SC,+89214-600&output=embed"
        width="100%" height="180" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div class="container footer__bottom">
    <p>© <span id="year"></span> Innovare Decorações &amp; Revestimentos. Todos os direitos reservados.</p>
  </div>
</footer>

<a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="float-whatsapp" data-track="whatsapp_float" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
</a>

<div class="mobile-bar">
  <a data-conversao="ligacao" href="tel:+5547989292335" class="mobile-bar__btn mobile-bar__btn--call" data-track="call_mobilebar">
    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
    Ligar
  </a>
  <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="mobile-bar__btn mobile-bar__btn--whatsapp" data-track="whatsapp_mobilebar">
    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
    WhatsApp
  </a>
</div>

<script src="../js/main.js?v=3"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, "..", "servicos");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

SERVICES.forEach(service => {
  const html = page(service);
  fs.writeFileSync(path.join(outDir, `${service.slug}.html`), html, "utf8");
  console.log("Gerado:", service.slug + ".html");
});

console.log(`\n${SERVICES.length} páginas geradas em /servicos`);
