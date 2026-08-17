export const pt = {
  meta: {
    langLabel: "PT",
    toggleLabel: "EN",
    htmlLang: "pt-BR",
    homeTitle: "Cassio Barbosa · Product Manager — Fintech & Mercado de Capitais",
    homeDescription:
      "Product Manager de produtos financeiros B2B. Discovery estruturado, priorização com critério e IA com curadoria. Veja o case de retenção.",
    caseTitle: "O hábito que não se forma — Case de produto | Cassio Barbosa",
    caseDescription:
      "Case de produto sobre retenção em uma plataforma B2B de marketing por dados: diagnóstico de coortes, discovery, aposta com veto mantido e rollout com guardas.",
  },
  nav: {
    items: [
      { id: "inicio", label: "Início" },
      { id: "como-trabalho", label: "Como trabalho" },
      { id: "case", label: "Case" },
      { id: "experiencia", label: "Experiência" },
      { id: "contato", label: "Contato" },
    ],
    wordmark: "Cassio Barbosa",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    navLabel: "Principal",
    mobileNavLabel: "Principal (mobile)",
    themeToggle: "Tema claro/escuro",
    langGroupLabel: "Idioma / Language",
  },
  hero: {
    overline: "Cassio Barbosa — Product Manager · Fintech & Mercado de Capitais",
    title: "Decido com dados, escrevo decisões e uso IA com curadoria.",
    body: "PM de produtos financeiros B2B — Internet Banking e liquidações de mercado de capitais — com 10+ anos entre design e produto. Discovery estruturado, priorização com critério e a disciplina de assinar o porquê de cada decisão.",
    primaryCta: "Ver o case de produto",
    secondaryCta: "Falar comigo",
    caption: "Brasília · Remoto (BR/Internacional) · PT · EN",
  },
  heroTerminal: {
    label: "decision log",
    hint: "passe o mouse para pausar",
    ariaLabel: "Perguntas de produto e vereditos",
    lines: [
      {
        query: "> disparo em massa resolve retenção?",
        verdict: "— não. ver o porquê",
        href: "/case/retencao#diagnostico",
      },
      {
        query: "> score RICE alto anula um princípio?",
        verdict: "— não. ver o veto",
        href: "/case/retencao#priorizacao",
      },
      {
        query: "> IA escreve a decisão?",
        verdict: "— ela calcula. eu assino.",
        href: "/case/retencao#ia",
      },
    ],
  },
  stats: [
    { value: 3, prefix: "", suffix: "+", label: "anos em financial services" },
    { value: 10, prefix: "", suffix: "+", label: "anos em produto digital" },
    { value: 1, prefix: "", suffix: "", label: "MBA Gestão de Projetos — FGV" },
    { value: 4, prefix: "~", suffix: "", label: "anos de background em Product Design" },
  ],
  credentials: [
    "3+ anos em financial services",
    "10+ anos em produto digital",
    "MBA Gestão de Projetos — FGV",
    "Background em Product Design",
  ],
  work: {
    title: "Como eu trabalho",
    subtitle:
      "O processo importa porque é ele que se repete quando o contexto muda.",
    expand: "expandir +",
    collapse: "recolher −",
    cards: [
      {
        number: "01",
        title: "Causa antes de plano.",
        lead: "Separo tendência de ruído e sintoma de causa antes de propor qualquer coisa.",
        body: "Diagnóstico sem decisão não conta — toda leitura minha fecha com uma decisão assumida por escrito.",
      },
      {
        number: "02",
        title: "Discovery com método.",
        lead: "Entrevistas codificadas em fato ≠ opinião ≠ inferência, 5 porquês, JTBD.",
        body: "Uma entrevista não decide nada sozinha: ela triangula com o dado quantitativo.",
      },
      {
        number: "03",
        title: "Priorização com critério — e com veto.",
        lead: "RICE e MoSCoW informam; princípios decidem.",
        body: "Já mantive veto a uma ideia com score competitivo porque uma fala de cliente e uma guarda de métrica pesavam contra. Score bom não anula princípio.",
      },
      {
        number: "04",
        title: "IA com curadoria.",
        lead: "Uso IA como par de revisão e motor de cálculo — para derrubar meus próprios planos, refazer contas e atacar meus vieses.",
        body: "A saída de modelo nunca vira entrega sem revisão; a assinatura da decisão é minha.",
      },
    ],
  },
  featuredCase: {
    overline: "Case de produto",
    title: "O hábito que não se forma",
    summary:
      'Uma plataforma B2B de marketing por dados via ativação crescer e retenção vazar. Em 5 dias: diagnóstico que separou mix de degradação, discovery que separou fato de opinião, uma aposta com veto mantido contra o RICE, rollout com holdout concorrente e três guardas — e um "não" à diretoria, por escrito, com data de cobrança.',
    chips: [
      "Retenção",
      "Diagnóstico de coortes",
      "JTBD",
      "RICE",
      "Desenho experimental",
      "Curadoria de IA",
    ],
    cta: "Ler o case completo",
    actsLabel: "Atos do case",
    chart: {
      title: "G1 · retenção por coorte",
      caption: "prévia — curva completa no case",
      series: [
        { label: "com consultor", points: [100, 78, 66, 58, 52, 49, 47, 45] },
        { label: "self-service", points: [100, 62, 44, 32, 24, 19, 15, 13] },
      ],
    },
    acts: [
      {
        id: "diagnostico",
        label: "Diagnóstico",
        teaser: "A queda recente é mix de coortes, não degradação do produto.",
        metric: "~13%",
        metricLabel: "retenção S+8 no self-service",
        href: "/case/retencao#diagnostico",
      },
      {
        id: "discovery",
        label: "Discovery",
        teaser: "Entrevista codificada em fato, opinião e inferência — e triangulada com o dado.",
        metric: "~70%",
        metricLabel: "nunca chega ao gatilho de valor",
        href: "/case/retencao#discovery",
      },
      {
        id: "priorizacao",
        label: "Priorização",
        teaser: "Score competitivo não anula princípio: veto mantido contra o RICE.",
        metric: "1",
        metricLabel: "veto mantido",
        href: "/case/retencao#priorizacao",
      },
      {
        id: "rollout",
        label: "Rollout",
        teaser: "Holdout concorrente e guardas definidas antes de escalar.",
        metric: "3",
        metricLabel: "guardas de rollout",
        href: "/case/retencao#rollout",
      },
      {
        id: "diretoria",
        label: "Diretoria",
        teaser: "Disparo em massa \u201Cainda esta semana\u201D: recusado por escrito, com alternativa.",
        metric: "1",
        metricLabel: "\u201Cnão\u201D com data de cobrança",
        href: "/case/retencao#diretoria",
      },
    ],
  },
  experience: {
    title: "Trajetória",
    subtitle:
      "Do design de produto à gestão de produto — a mesma pergunta, mais responsabilidade pela resposta.",
    expand: "ver mais",
    collapse: "ver menos",
    promoted: "merge: promovido a PM",
    items: [
      {
        tag: "pm@opea",
        role: "Product Manager",
        company: "Opea — Financial Services",
        period: "jun/2025–hoje",
        description:
          "Respondo pelo Internet Banking do Banco Opea SCD e pelo Cockpit de liquidações (brutas, multilaterais e integralizações). Discovery a delivery: análise de causa raiz, PRDs com MoSCoW, priorização RICE, triagem de incidentes com matriz de criticidade e decisão registrada por escrito como padrão.",
        emphasis: true,
      },
      {
        tag: "po@opea",
        role: "Product Owner",
        company: "Opea — Financial Services",
        period: "abr/2023–jun/2025",
        description:
          "Estruturei o Product Discovery do time e trouxe prototipação para dentro do fluxo de requisitos. Operação e evolução dos produtos digitais do banco — Pix, TED, boletos, extrato — e da esteira de mercado de capitais. Promovido a PM.",
        emphasis: true,
      },
      {
        tag: "design→product",
        role: "Product Designer & Front-end",
        company: "Peerdustry",
        period: "2022–2023",
        description:
          "Plataforma B2B de manufatura conectada. Wireframes a código: protótipos em Figma e front-end em React.",
        emphasis: false,
      },
      {
        tag: "design@artis",
        role: "Product Designer",
        company: "Artis Tecnologia",
        period: "2018–2022",
        description:
          "Software médico para neurocirurgia — domínio regulado onde erro de produto é risco clínico. Design, gestão de projeto e tradução de requisitos de especialistas em produto utilizável.",
        emphasis: false,
      },
      {
        tag: "design@raizes",
        role: "Anos de formação",
        company: "Manufatura, CRA-DF, Lamparina",
        period: "2011–2017",
        description:
          "Design gráfico e de produto: a base de olhar para o usuário antes de olhar para a solução.",
        emphasis: false,
      },
    ],
  },
  tools: {
    title: "Caixa de ferramentas",
    showMore: "mais",
    showLess: "recolher",
    columns: [
      {
        title: "Produto & dados",
        items: [
          "Discovery (JTBD, 5 porquês, entrevistas)",
          "RICE, MoSCoW, OKRs",
          "PRDs e decision docs",
          "A/B testing e desenho experimental",
          "Análise de coortes e retenção",
          "Figma e prototipação",
          "Pivotal Tracker, ClickUp, LucidChart",
        ],
      },
      {
        title: "IA no dia a dia de PM",
        items: [
          "Discovery assistido e revisão adversarial de documentos",
          "Prompts estruturados por papel e critério",
          "Verificação: contas e amostras conferidas antes de assinar",
          "Princípio: a IA gera, eu assino",
        ],
      },
    ],
  },
  education: {
    title: "Formação",
    items: [
      { degree: "MBA, Gestão de Projetos", school: "FGV", years: "2022–2024" },
      {
        degree: "Pós Tech Developer 360",
        school: "Rocketseat",
        years: "2025–2026",
      },
      {
        degree: "Bacharelado em Desenho Industrial",
        school: "UnB",
        years: "2011–2017",
      },
    ],
  },
  contact: {
    title: "Vamos conversar sobre produto?",
    body: "Estou aberto a conversas sobre posições de Product Manager — Brasil ou remoto internacional.",
    linkedin: "LinkedIn",
    email: "E-mail: creisbarbosa@gmail.com",
  },
  footer: {
    copyright:
      "© 2026 Cassio Barbosa · Brasília, Brasil · Feito com conteúdo real, sem lorem ipsum.",
    linksLabel: "Links de contato",
    links: { linkedin: "LinkedIn", github: "GitHub", email: "E-mail" },
  },
  caseStudy: {
    back: "Voltar para a home",
    backToHome: "Voltar para a home",
    viz: {
      expand: "expandir raciocínio completo",
      collapse: "recolher raciocínio",
      takeaways: {
        diagnostic: [
          "O WAU desacelera antes dos feriados: o sinal veio primeiro, o ruído depois.",
          "O vazamento tem endereço: entre a semana 1 e a semana 4.",
          "A diferença por origem (consultor vs. self-service) explica quase tudo.",
        ],
        discovery: [
          "A cliente não pede mais dado: ela pede veredito e a próxima ação.",
          "Volume trabalha contra o medo dela — e contra a guarda de opt-out.",
        ],
        prioritization: [
          "O RICE trouxe a ideia vetada de volta com score competitivo.",
          "Mantive o veto: framework informa, critério decide.",
        ],
        rollout: [
          "O gatilho existe e é mensurável — mas ~70% da base nunca chega nele.",
          "Cada guarda tem limiar relativo ao controle e pode reprovar minha própria aposta.",
        ],
        executive: [
          "Quinze linhas, decisão na primeira frase, critério de kill por escrito.",
        ],
        ai: ["Os trechos mais valiosos do rastro de IA são os que rejeitei."],
      },
      g1: {
        label: "G1",
        title: "WAU semanal",
        series: "WAU",
        weekPrefix: "S",
        band: "feriados regionais",
        annotation: "o crescimento desacelera aqui",
        caption:
          "Contas ativas por semana. A desaceleração aparece em S6, antes da janela de feriados regionais usada como explicação.",
      },
      stats: [
        { value: 63, prefix: "", suffix: "%", label: "voltam em S+1" },
        { value: 40, prefix: "~", suffix: "%", label: "somem até S+4" },
        { value: 70, prefix: "~", suffix: "%", label: "nunca chegam ao gatilho" },
      ],
      g2: {
        label: "G2",
        title: "Onde o hábito vaza",
        cohorts: ["Mês 1", "Mês 2", "Mês 3"],
        x: ["S+1", "S+4", "S+8"],
        region: "a janela do vazamento",
        caption:
          "Retenção por coorte mensal. As três coortes caem no mesmo trecho: o problema é a janela, não a safra.",
      },
      g3: {
        label: "G3",
        title: "Retenção em S+8 por origem",
        bars: ["Com consultor parceiro", "Self-service"],
        caption: "Mesma janela, origens diferentes — a diferença é de mix, não de produto.",
        sub: "self-service = 75% da base",
      },
      veto: {
        overline: "changes requested",
        state: "Veto mantido",
        idea: "aumentar volume de campanhas",
        reason:
          "\u201CTenho medo de encher o saco da cliente e ela pedir pra sair da lista\u201D — a ideia paga com a guarda de opt-out.",
        footnote: "score RICE: competitivo — irrelevante",
      },
      g4: {
        label: "G4",
        title: "O gatilho do relatório",
        bars: ["Abriu o relatório", "Não abriu"],
        tileValue: "~70%",
        tileLabel: "nunca chega ao gatilho",
        caption: "Nova campanha em até 2 semanas, por abertura do relatório pós-campanha.",
        sub: "correlação assumida — só teste com controle prova causa",
      },
      checks: {
        title: "guardas do rollout / checks",
        running: "executando…",
        legend: [
          { state: "ok", label: "avançar" },
          { state: "hold", label: "segurar" },
          { state: "fail", label: "reverter" },
        ],
        rows: [
          {
            name: "Opt-out",
            threshold: "opt-out ≥1,2x controle → segurar · ≥1,5x → reverter",
            state: "ok",
          },
          {
            name: "Reclamações no suporte",
            threshold: "suporte ≥1,2x controle → segurar · ≥1,5x → reverter",
            state: "ok",
          },
          {
            name: "Qualidade do WAU",
            threshold: "atividade só-relatório ≥1,2x controle → segurar · ≥1,5x → reverter",
            state: "ok",
          },
        ],
      },
      stages: {
        labels: { question: "pergunta", gate: "gate", reversal: "reversão" },
        items: [
          {
            name: "Concierge · n≈15",
            question: "O veredito que eu assino faz sentido para a cliente?",
            gate: "Julgamento, não estatística — reviso cada disparo antes de sair.",
            reversal: "Parar é desligar o envio manual: custo zero.",
          },
          {
            name: "Teste",
            question: "O efeito existe contra um holdout concorrente?",
            gate: "MDE de ~+10pp sobre baseline de ~20% (α=5%, poder 80%).",
            reversal: "Abaixo do delta mínimo, mato a aposta e volto ao discovery.",
          },
          {
            name: "Escala",
            question: "O efeito se mantém com as guardas dentro do limiar?",
            gate: "Três estados: avançar / segurar / reverter.",
            reversal: "Segurar congela a expansão por uma semana antes de reverter.",
          },
        ],
      },
      message: {
        header: "para: diretoria de negócios",
        highlight: "Não vamos fazer o disparo em massa esta semana.",
      },
      diff: { removed: "rejeitado", added: "no lugar" },
    },
    hero: {
      overline: "Case de produto",
      title: "O hábito que não se forma",
      subtitle:
        "Retenção em uma plataforma B2B de marketing por dados para pequenos varejistas — diagnóstico, discovery, aposta e plano de rollout em 5 dias, com IA como par de revisão.",
      tags: [
        "Desafio técnico de processo seletivo",
        "Dados sintéticos, empresa anonimizada",
        "Papel: PM único, ponta a ponta",
        "~5h de trabalho + IA com curadoria",
      ],
      disclaimer:
        "Empresa não nomeada e números alterados (com consistência interna) por respeito à confidencialidade do processo seletivo.",
    },
    nav: {
      label: "Seções do case",
      items: [
        { id: "contexto", label: "Contexto" },
        { id: "diagnostico", label: "Diagnóstico" },
        { id: "discovery", label: "Discovery" },
        { id: "priorizacao", label: "Priorização" },
        { id: "rollout", label: "Rollout" },
        { id: "diretoria", label: "Diretoria" },
        { id: "ia", label: "IA" },
        { id: "aprendizados", label: "Aprendizados" },
      ],
    },
    context: {
      title: "O contexto",
      paragraphs: [
        "Uma plataforma B2B de marketing por dados atende micro e pequenos varejistas. A métrica da casa é contas ativas na semana (WAU): uma conta é ativa quando dispara uma ação de marketing ou consulta o resultado de uma campanha. A métrica tem duas guardas: taxa de opt-out das mensagens e reclamações no suporte.",
        "A ativação vinha crescendo, mas o time desconfiava que a base entrava por uma porta e saía pela outra: a empresa fazia a primeira campanha e o hábito semanal não se formava. Ao assumir a cadeira, recebi séries de WAU, coortes de retenção, dados de engajamento com relatórios, uma transcrição de entrevista — e uma mensagem da diretoria pedindo um disparo de reengajamento em massa \u201Cainda esta semana\u201D.",
      ],
    },
    diagnostic: {
      overline: "Ato 1",
      title: "Diagnóstico: separar sinal de ruído",
      lead: "Antes de qualquer plano, a pergunta: a queda recente do WAU é a história — ou o sinal veio antes dela?",
      metrics: [
        { value: "60%+", label: "voltam em S+1" },
        { value: "~40%", label: "somem até S+4" },
        { value: "~45% / ~13%", label: "retenção S+8: consultor vs. self-service" },
        { value: "~70%", label: "nunca chega ao gatilho" },
      ],
      blocks: [
        {
          title: "Tendência vs. ruído.",
          body: "As adições semanais desaceleraram antes dos feriados regionais que o time usava como explicação. Tratei as duas últimas semanas como ruído e a desaceleração anterior como sinal — com critério objetivo de confirmação definido por escrito (\u201Cse as próximas duas semanas voltarem ao patamar X, era feriado\u201D).",
        },
        {
          title: "Onde o hábito vaza.",
          body: "Mais de 60% das contas voltam na primeira semana — a ativação funciona. O vazamento se concentra entre a 1ª e a 4ª semana: ~40% das contas ativas na semana 1 desaparecem até a semana 4. Depois disso, a perda desacelera. O problema não era ativação nem long-tail: era a janela exata onde o hábito deveria se consolidar.",
        },
        {
          title: "A causa é o mix, não o produto.",
          body: "Quem ativava acompanhada por um consultor parceiro retinha ~45% na semana 8; quem ativava sozinha (self-service), ~13%. E a conta fechava: o mix ponderado das origens reproduzia quase exatamente a retenção da coorte mais recente — sustentando a hipótese verificável de que a piora entre coortes podia ser inteiramente composição de mix, e não degradação do produto. Marquei o dado que faltava para confirmar [a validar] em vez de esconder a incerteza.",
        },
        {
          title: "O mecanismo em número.",
          body: "~30% das empresas abriam o relatório pós-campanha; dessas, ~60% faziam nova campanha em 2 semanas, contra ~20% das que não abriam. ~70% da base nunca chegava ao gatilho. Ressalva registrada: correlação assumida, não causalidade provada — quem abre relatório provavelmente já é a empresa mais engajada; só um teste com controle separa as duas coisas.",
        },
      ],
      decision: {
        overline: "Decisão",
        title: "Decisão da primeira semana (assumida por escrito)",
        body: "Não fazer o disparo geral de reengajamento — ele ataca o sintoma, mira a base inteira quando o problema é um segmento e uma janela, e paga com a guarda de opt-out. No lugar: piloto controlado no segmento self-service entre as semanas 1 e 4, onde estava ~75% do volume.",
      },
    },
    discovery: {
      overline: "Ato 2",
      title: "Discovery: separar o que a cliente viveu do que ela acha",
      lead: "Uma entrevista não decide nada sozinha — ela explica o porquê do que os dados mostram em escala. Codifiquei a transcrição em três colunas: fato (o que ela viveu), opinião (o que ela acha) e minha inferência (assumida como minha, não dela).",
      table: {
        caption: "Codificação da entrevista",
        headers: ["Fato", "Opinião", "Inferência"],
        rows: [
          [
            "Mandou campanhas, olhou o resultado e parou.",
            "\u201CTeve movimento, eu acho.\u201D",
            "Sem veredito, a cliente não consegue atribuir valor ao esforço — e o hábito não fecha o ciclo.",
          ],
          [
            "O relatório entregava aberturas e cliques.",
            "\u201CQueria saber se valeu a pena ou não valeu.\u201D",
            "A métrica de engajamento não responde à pergunta de negócio dela; falta tradução, não mais dado.",
          ],
          [
            "Não sabia qual seria a próxima campanha.",
            "\u201CMe diz: essa semana, manda essa promoção pra essas clientes.\u201D",
            "O gargalo é decisão, não ferramenta — a próxima ação precisa chegar pronta.",
          ],
          [
            "Reduziu a frequência de disparos por conta própria.",
            "\u201CTenho medo de encher o saco da cliente e ela pedir pra sair da lista.\u201D",
            "Qualquer solução baseada em volume trabalha contra o medo dela e contra a guarda de opt-out.",
          ],
        ],
      },
      quotes: [
        "Teve movimento, eu acho.",
        "Tenho medo de encher o saco da cliente e ela pedir pra sair da lista.",
      ],
      opportunity: {
        overline: "Oportunidade-alvo",
        title: "Relatório pós-campanha vira veredito + uma próxima ação sugerida, entregue proativamente",
        body: "Três decisões dentro dela: veredito antes de métrica; uma ação, não um menu (paralisia de escolha não se resolve com mais opções); push, não pull (é o que o consultor faz e o self-service não tem).",
      },
      discardsTitle: "O que descartei, com nome",
      discards: [
        { item: "Disparo em massa", reason: "a própria entrevistada nomeou o custo — opt-out." },
        { item: "Replicar consultor humano na base toda", reason: "funciona, não escala." },
        {
          item: "Só lembrete / notificação",
          reason: "traz a pessoa de volta para travar de novo na mesma tela — e infla a métrica sem gerar valor.",
        },
        { item: "Relatório mais completo", reason: "mais dado era o problema, não a cura." },
      ],
    },
    prioritization: {
      overline: "Ato 3",
      title: "Priorização: RICE com critério — e com veto",
      paragraphs: [
        "Levei as ideias a uma ideação estruturada (cada ideia rastreável a um dado ou fala específica: pergunta-base → ideia → raciocínio → viabilidade) e a uma tabela RICE com premissas explícitas (Reach a partir do WAU médio; Effort por complexidade relativa — marcados como premissa, não como dado medido).",
      ],
      decision: {
        overline: "Decisão",
        title: "O detalhe que importa",
        body: "A ideia de \u201Caumentar volume de campanhas\u201D voltou com score competitivo no RICE. Mantive o veto. O framework informa; quem decide é o critério — e havia uma fala de cliente e uma guarda de opt-out contra ela. Score bom não anula princípio.",
      },
    },
    rollout: {
      overline: "Ato 4",
      title: "Rollout: desenho experimental com guardas de verdade",
      lead: "O plano que eu mesmo tinha rascunhado (canary release clássico em 3 anéis contra histórico) caiu na revisão — cinco falhas, a pior delas: eu compararia o piloto contra um histórico que eu mesmo tinha declarado contaminado. Redesenhei:",
      items: [
        {
          title: "Holdout concorrente em cada anel",
          body: "em vez de comparação contra histórico.",
        },
        {
          title: "Dimensionamento por poder estatístico",
          body: "(α=5%, poder 80%), não por \u201C% da base\u201D: assumi só enxergar efeito grande (MDE de ~+10pp sobre baseline de ~20%) e disse isso na frente.",
        },
        {
          title: "Anel 1 concierge (n≈15)",
          body: "gatilho de julgamento, não estatístico — reviso cada disparo antes de sair e assino o veredito. Veredito errado em escala destrói mais confiança que relatório inútil.",
        },
        {
          title: "Três estados, não dois",
          body: "avançar / segurar / reverter — segurar congela expansão e dá uma semana para investigar, em vez de forçar decisão binária.",
        },
        {
          title: "Três guardas com limiares relativos ao controle",
          body: "opt-out, suporte e uma terceira que eu mesmo acrescentei — qualidade do WAU: se a única atividade da conta virou \u201Cconsultar relatório\u201D, minha própria feature está inflando a métrica que eu reporto. Assumi por escrito que essa guarda pode reprovar uma aposta que sobe o WAU.",
        },
      ],
      decision: {
        overline: "Decisão",
        title: "Critério de kill assumido",
        body: "Abaixo de um delta mínimo no anel 2, mato a aposta e volto ao discovery — sem ampliar amostra para caçar significância.",
      },
    },
    executive: {
      overline: "Ato 5",
      title: "A resposta à diretoria: escrita que decide",
      paragraphs: [
        "A diretoria queria o disparo em massa. A resposta: 15 linhas, decisão na primeira frase, meia-frase validando o instinto de urgência antes do \u201Cmas\u201D (\u201Co instinto de agir rápido está certo — a queda é real e merece resposta esta semana\u201D), diagnóstico com números, alternativa com duas datas de cobrança e critério de kill por escrito. Como dono da métrica — não como quem pede permissão, não como quem negocia.",
      ],
    },
    ai: {
      overline: "Método",
      title: "IA no processo: curadoria, não terceirização",
      lead: "IA foi obrigatória no desafio — e usei como uso no trabalho: par de revisão e motor de cálculo, não redator final. O rastro completo de prompts foi entregue como artefato. Os trechos mais valiosos são os que rejeitei:",
      labels: {
        asked: "o que eu pedi",
        review: "o que caiu na revisão",
        instead: "o que eu fiz no lugar",
      },
      traces: [
        {
          asked: "\u201CEscreva o plano de rollout em canary release, 3 anéis.\u201D",
          review:
            "Derrubado com argumento: 5 falhas, incluindo comparar contra histórico contaminado e anéis mais curtos que a janela do indicador.",
          instead:
            "Aceitei e troquei o prompt de \u201Cescreva o plano\u201D para \u201Cfaça a matemática e liste os buracos\u201D.",
        },
        {
          asked: "\u201CEscreva a resposta executiva usando a Pirâmide de Minto.\u201D",
          review: "A saída invocava Minto e a contradizia — enterrava a decisão na linha 8.",
          instead: "Aceitei a correção: decisão na linha 1.",
        },
        {
          asked: "\u201CUse CNV para suavizar o texto executivo.\u201D",
          review: "Rejeitei em formato e aceitei em princípio.",
          instead:
            "Uma meia-frase de validação, sem transformar decisão comunicada em proposta negociada.",
        },
      ],
      verification:
        "Verificações que fiz na mão antes de assinar: a aritmética do mix (a conta que sustenta a hipótese central) e os tamanhos de amostra por MDE.",
    },
    closing: {
      title: "O que este case mostra do meu jeito de trabalhar",
      principles: [
        "Decisão assumida com porquê.",
        "Causa antes de plano.",
        "Método no discovery: fato ≠ opinião ≠ inferência.",
        "Juízo no rollout: guardas que podem reprovar minha própria aposta.",
        "Escrita que decide.",
        "Curadoria de IA com assinatura humana.",
        "Incerteza marcada com [a validar] — sinalizada, nunca escondida.",
      ],
      ctaTitle: "Quer conversar sobre este case?",
      ctaLinkedin: "LinkedIn",
      ctaEmail: "E-mail",
    },
    footnote:
      "Case produzido em desafio técnico de processo seletivo (2026). Os dados originais já eram sintéticos; empresa, marca e números foram adicionalmente descaracterizados por respeito à confidencialidade do processo. O raciocínio, as decisões e os artefatos são meus.",
  },

};

export type Dictionary = typeof pt;
