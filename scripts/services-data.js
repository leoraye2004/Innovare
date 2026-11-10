// Dados dos serviços. Este arquivo alimenta: as páginas de /servicos, os cards da home,
// o campo "Serviço de interesse" dos formulários e o sitemap (tudo gerado por build-services.js).

const PRECO_FIM = "Para saber quanto custa, enviamos o orçamento grátis e sem compromisso. Como o fornecimento e a instalação já estão inclusos, o orçamento considera tudo em um só valor.";

const ICON = {
  drywall: '<path fill="currentColor" d="M4 3h16v18H4zm2 2v14h2V5zm4 0v14h2V5zm4 0v14h2V5zm4 0v14h2V5z"/>',
  vidro: '<path fill="currentColor" d="M3 4h18v4H3zm0 6h11v4H3zm0 6h18v4H3zm13-6h5v4h-5z"/>',
  eucatex: '<path fill="currentColor" d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/>',
  forros: '<path fill="currentColor" d="M2 20h20v2H2zM4 4h16v2H4zm2 4h12v10H6z" opacity=".55"/><path fill="currentColor" d="M4 4h16v2H4z"/>',
  vinilico: '<path fill="currentColor" d="M2 18l4-8 4 5 3-4 5 7z"/>',
  laminado: '<path fill="currentColor" d="M3 21l6-6 4 4 8-8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  manta: '<path fill="currentColor" d="M12 2l9 4.5v11L12 22l-9-4.5v-11z" opacity=".5"/><path fill="currentColor" d="M12 2l9 4.5-9 4.5-9-4.5z"/>',
  carpete: '<path fill="currentColor" d="M3 3h18v2H3zm0 4h18v14H3zm2 2v3h14V9zm0 5v3h14v-3z"/>',
  persianas: '<path fill="currentColor" d="M3 4h18v2H3zm0 3h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2zm3 3v7m4-7v7m4-7v7m4-7v7" stroke="currentColor" stroke-width="1.6" fill="none"/>',
  cortinas: '<path fill="currentColor" d="M3 3h18v2H3zm1 3h5c0 6-1 11-2 15H4zm7 0h2c0 6 .5 11 1 15h-4c.5-4 1-9 1-15zm4 0h5v15h-3c-1-4-2-9-2-15z"/>',
  isolamento: '<path fill="currentColor" d="M12 3a4 4 0 014 4c0 1.5-.8 2.4-1.6 3.2-.6.6-1 1.1-1.2 1.8h-2.4c-.2-.7-.6-1.2-1.2-1.8C8.8 9.4 8 8.5 8 7a4 4 0 014-4zM9 14h6v2H9zm1 3h4v2h-4z"/>',
  baffles: '<path fill="currentColor" d="M3 4h18v2H3zM6 8h3v9H6zm4.5 0h3v12h-3zM15 8h3v9h-3z"/>',
  mobiliario: '<path fill="currentColor" d="M3 8h18v2H3zm2 2h2v9H5zm12 0h2v9h-2zM9 12h6v2H9z"/>'
};

const SERVICES = [
  {
    slug: "drywall",
    name: "Drywall",
    selectLabel: "Drywall",
    h1: "Drywall em Joinville com Material e Instalação",
    heroSub: "Paredes, forros e divisórias prontos para pintar, com equipe própria do início ao acabamento.",
    detailTitle: "Paredes, forros e divisórias em drywall",
    topics: [
      { title: "Parede de drywall", text: "Construímos paredes de drywall para criar novos ambientes, fechar vãos ou dividir salas, quartos e escritórios. A parede fica pronta em poucos dias, sem quebra-quebra e com acabamento pronto para pintar. Material e instalação inclusos, em Joinville e região." },
      { title: "Forro de drywall", text: "Forro e rebaixamento de teto em drywall para esconder tubulações, embutir iluminação e deixar o ambiente mais moderno. Instalação limpa e rápida, com acabamento liso para pintura." },
      { title: "Divisória de drywall", text: "Divisórias para escritórios, lojas e clínicas, com possibilidade de isolamento acústico. Ideal para reorganizar o espaço sem obra pesada e sem parar o seu negócio." }
    ],
    metaDesc: "Drywall em Joinville com material e instalação inclusos: paredes, forros e divisórias prontos para pintar, feitos por equipe própria. Peça seu orçamento grátis.",
    heroImg: "images/servicos/drywall-hero.webp",
    heroAlt: "Corredor com paredes e forro em drywall",
    detailImg: "images/servicos/drywall-detail.webp",
    detailAlt: "Corredor com paredes e forro em drywall",
    card: { img: "images/servicos/drywall-card.webp", alt: "Corredor com paredes e forro em drywall", desc: "Paredes e ambientes planejados com rapidez de execução e acabamento moderno.", icon: ICON.drywall },
    intro: [
      "O drywall é hoje uma das soluções mais usadas para criar e dividir ambientes com rapidez, sem a sujeira e o tempo de uma obra em alvenaria tradicional. Na Innovare, o fornecimento e a instalação são feitos por equipe própria, do início ao acabamento — nunca vendemos só o material.",
      "Trabalhamos com drywall em residências, escritórios, lojas, clínicas e ambientes corporativos em Joinville e região, sempre com estrutura reforçada e acabamento pronto para pintura."
    ],
    benefits: [
      "Execução rápida, com menos sujeira e entulho que a alvenaria",
      "Acabamento liso e moderno, pronto para pintura",
      "Bom isolamento térmico e acústico entre ambientes",
      "Flexível para criar salas, sancas, nichos e forros sob medida"
    ],
    faq: [
      ["Qual o preço do drywall em Joinville?", "O preço depende da metragem (m²), do tipo de placa e da estrutura da parede ou do forro. " + PRECO_FIM],
      ["Quanto tempo leva para instalar uma parede de drywall?", "Depende do tamanho do ambiente, mas costuma ser bem mais rápido que uma parede de alvenaria — muitos projetos ficam prontos em poucos dias."],
      ["Parede de drywall aguenta pendurar TV e prateleira?", "Sim. A fixação é feita nos montantes da estrutura metálica interna, e nossa equipe já planeja esses pontos de reforço durante a instalação."],
      ["Drywall isola bem o som entre os ambientes?", "Isola, principalmente quando combinado com manta acústica ou lã de vidro no miolo da parede — uma opção que também fornecemos e instalamos."],
      ["Drywall e gesso acartonado são a mesma coisa?", "Sim. Drywall é o nome em inglês do gesso acartonado, o sistema de placas sobre estrutura metálica usado para paredes, forros e divisórias."],
      ["O que dá para fazer com drywall?", "Além da parede de drywall, fazemos forro de drywall, sancas, nichos e divisória de drywall para escritórios, lojas e residências."]
    ]
  },
  {
    slug: "divisorias-de-vidro",
    name: "Divisórias de vidro",
    selectLabel: "Divisórias de vidro",
    h1: "Divisórias de vidro em Joinville com material e instalação",
    detailTitle: "Divisórias de vidro para escritórios e empresas",
    metaDesc: "Divisórias de vidro para escritórios e empresas em Joinville: visual moderno, luz natural, fornecimento e instalação profissional. Peça seu orçamento grátis.",
    heroImg: "images/servicos/divisorias-de-vidro-hero.webp",
    heroAlt: "Salas de reunião separadas por divisórias de vidro com estrutura preta",
    detailImg: "images/servicos/divisorias-de-vidro-detail.webp",
    detailAlt: "Salas de reunião separadas por divisórias de vidro com estrutura preta",
    card: { img: "images/servicos/divisorias-de-vidro-card.webp", alt: "Divisórias de vidro com perfis pretos em escritório corporativo", desc: "Visual moderno e luz natural entre os ambientes, com estrutura resistente para escritórios e empresas.", icon: ICON.vidro },
    intro: [
      "As divisórias de vidro criam salas de reunião, escritórios e recepções com visual moderno, sem perder a entrada de luz natural entre os ambientes. A estrutura em alumínio garante resistência, e o vidro pode ser liso ou receber película e jateamento para dar privacidade.",
      "A Innovare projeta, fornece e instala as divisórias sob medida para o seu espaço, com acabamento alinhado à identidade da empresa."
    ],
    benefits: [
      "Visual moderno e profissional para escritórios, recepções e salas de reunião",
      "Estrutura em alumínio resistente, com vidro liso, jateado ou com película",
      "Mantém a luz natural circulando entre os ambientes",
      "Fácil de reconfigurar se a empresa precisar mudar o layout no futuro"
    ],
    faq: [
      ["Qual o preço da divisória de vidro em Joinville?", "O preço depende do tamanho do ambiente, do tipo de vidro e dos acabamentos, como portas e películas. " + PRECO_FIM],
      ["A divisória de vidro é resistente para uso comercial intenso?", "Sim, a estrutura em alumínio é reforçada para suportar o uso diário em ambientes corporativos."],
      ["Dá para reformar o layout do escritório depois de instalado?", "Sim, as divisórias são modulares, o que facilita remanejar ou ampliar os ambientes futuramente."],
      ["Vocês atendem empresas de qualquer porte em Joinville?", "Atendemos desde pequenos escritórios até empresas maiores, sempre com projeto, fornecimento e instalação profissional inclusos."],
      ["Divisória naval é o mesmo que divisória de vidro?", "A divisória naval é o sistema com estrutura de alumínio. O fechamento pode ser em vidro (divisória de vidro) ou em painel, e é a opção mais usada como divisória corporativa em escritórios."]
    ]
  },
  {
    slug: "divisorias-eucatex",
    name: "Divisórias Eucatex",
    selectLabel: "Divisórias Eucatex",
    h1: "Divisórias Eucatex em Joinville com material e instalação",
    detailTitle: "Divisórias Eucatex em Joinville",
    metaDesc: "Divisórias Eucatex para escritórios e comércios em Joinville, com ótimo custo-benefício, fornecimento e instalação profissional. Solicite seu orçamento grátis.",
    heroImg: "images/old-divisorias.webp",
    heroAlt: "Divisórias Eucatex instaladas em escritório",
    detailImg: "images/6.webp",
    detailAlt: "Ambiente corporativo dividido com painéis",
    card: { img: "images/old-divisorias.webp", alt: "Divisórias Eucatex em escritório", desc: "Solução prática para dividir ambientes comerciais com custo-benefício.", icon: ICON.eucatex },
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
      ["Qual o preço da divisória Eucatex em Joinville?", "O preço depende da metragem, do tipo de painel e da quantidade de portas. " + PRECO_FIM],
      ["Divisória Eucatex serve para qualquer tipo de ambiente?", "É mais indicada para ambientes comerciais internos, como salas, consultórios e escritórios que precisam de divisão rápida e econômica."],
      ["Qual a diferença entre divisória Eucatex e divisória de vidro?", "A Eucatex tem custo mais baixo e acabamento mais simples; a de vidro usa alumínio e vidro, com visual mais sofisticado e mais luz natural. Ajudamos a escolher a melhor opção pro seu projeto."],
      ["A instalação suja ou danifica o ambiente existente?", "Não. A instalação é limpa e rápida, sem quebra-quebra, ideal para quem já está com o comércio funcionando."],
      ["A divisória Eucatex serve para escritório e sala comercial?", "Sim. É muito usada como divisória para escritório, consultório e sala comercial, quando se quer dividir o espaço com rapidez e bom custo-benefício."]
    ]
  },
  {
    slug: "forros-modulares",
    name: "Forros Modulares",
    anchor: "servico-forros",
    selectLabel: "Forros Modulares (mineral, EPS, Gyprex)",
    h1: "Forros modulares em Joinville com fornecimento e instalação",
    detailTitle: "Forro modular: mineral, EPS e Gyprex",
    metaDesc: "Forros modulares em Joinville: mineral, EPS e Gyprex, com fornecimento e instalação inclusos. Mesma estrutura metálica e orçamento grátis.",
    heroImg: "images/servicos/forros-hero.webp",
    heroAlt: "Sala de reunião com forro em placas e luminárias embutidas",
    detailImg: "images/servicos/forros-detail.webp",
    detailAlt: "Salão comercial com forro em placas e iluminação embutida",
    card: { img: "images/servicos/forros-card.webp", alt: "Forro em placas com luminárias embutidas em sala de reunião", desc: "Forro modular com placas minerais, EPS ou Gyprex, sobre a mesma estrutura metálica e com acabamento uniforme.", icon: ICON.forros },
    topicsCols: 2,
    topics: [
      { title: "Forro modular", img: "images/12.webp", alt: "Forro modular em corredor comercial", text: "É a estrutura metálica suspensa onde as placas se encaixam, e é a mesma para todos os tipos de forro. As placas podem ser retiradas a qualquer momento, o que facilita a manutenção elétrica, hidráulica e de ar-condicionado." },
      { title: "Forro mineral", img: "images/old-forro-mineral.webp", alt: "Forro mineral em ambiente comercial", text: "Placa com ótimo custo-benefício, boa resistência à umidade e acabamento uniforme, com absorção de som que ajuda no conforto acústico de escritórios e salas comerciais." },
      { title: "Forro EPS", img: "images/13.webp", alt: "Forro EPS em galpão", text: "Placa leve em EPS (isopor) com isolamento térmico, indicada para galpões e lojas que precisam reduzir o calor sem pesar na estrutura do telhado." },
      { title: "Forro Gyprex", text: "Placa de gesso revestida com PVC, de acabamento liso e fácil de limpar, muito usada em escritórios, clínicas e ambientes que pedem mais higiene. Também é removível e usa a mesma estrutura metálica." }
    ],
    intro: [
      "Na Innovare, o forro modular é uma única categoria: o forro mineral, o forro EPS e o forro Gyprex usam basicamente o mesmo sistema, uma estrutura metálica suspensa que recebe placas encaixadas. O que muda de um para o outro é o material da placa, e não a forma de instalar.",
      "Fazemos o fornecimento e a instalação completa da estrutura e das placas em lojas, escritórios, clínicas, galpões e prédios corporativos em Joinville e região, com nivelamento correto e acabamento uniforme."
    ],
    benefits: [
      "Mineral, EPS e Gyprex com um único orçamento e uma única equipe",
      "Mesma estrutura metálica para todas as placas: muda o material, não a instalação",
      "Acabamento uniforme e profissional, com estrutura nivelada",
      "Compatível com luminárias e sistemas de ar-condicionado embutidos"
    ],
    faq: [
      ["Qual o preço do forro modular em Joinville?", "O preço depende do tipo de placa (mineral, EPS ou Gyprex), da metragem (m²) e da iluminação embutida. " + PRECO_FIM],
      ["Qual a diferença entre forro mineral, forro EPS e forro Gyprex?", "Os três são forros modulares e usam basicamente a mesma estrutura metálica suspensa; o que muda é o material da placa. O mineral tem boa absorção de som e resistência à umidade, o EPS é de isopor e voltado ao isolamento térmico, e o Gyprex é de gesso com revestimento em PVC e acabamento liso. Na visita técnica indicamos o melhor para o seu caso."],
      ["A instalação muda de um tipo de forro para outro?", "Não. O sistema é o mesmo: estrutura metálica suspensa com placas encaixadas. Muda apenas o material da placa."],
      ["Forro modular e forro removível são a mesma coisa?", "Sim. Também chamado de forro removível, ele usa placas que se encaixam numa estrutura e podem ser retiradas para manutenção. Os módulos mais comuns têm cerca de 60x60 cm (forro 60x60); a medida exata depende do material escolhido."],
      ["Forro de EPS é o mesmo que forro de isopor?", "Sim. EPS é o nome técnico do isopor. O forro de isopor (EPS) funciona como forro térmico, reduzindo o calor que vem do telhado para dentro do ambiente."],
      ["O forro mineral também é um forro acústico?", "Ele ajuda na absorção do som, por isso é bastante usado como forro acústico em escritórios e salas comerciais. Os módulos mais comuns têm cerca de 60x60 cm (forro mineral 60x60)."],
      ["O que é o forro Gyprex?", "É um forro modular de placas de gesso revestidas com PVC, de acabamento liso. Ele é instalado sobre a mesma estrutura metálica dos outros forros modulares e pode ser removido para manutenção."],
      ["O forro aguenta luminárias embutidas?", "Sim, a estrutura suporta luminárias, difusores de ar-condicionado e outros equipamentos embutidos no forro."]
    ]
  },
  {
    slug: "piso-vinilico",
    name: "Piso Vinílico",
    selectLabel: "Piso Vinílico",
    h1: "Piso vinílico em Joinville com material e instalação",
    detailTitle: "Venda e instalação de piso vinílico em Joinville",
    metaDesc: "Venda e instalação de piso vinílico em Joinville para residências e empresas. Conforto, praticidade e fácil manutenção. Orçamento grátis.",
    heroImg: "images/servicos/piso-vinilico-hero.webp",
    heroAlt: "Escritório com piso vinílico amadeirado instalado",
    detailImg: "images/servicos/piso-vinilico-detail.webp",
    detailAlt: "Canto de refeição com piso vinílico amadeirado",
    card: { img: "images/servicos/piso-vinilico-card.webp", alt: "Piso vinílico amadeirado em ambiente corporativo", desc: "Conforto, praticidade e beleza em um só revestimento, com fácil manutenção.", icon: ICON.vinilico },
    intro: [
      "O piso vinílico é uma das soluções mais procuradas hoje por unir beleza, conforto ao caminhar e manutenção simples — sem o custo e o tempo de obra de um piso tradicional. Fica pronto sobre o contrapiso existente, com acabamento que imita madeira, pedra ou outros materiais.",
      "Vendemos e instalamos piso vinílico em residências, escritórios e ambientes comerciais em Joinville, sempre com nivelamento correto da base antes da aplicação."
    ],
    benefits: [
      "Conforto térmico e acústico ao caminhar",
      "Fácil manutenção e limpeza no dia a dia",
      "Instalação rápida sobre o piso existente, sem quebra-quebra",
      "Diversos padrões que imitam madeira, pedra e outros acabamentos"
    ],
    faq: [
      ["Qual o preço do piso vinílico em Joinville?", "O preço depende da metragem (m²), da linha escolhida e das condições do contrapiso. " + PRECO_FIM],
      ["Piso vinílico pode ser instalado sobre o piso atual?", "Na maioria dos casos sim, desde que a base esteja nivelada e em boas condições. Avaliamos isso na visita técnica."],
      ["Piso vinílico é resistente para ambientes com bastante movimento?", "Sim, existem linhas específicas para uso comercial com maior resistência ao tráfego, que indicamos conforme o seu caso."],
      ["Como é feita a limpeza do piso vinílico?", "A limpeza é simples, com pano úmido e produtos neutros — não precisa de ceras ou tratamentos especiais."],
      ["Vocês fazem a colocação do piso vinílico?", "Sim. Vendemos o piso e fazemos a colocação (instalação): nossa equipe prepara a base, instala o piso e faz o acabamento, sem você precisar contratar outro profissional."]
    ]
  },
  {
    slug: "piso-laminado",
    name: "Piso Laminado",
    selectLabel: "Piso Laminado",
    h1: "Piso laminado em Joinville com material e instalação",
    detailTitle: "Venda e instalação de piso laminado em Joinville",
    metaDesc: "Venda e instalação de piso laminado em Joinville com excelente custo-benefício e acabamento que imita madeira. Orçamento grátis.",
    heroImg: "images/old-piso-laminado-pra-casas.webp",
    heroAlt: "Piso laminado instalado em sala residencial",
    detailImg: "images/old-piso-laminado-pra-casas.webp",
    detailAlt: "Detalhe do piso laminado",
    card: { img: "images/old-piso-laminado-pra-casas.webp", alt: "Piso laminado instalado em sala residencial", desc: "Beleza e praticidade com excelente custo-benefício para qualquer ambiente.", icon: ICON.laminado },
    intro: [
      "O piso laminado entrega o visual aconchegante da madeira com um custo mais acessível e instalação mais rápida. É uma escolha muito comum para quartos, salas e escritórios que buscam conforto visual sem abrir mão da praticidade.",
      "A Innovare vende e instala o piso laminado, cuidando do nivelamento da base e do acabamento com rodapés, deixando o ambiente pronto para uso."
    ],
    benefits: [
      "Visual aconchegante que imita madeira natural",
      "Excelente custo-benefício comparado a pisos de madeira maciça",
      "Instalação rápida e limpa",
      "Boa durabilidade em ambientes residenciais e escritórios"
    ],
    faq: [
      ["Qual o preço do piso laminado em Joinville?", "O preço depende da metragem (m²), da linha escolhida e das condições do contrapiso. " + PRECO_FIM],
      ["Piso laminado pode ser usado em qualquer cômodo?", "É mais indicado para ambientes secos, como quartos, salas e escritórios. Para áreas molhadas, indicamos o piso vinílico."],
      ["Qual a durabilidade do piso laminado?", "Com o uso e manutenção corretos, dura muitos anos — a durabilidade também depende da linha escolhida, que ajudamos a definir no orçamento."],
      ["É preciso preparar o piso antigo antes de instalar?", "Sim, o contrapiso precisa estar nivelado e seco. Fazemos essa avaliação na visita técnica antes de fechar o orçamento."],
      ["Vocês fazem a colocação do piso laminado?", "Sim. Vendemos o piso e fazemos a colocação (instalação), com nivelamento da base e acabamento com rodapés, deixando o ambiente pronto para uso."]
    ]
  },
  {
    slug: "manta-homogenea",
    name: "Manta Homogênea",
    selectLabel: "Manta Homogênea",
    h1: "Manta homogênea hospitalar em Joinville com material e instalação",
    titleShort: "Manta homogênea hospitalar em Joinville com instalação",
    detailTitle: "Manta Homogênea (Piso Hospitalar) em Joinville",
    metaDesc: "Venda e instalação de manta homogênea (piso hospitalar) em Joinville para hospitais, clínicas e laboratórios. Alta resistência e higiene.",
    heroImg: "images/old-manta-hospitalar-em-joinville.webp",
    heroAlt: "Manta homogênea hospitalar instalada em corredor",
    detailImg: "images/old-manta-hospitalar-em-joinville.webp",
    detailAlt: "Detalhe da manta homogênea sem emendas",
    card: { img: "images/old-manta-hospitalar-em-joinville.webp", alt: "Manta homogênea hospitalar instalada em corredor", desc: "Piso de alta resistência e higiene, ideal para hospitais, clínicas e laboratórios.", icon: ICON.manta },
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
      ["Qual o preço da manta homogênea em Joinville?", "O preço depende da metragem (m²), da espessura da manta e do tipo de ambiente. " + PRECO_FIM],
      ["Manta homogênea serve só para hospitais?", "É mais usada em hospitais, clínicas e laboratórios, mas também pode ser aplicada em outros ambientes que exigem alta higiene, como indústrias alimentícias."],
      ["A instalação sem emendas é feita como?", "As emendas entre as réguas são soldadas termicamente, criando uma superfície contínua e sem frestas para acúmulo de sujeira."],
      ["Vocês atendem clínicas de pequeno porte também?", "Sim, atendemos desde consultórios e clínicas pequenas até unidades hospitalares maiores."],
      ["A manta homogênea serve como piso para clínica e consultório?", "Sim. Além de hospital, a manta homogênea é indicada como piso para clínica, consultório e laboratório, onde a limpeza e a higiene fazem diferença."]
    ]
  },
  {
    slug: "carpetes-corporativos",
    name: "Carpetes Corporativos",
    anchor: "servico-carpetes",
    selectLabel: "Carpete Corporativo",
    h1: "Carpetes corporativos em Joinville com material e instalação",
    detailTitle: "Venda e instalação de carpetes corporativos em Joinville",
    metaDesc: "Venda e instalação de carpetes corporativos em Joinville para escritórios e empresas. Conforto acústico e térmico. Orçamento grátis.",
    heroImg: "images/servicos/carpetes-corporativos-hero.webp",
    heroAlt: "Escritório amplo com carpete em placas e divisórias de vidro",
    detailImg: "images/servicos/carpetes-corporativos-detail.webp",
    detailAlt: "Corredor com carpete em placas azul instalado",
    card: { img: "images/servicos/carpetes-corporativos-card.webp", alt: "Corredor com carpete em placas azul", desc: "Conforto acústico e térmico com sofisticação para ambientes empresariais.", icon: ICON.carpete },
    intro: [
      "O carpete corporativo, instalado em placas, é a escolha de muitas empresas por unir conforto acústico, aparência sofisticada e facilidade de manutenção — inclusive a troca de placas isoladas em caso de dano ou desgaste.",
      "Vendemos e instalamos carpete em placas para escritórios, recepções e ambientes corporativos em Joinville, com nivelamento correto do piso antes da aplicação."
    ],
    benefits: [
      "Reduz o ruído de passos e conversas no escritório",
      "Conforto térmico em relação a pisos frios",
      "Visual sofisticado para recepções e salas de reunião",
      "Placas trocáveis individualmente em caso de desgaste"
    ],
    faq: [
      ["Qual o preço do carpete corporativo em Joinville?", "O preço depende da metragem (m²) e da linha de placas escolhida. " + PRECO_FIM],
      ["Carpete em placas é fácil de trocar quando desgasta?", "Sim, essa é uma das grandes vantagens: dá pra trocar só a placa danificada, sem precisar refazer o piso inteiro."],
      ["O carpete corporativo é resistente ao tráfego de um escritório?", "Sim, as placas usadas em ambientes corporativos são desenvolvidas para tráfego intenso e uso diário."],
      ["Como é feita a limpeza do carpete corporativo?", "Aspiração regular e limpeza específica para carpetes resolve a manutenção do dia a dia — orientamos os cuidados após a instalação."],
      ["Carpete modular e carpete em placas são a mesma coisa?", "Sim. O carpete modular é o carpete em placas, a opção mais usada como carpete para escritório: se uma placa desgasta ou mancha, dá para trocar só ela."]
    ]
  },
  {
    slug: "persianas",
    name: "Persianas",
    selectLabel: "Persianas",
    h1: "Persianas em Joinville com venda e instalação",
    detailTitle: "Venda e instalação de persianas em Joinville",
    metaDesc: "Venda e instalação de persianas em Joinville para residências e escritórios. Controle de luz e privacidade com estilo. Orçamento grátis.",
    heroImg: "images/servicos/persianas-hero.webp",
    heroAlt: "Persianas rolô instaladas em sala de reunião",
    detailImg: "images/servicos/persianas-detail.webp",
    detailAlt: "Persianas rolô instaladas em sala de reunião",
    card: { img: "images/servicos/persianas-card.webp", alt: "Persianas rolô instaladas em sala de reunião", desc: "Controle de luz e privacidade com estilo, funcionais para qualquer ambiente.", icon: ICON.persianas },
    intro: [
      "As persianas dão controle sobre a entrada de luz e a privacidade do ambiente, com um acabamento mais elegante que cortinas comuns. É uma solução usada tanto em residências quanto em escritórios que buscam praticidade no dia a dia.",
      "A Innovare vende e instala persianas sob medida: você escolhe o modelo e o tecido, e nossa equipe cuida da medição, do fornecimento e da instalação, deixando tudo alinhado e pronto para uso."
    ],
    benefits: [
      "Controle fácil da entrada de luz durante o dia",
      "Mais privacidade para o ambiente",
      "Acabamento elegante, combinando com diferentes estilos de decoração",
      "Fácil manutenção e limpeza",
      "Venda e instalação com a mesma equipe, sem precisar contratar outro profissional"
    ],
    faq: [
      ["Qual o preço da persiana em Joinville?", "O preço depende do tamanho de cada janela, do modelo e do tecido. " + PRECO_FIM],
      ["Persiana serve pra qualquer tipo de janela?", "Fazemos a medição no local pra indicar o modelo certo conforme o tamanho e o tipo da sua janela."],
      ["Vocês vendem e instalam a persiana?", "Sim. Vendemos a persiana sob medida e fazemos a instalação, sem você precisar contratar outro profissional."],
      ["Dá pra instalar persiana em escritório com vidro grande?", "Sim, é uma aplicação bem comum — ajuda a controlar a luz e o calor em salas com fachada de vidro."],
      ["Qual a diferença entre os modelos de persiana?", "Existem opções em tecido, PVC e outros materiais, com diferentes níveis de bloqueio de luz. Explicamos as opções na hora do orçamento."],
      ["Quais modelos de persiana vocês vendem e instalam?", "Vendemos e instalamos persianas sob medida, como persiana rolô e persiana vertical, para residências e escritórios. Apresentamos as opções de modelo e tecido no orçamento."]
    ]
  },
  {
    slug: "cortinas",
    name: "Cortinas",
    selectLabel: "Cortinas",
    h1: "Cortinas em Joinville com material e instalação",
    detailTitle: "Cortinas sob medida para casas e escritórios",
    metaDesc: "Cortinas sob medida em Joinville para residências e escritórios, com material e instalação. Conforto, privacidade e elegância. Orçamento grátis.",
    heroImg: "images/servicos/cortinas-hero.webp",
    heroAlt: "Cortina de tecido de piso a teto em quarto",
    detailImg: "images/servicos/cortinas-detail.webp",
    detailAlt: "Detalhe do caimento de cortina em tecido",
    card: { img: "images/servicos/cortinas-card.webp", alt: "Cortina de tecido de piso a teto em quarto", desc: "Cortinas sob medida para dar conforto, privacidade e elegância a casas e escritórios.", icon: ICON.cortinas },
    intro: [
      "As cortinas dão conforto, privacidade e elegância ao ambiente, além de ajudar a controlar a entrada de luz. Com tecido, caimento e trilho escolhidos para o seu espaço, elas completam a decoração de quartos, salas e escritórios.",
      "A Innovare cuida da medição, do fornecimento do material e da instalação, para que a cortina fique alinhada, com o caimento correto e pronta para uso."
    ],
    benefits: [
      "Mais privacidade e conforto para quartos, salas e escritórios",
      "Controle da entrada de luz e do calor durante o dia",
      "Tecidos e acabamentos que combinam com o estilo da decoração",
      "Medição, fornecimento e instalação feitos por equipe própria, com caimento correto"
    ],
    faq: [
      ["Qual o preço da cortina em Joinville?", "O preço depende do tamanho da janela ou da parede, do tecido e do tipo de trilho ou varão. " + PRECO_FIM],
      ["Vocês fazem cortina sob medida?", "Sim. Fazemos a medição no local para a cortina ficar do tamanho certo da sua janela ou parede."],
      ["Qual a diferença entre cortina e persiana?", "A cortina é de tecido e traz um visual mais aconchegante; a persiana é mais prática de operar e muito usada em escritórios. Também vendemos e instalamos persianas e ajudamos a escolher a melhor opção para o seu ambiente."],
      ["A instalação da cortina está inclusa?", "Sim. Fornecemos o material e fazemos a instalação, sem você precisar contratar outro profissional."]
    ]
  },
  {
    slug: "isolamento-acustico",
    name: "Isolamento Acústico",
    selectLabel: "Isolamento Acústico",
    h1: "Isolamento acústico em Joinville com material e instalação",
    detailTitle: "Isolamento Acústico em Joinville",
    metaDesc: "Fornecimento e instalação de isolamento acústico em Joinville para residências e empresas. Redução de ruído e mais conforto sonoro.",
    heroImg: "images/servicos/isolamento-acustico-hero.webp",
    heroAlt: "Parede revestida com espuma acústica e janela de vidro em estúdio",
    detailImg: "images/servicos/isolamento-acustico-detail.webp",
    detailAlt: "Parede revestida com espuma acústica e janela de vidro em estúdio",
    card: { img: "images/servicos/isolamento-acustico-card.webp", alt: "Parede revestida com espuma acústica e janela de vidro em estúdio", desc: "Redução de ruídos e mais conforto sonoro para casa ou empresa.", icon: ICON.isolamento },
    intro: [
      "O isolamento acústico reduz a passagem de som entre ambientes, trazendo mais conforto tanto em casa quanto no trabalho. É muito usado em estúdios, salas de reunião, consultórios e ambientes comerciais que precisam de mais privacidade sonora.",
      "A Innovare fornece e instala painéis e sistemas acústicos combinados com drywall ou aplicados diretamente na parede, conforme a necessidade do ambiente."
    ],
    benefits: [
      "Redução do ruído entre ambientes internos",
      "Mais privacidade sonora para salas de reunião e consultórios",
      "Pode ser combinado com drywall na mesma obra",
      "Melhora o conforto acústico interno do ambiente"
    ],
    faq: [
      ["Qual o preço do isolamento acústico em Joinville?", "O preço depende da área tratada e do sistema indicado para o seu caso. " + PRECO_FIM],
      ["Isolamento acústico bloqueia o som totalmente?", "Reduz significativamente a passagem de som, mas o nível de bloqueio depende do material e da espessura escolhidos — avaliamos isso conforme sua necessidade."],
      ["Dá pra fazer isolamento acústico numa reforma já pronta?", "Sim, existem soluções que podem ser aplicadas sem precisar quebrar a parede existente."],
      ["Isolamento acústico serve pra home studio ou sala de música?", "Sim, é uma das aplicações mais comuns — ajudamos a definir o melhor sistema pro seu caso."],
      ["Qual a diferença entre isolamento acústico e tratamento acústico?", "O isolamento acústico reduz o som que passa de um ambiente para o outro. O tratamento acústico, com painel acústico, melhora o som dentro do ambiente, reduzindo o eco. Na visita técnica indicamos o que faz sentido para o seu caso."]
    ]
  },
  {
    slug: "nuvens-baffles-acusticos",
    name: "Nuvens e Baffles acústicos",
    anchor: "servico-nuvens-baffles",
    selectLabel: "Nuvens e baffles acústicos",
    h1: "Nuvens e baffles acústicos em Joinville com material e instalação",
    titleShort: "Nuvens e baffles acústicos em Joinville com instalação",
    detailTitle: "Painéis acústicos suspensos para o teto",
    metaDesc: "Nuvens e baffles acústicos em Joinville para reduzir o eco em escritórios e salas comerciais. Material e instalação inclusos. Orçamento grátis.",
    heroImg: "images/servicos/nuvens-baffles-acusticos-hero.webp",
    heroAlt: "Baffles acústicos suspensos no teto de um escritório",
    detailImg: "images/servicos/nuvens-baffles-acusticos-detail.webp",
    detailAlt: "Nuvens acústicas suspensas sobre estações de trabalho",
    card: { img: "images/servicos/nuvens-baffles-acusticos-card.webp", alt: "Nuvens acústicas suspensas sobre estações de trabalho", desc: "Painéis acústicos suspensos que reduzem o eco e deixam o ambiente de trabalho mais confortável.", icon: ICON.baffles },
    topics: [
      { title: "Nuvens acústicas", text: "Painéis horizontais suspensos, em formato de placas, distribuídos pelo teto para absorver o som e reduzir o eco em ambientes amplos, como escritórios abertos e salas de reunião." },
      { title: "Baffles acústicos", text: "Painéis verticais suspensos em linha, que formam um desenho no teto e ajudam a controlar a reverberação. Ótimos para áreas abertas, corredores e espaços com pé-direito alto." }
    ],
    intro: [
      "Nuvens e baffles acústicos são painéis suspensos no teto que absorvem o som e reduzem o eco e a reverberação, deixando escritórios, salas de reunião e áreas comerciais mais confortáveis para trabalhar e conversar. Também dão um toque de design ao teto aparente.",
      "A Innovare fornece e instala os painéis, com fixação segura e distribuição planejada para o seu ambiente, em Joinville e região."
    ],
    benefits: [
      "Reduzem o eco e a reverberação em ambientes amplos",
      "Mais conforto acústico para escritórios abertos, salas de reunião e recepções",
      "Visual moderno, que valoriza tetos aparentes e instalações expostas",
      "Instalação suspensa, sem obra pesada e sem parar o seu negócio"
    ],
    faq: [
      ["Qual o preço da nuvem acústica e do baffle acústico em Joinville?", "O preço depende da quantidade de painéis, do formato (nuvem ou baffle) e do tamanho do ambiente. " + PRECO_FIM],
      ["Qual a diferença entre nuvem acústica e baffle acústico?", "A nuvem é um painel horizontal, em placas; o baffle é um painel vertical suspenso em linha. Os dois absorvem som e reduzem o eco. Indicamos o melhor para o seu ambiente na visita técnica."],
      ["Nuvens e baffles servem para isolar o som entre salas?", "Não. Eles melhoram o som dentro do ambiente, reduzindo o eco. Para reduzir o som que passa de uma sala para outra, o indicado é o isolamento acústico, que também fornecemos e instalamos."],
      ["Dá para instalar em ambiente com teto aparente?", "Sim, é uma das aplicações mais comuns: os painéis são suspensos diretamente no teto aparente, sem necessidade de forro."]
    ]
  },
  {
    slug: "mobiliario-corporativo",
    name: "Mobiliário corporativo",
    selectLabel: "Mobiliário corporativo",
    h1: "Mobiliário corporativo em Joinville com material e instalação",
    titleShort: "Mobiliário corporativo em Joinville com instalação",
    detailTitle: "Móveis para escritório e ambientes corporativos",
    metaDesc: "Mobiliário corporativo em Joinville: móveis para escritório com fornecimento e montagem. Estações de trabalho, mesas de reunião e mais. Orçamento grátis.",
    heroImg: "images/servicos/mobiliario-corporativo-hero.webp",
    heroAlt: "Escritório com estações de trabalho e sala de reunião em vidro",
    detailImg: "images/servicos/mobiliario-corporativo-detail.webp",
    detailAlt: "Escritório amplo com estações de trabalho brancas",
    card: { img: "images/servicos/mobiliario-corporativo-card.webp", alt: "Escritório amplo com estações de trabalho e divisórias de vidro", desc: "Móveis para escritório com fornecimento e montagem: estações de trabalho, mesas de reunião e mais.", icon: ICON.mobiliario },
    intro: [
      "O mobiliário corporativo completa o escritório: mesas e estações de trabalho, mesas de reunião, cadeiras, armários e painéis divisores, pensados para dar conforto, organização e uma boa imagem para a empresa.",
      "A Innovare fornece e monta os móveis em escritórios de todos os tamanhos em Joinville e região, integrando o projeto com divisórias, forros, pisos e cortinas para entregar o ambiente pronto."
    ],
    benefits: [
      "Estações de trabalho, mesas de reunião, cadeiras e armários em um só fornecedor",
      "Montagem feita por equipe própria, sem dor de cabeça com entregas separadas",
      "Integração com divisórias, forros, pisos e cortinas na mesma obra",
      "Ambientes organizados e confortáveis para a equipe e para os clientes"
    ],
    faq: [
      ["Qual o preço do mobiliário corporativo em Joinville?", "O preço depende da quantidade de postos de trabalho, dos modelos e dos acabamentos escolhidos. " + PRECO_FIM],
      ["A montagem dos móveis está inclusa?", "Sim. Fornecemos e montamos os móveis; não vendemos apenas o produto."],
      ["Vocês atendem escritórios pequenos e grandes?", "Atendemos desde pequenas salas comerciais até escritórios com muitos postos de trabalho, em Joinville e região."],
      ["Dá para fazer a obra completa do escritório com vocês?", "Sim. Além dos móveis, trabalhamos com divisórias, forros, pisos, carpetes, persianas e cortinas, o que permite entregar o ambiente completo, do chão ao teto."]
    ]
  }
];

module.exports = { SERVICES };
