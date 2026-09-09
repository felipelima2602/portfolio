// Fonte unica de conteudo do portfolio. Nenhum texto de case no HTML.
// Todo campo de texto precisa de { en, pt }.

export const profile = {
  name: "Felipe de Almeida",
  headline: {
    en: "Product & Strategy Leader",
    pt: "Product & Strategy Leader"
  },
  pitch: {
    en: "I turn ambiguity into direction. For 14 years I have built platforms that scale across markets and decision systems that tell leadership where to invest, in payments, marketplaces, e-commerce and manufacturing.",
    pt: "Eu transformo ambiguidade em direcao. Ha 14 anos construo plataformas que escalam entre mercados e sistemas de decisao que mostram para a lideranca onde investir, em payments, marketplaces, e-commerce e manufatura."
  },
  location: { en: "Sao Paulo, Brazil", pt: "Sao Paulo, Brasil" },
  linkedin: "https://linkedin.com/in/felipelima2602",
  email: "felipelima2602@gmail.com",
  cv: "assets/felipe-de-almeida-cv.pdf",
  languages: {
    en: "Portuguese native, English and Spanish full professional",
    pt: "Portugues nativo, ingles e espanhol full professional"
  }
};

export const cases = [
  {
    id: "webmotors-white-label",
    order: 1,
    company: "Webmotors",
    role: { en: "Platform Product Manager", pt: "Platform Product Manager" },
    period: "06/2019 - 03/2021",
    location: { en: "Sao Paulo, Brazil", pt: "Sao Paulo, Brasil" },
    tags: ["Platform", "B2B2C", "International", "Marketplace", "Santander"],
    headline: {
      en: "White label platform live in five countries",
      pt: "Plataforma white label no ar em cinco paises"
    },
    hero: {
      en: "I turned Brazil's automotive classifieds product into a white label platform running in five countries.",
      pt: "Transformei o produto de classificados da Webmotors em uma plataforma white label operando em cinco paises."
    },
    context: {
      en: "Webmotors was the consolidated automotive classifieds product in Brazil, inside the Santander group. The opportunity was never to sell more listings at home. It was to turn that product into a platform other markets in the group could run.",
      pt: "A Webmotors era o produto de classificados automotivos ja consolidado no Brasil, dentro do grupo Santander. A oportunidade nao estava em vender mais anuncio aqui dentro. Estava em transformar aquele produto em uma plataforma que outros mercados do grupo pudessem operar."
    },
    challenge: {
      en: "A product born for one market carries hardcoded business rules, fees, journeys and integrations. I had to split the core from what was specific to each country without stopping the Brazilian operation. And without ending up with five different products to maintain.",
      pt: "Um produto nascido para um unico mercado carrega regra de negocio, taxa, jornada e integracao hardcoded. Eu tinha que separar o core do que era especifico de cada pais sem parar a operacao brasileira. E sem terminar com cinco produtos diferentes para manter."
    },
    actions: [
      {
        en: "Defined the white label product architecture: a reusable core plus a configurable layer for commercial rules, fees and journeys per country.",
        pt: "Defini a arquitetura de produto do white label: um core reutilizavel mais uma camada configuravel de regras comerciais, taxas e jornada por pais."
      },
      {
        en: "Designed the B2B buying and selling journeys, dealer inventory management and the commercial rules behind them.",
        pt: "Desenhei as jornadas B2B de compra e venda, a gestao de estoque do dealer e as regras comerciais por tras delas."
      },
      {
        en: "Gamified dealer inventory onboarding by field completeness, treating email and phone as the data that makes a lead worth anything.",
        pt: "Gamifiquei o cadastro de estoque do dealer por completude de campos, tratando e-mail e telefone como o dado que faz um lead valer alguma coisa."
      },
      {
        en: "Tied lead response to reward in the admin app: the more a dealer replied, the more third party service discounts they unlocked to offer end customers, which also pushed Webmotors service sales.",
        pt: "Amarrei resposta a lead com recompensa no app admin: quanto mais o dealer respondia, mais desconto em servicos de terceiros ele destravava para ofertar ao cliente final, o que ainda puxou a venda de servicos da Webmotors."
      },
      {
        en: "Put commercial, engineering and design under quarterly OKRs with prioritization by data and A/B testing on the core journeys.",
        pt: "Coloquei comercial, engenharia e design sob OKRs trimestrais, com priorizacao por dado e A/B testing nas jornadas core."
      }
    ],
    outcome: [
      {
        en: "Platform launched in five Latin American markets in partnership with Santander.",
        pt: "Plataforma lancada em cinco mercados da America Latina em parceria com o Santander."
      },
      {
        en: "Opened a B2B2C business line: dealers digitizing vehicle sales through the platform.",
        pt: "Abriu uma linha de negocio B2B2C: dealers digitalizando a venda de veiculo pela plataforma."
      },
      {
        en: "One reusable core shared across countries. In practice, opening a market leaned on configuration instead of market specific development.",
        pt: "Um core reaproveitavel entre os paises. Na pratica, abrir um mercado se apoiou em configuracao no lugar de desenvolvimento especifico daquele mercado."
      },
      {
        en: "Dealer inventory data came in more complete, and Webmotors service sales grew. I report both as observed results, with no measurement tying one to the other.",
        pt: "O dado de estoque do dealer passou a chegar mais completo e a venda de servicos da Webmotors cresceu. Reporto os dois como resultados observados, sem medicao ligando um ao outro."
      }
    ],
    metrics: [
      { label: { en: "Latam markets live", pt: "Mercados Latam no ar" }, value: "5" },
      { label: { en: "New business line opened", pt: "Nova linha de negocio aberta" }, value: "B2B2C" },
      { label: { en: "Dealers on the platform", pt: "Dealers na plataforma" }, value: "TODO:confirmar - volume de dealers ou de anuncios ativos no rollout" }
    ],
    learning: {
      en: "I would build the per market configuration layer first. The first two countries paid for me to learn that in production.",
      pt: "Eu teria construido a camada de configuracao por mercado antes de tudo. Os dois primeiros paises pagaram a conta desse aprendizado em producao."
    }
  },
  {
    id: "whirlpool-decision-support",
    order: 2,
    company: "Whirlpool",
    role: { en: "Strategy Manager", pt: "Strategy Manager" },
    period: "04/2025 - present",
    location: { en: "Sao Paulo, Brazil, serving the US market", pt: "Sao Paulo, Brasil, atendendo o mercado US" },
    tags: ["Analytics", "Decision Support", "D2C", "E-commerce", "AI", "Leadership"],
    headline: {
      en: "Analytics turned into investment decisions at $15.5B",
      pt: "Analytics virou decisao de investimento em D2C de US$15.5B"
    },
    hero: {
      en: "I turned a report queue into the decision system behind media and conversion investment in a $15.5B D2C.",
      pt: "Virei uma fila de relatorio no sistema que decide investimento de midia e conversao num D2C de US$15.5B."
    },
    context: {
      en: "I lead a team of 12 across Product Analytics, Merchandising Analytics, Experimentation and Operational Reporting. We support the e-commerce of Whirlpool, KitchenAid, Maytag, Amana and Gladiator, in partnership with WPP Commerce. The business moves $15.5 billion in annual sales.",
      pt: "Lidero um time de 12 pessoas entre Product Analytics, Merchandising Analytics, Experimentation e Operational Reporting. Apoiamos o e-commerce de Whirlpool, KitchenAid, Maytag, Amana e Gladiator, em parceria com a WPP Commerce. O negocio movimenta US$ 15.5 bilhoes em vendas anuais."
    },
    challenge: {
      en: "The team was being used as a report queue. A lot of output, almost no decision. Worse, the data underneath was contaminated: around 27% of visits went through session refresh, which distorted Last Touch Channel in Adobe Analytics and, with it, the channel performance read that justified media investment.",
      pt: "O time era acionado como fila de pedidos de relatorio. Muito output, quase nenhuma decisao. Pior: o dado por baixo estava contaminado. Cerca de 27% das visitas passavam por session refresh, o que distorcia o Last Touch Channel no Adobe Analytics e, junto, a leitura de performance de canal que sustentava o investimento de midia."
    },
    actions: [
      {
        en: "Restructured the team into four fronts under one rule: no analysis ships unless it is attached to a decision or a concrete opportunity.",
        pt: "Reestruturei o time em quatro frentes sob uma regra: nenhuma analise sai sem estar amarrada a uma decisao ou a uma oportunidade concreta."
      },
      {
        en: "Chose to fix attribution before adding any new dashboard: diagnosed the session refresh issue and restored trust in the channel data.",
        pt: "Decidi consertar a atribuicao antes de qualquer dashboard novo: diagnostiquei o problema de session refresh e devolvi confianca ao dado de canal."
      },
      {
        en: "Ran an eight phase audit of the customer journey and exposed the phases we had never instrumented or measured.",
        pt: "Conduzi uma auditoria da jornada do cliente em oito fases e expus as fases que nunca haviam sido instrumentadas nem medidas."
      },
      {
        en: "Took ownership of the KPI framework and the executive performance reporting, so strategic diagnosis and D2C investment priorities sat in the same conversation.",
        pt: "Assumi o framework de KPI e o reporting executivo de performance, colocando diagnostico estrategico e prioridade de investimento em D2C na mesma conversa."
      },
      {
        en: "Made the team an early adopter of AI in the decision layer: agentic workflows over first-party data to surface conversion bottlenecks and pull operational reporting off manual work.",
        pt: "Coloquei o time como early adopter de AI na camada de decisao: agentic workflows sobre first-party data para achar gargalo de conversao e tirar o reporting operacional do trabalho manual."
      }
    ],
    outcome: [
      {
        en: "The corrected channel read changed which channels media budget backed. The old split had been built on the inflated Last Touch numbers.",
        pt: "A leitura de canal corrigida mudou quais canais o budget de midia passou a sustentar. A divisao antiga tinha sido feita sobre o Last Touch inflado."
      },
      {
        en: "The executive performance report now runs on the KPI framework I own, so investment priorities are argued from one shared read instead of ad hoc pulls.",
        pt: "O reporting executivo de performance passou a rodar no framework de KPI que eu assumi, entao a prioridade de investimento e discutida a partir de uma leitura unica, nao de pedido avulso."
      },
      {
        en: "The journey audit turned blind phases into a measurement backlog, so gaps became roadmap instead of guesswork.",
        pt: "A auditoria de jornada transformou fases cegas em backlog de measurement, entao a lacuna virou roadmap no lugar de achismo."
      }
    ],
    metrics: [
      { label: { en: "Annual sales supported", pt: "Vendas anuais apoiadas" }, value: "$15.5B" },
      { label: { en: "Visits with distorted attribution", pt: "Visitas com atribuicao distorcida" }, value: "~27%" },
      { label: { en: "People led across four fronts", pt: "Pessoas lideradas em quatro frentes" }, value: "12" }
    ],
    learning: {
      en: "I would have started with the instrumentation audit before any new dashboard. A good looking dashboard on broken data delays the decision.",
      pt: "Teria comecado pela auditoria de instrumentacao antes de qualquer dashboard novo. Dashboard bonito sobre dado errado atrasa decisao."
    }
  }
  // Os demais tres cases entram aqui pelo loop, na ordem do STATE.md:
  // farfetch-platform-revamp, psafe-dfndr-monetization, continental-predictive-strategy
];
