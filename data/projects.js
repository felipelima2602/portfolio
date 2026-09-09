// Projetos autorais (o portfolio de AI ja publicado). Migrado do index.html antigo.
// Os PDFs continuam na raiz do repo, com versao EN e PT.

export const projects = [
  {
    id: "seller-copilot",
    order: 1,
    kicker: { en: "AI Feature PRD", pt: "PRD de feature de AI" },
    title: "Mercado Livre - Seller Copilot",
    cover: "assets/covers/seller-copilot.png",
    summary: {
      en: "A product requirements doc for an AI agent that evolves the marketplace seller assistant from giving advice to taking action, optimizing price, inventory and listings with the seller permission.",
      pt: "Documento de requisitos de produto para um agente de AI que evolui o assistente de vendedores do marketplace: de dar conselho para agir, ajustando preco, estoque e anuncios com a permissao do vendedor."
    },
    tags: {
      en: ["Product", "Applied AI", "Marketplace"],
      pt: ["Produto", "AI aplicada", "Marketplace"]
    },
    pdf: { en: "PRD_SellerCopilot_MercadoLivre.pdf", pt: "PRD_SellerCopilot_MercadoLivre_PT.pdf" },
    figma: null
  },
  {
    id: "confiauto",
    order: 2,
    kicker: { en: "0 to 1 product concept", pt: "Conceito de produto 0 a 1" },
    title: "Confiauto - used car trust",
    cover: "assets/covers/confiauto.png",
    summary: {
      en: "An end to end product concept with UI mockups tackling fraud and pricing uncertainty in the Brazilian used car market: fair valuation, trust report and escrow secured deals.",
      pt: "Conceito de produto de ponta a ponta com mockups para enfrentar fraude e incerteza de preco no mercado brasileiro de carros usados: avaliacao justa, relatorio de confianca e negocio com pagamento em garantia."
    },
    tags: {
      en: ["0 to 1", "UX mockups", "GTM"],
      pt: ["Produto 0 a 1", "Mockups", "GTM"]
    },
    pdf: { en: "Projeto2_Confiauto_ProductConcept.pdf", pt: "Projeto2_Confiauto_ProductConcept_PT.pdf" },
    figma: "https://www.figma.com/proto/rpQ2Yb8n6KPogJfFYsSzrO/Confiauto?node-id=1-2&starting-point-node-id=1-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: "competia",
    order: 3,
    kicker: { en: "Executable side project", pt: "Side project executavel" },
    title: "CompetIA - competitive intelligence digest",
    cover: "assets/covers/competia.png",
    summary: {
      en: "A build it yourself playbook for an automated weekly competitor brief summarized by AI: architecture, a weekend MVP plan in no code and low code, cost and a 30/60/90 launch plan.",
      pt: "Playbook para voce mesmo construir um digest semanal de concorrentes resumido por AI: arquitetura, plano de MVP em um fim de semana com no code e low code, custo e plano de lancamento de 30/60/90 dias."
    },
    tags: {
      en: ["Execution", "Low code", "CI"],
      pt: ["Execucao", "Low code", "Intel. competitiva"]
    },
    pdf: { en: "Projeto3_CompetIA_Playbook.pdf", pt: "Projeto3_CompetIA_Playbook_PT.pdf" },
    figma: null
  },
  {
    id: "giro",
    order: 4,
    kicker: { en: "Fintech strategy", pt: "Estrategia fintech" },
    title: "Giro - embedded working capital",
    cover: "assets/covers/giro.png",
    summary: {
      en: "A strategy and special projects proposal to turn a payments relationship into a credit engine for small businesses with cash flow underwriting: market case, mockups, unit economics, build vs partner, roadmap and KPIs.",
      pt: "Proposta de estrategia e projetos especiais para transformar a relacao de payments em um motor de credito para pequenas empresas com underwriting por fluxo de caixa: case de mercado, mockups, unit economics, build vs partner, roadmap e KPIs."
    },
    tags: {
      en: ["Strategy", "Fintech", "Business case"],
      pt: ["Estrategia", "Fintech", "Business case"]
    },
    pdf: { en: "Projeto4_Giro_FintechStrategy.pdf", pt: "Projeto4_Giro_FintechStrategy_PT.pdf" },
    figma: "https://www.figma.com/proto/iHgQ9gvSCuVCpZwDEsJBCq/Giro?node-id=1-2&starting-point-node-id=1-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  }
];

export const projectsNote = {
  en: "Independent exercises using public data, not affiliated with the companies referenced.",
  pt: "Exercicios independentes com dados publicos, sem vinculo com as empresas citadas."
};
