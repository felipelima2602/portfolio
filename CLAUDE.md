# Portfolio de Felipe de Almeida - instrucoes do projeto

## Objetivo
Uma pagina unica, estatica e bilingue (EN/PT), com duas secoes: cinco case studies de carreira
(prova de senioridade) e quatro projetos autorais de AI e estrategia (prova de iniciativa). Posiciona
Felipe como Product & Strategy Leader. Publico: recrutadores tech e hiring managers, chegando pelo
LinkedIn. Publicacao: GitHub Pages, no repo existente github.com/felipelima2602/portfolio.

Este kit substitui o `index.html` antigo do repo. Preserve os PDFs da raiz, os links de Figma e as
capas em `assets/covers/`. O arquivo `Portfolio_FelipeAlmeida_PT_standalone.html` fica obsoleto
quando o toggle EN/PT estiver funcionando: so remova depois que o `/ship` passar.

## Regras nao negociaveis
1. Fonte unica de conteudo: `data/cases.js`. Nenhum texto de case pode ser escrito direto no HTML.
2. Todo texto existe em `en` e `pt`. Se faltar um dos dois, o QA quebra.
3. Voz: primeira pessoa, direto. Nunca usar em dash. Termos de industria ficam em ingles mesmo no PT
   (roadmap, backlog, discovery, A/B testing, KPI, OKR, SQL, first-party data).
4. Numero sem fonte nao entra. Se o dado nao existe no briefing, use o marcador `TODO:confirmar` e o
   QA vai listar. Nunca inventar metrica.
5. Sem build step, sem framework, sem CDN, sem dependencia npm em runtime. HTML + CSS proprio +
   JS vanilla, igual ao portfolio anterior. A paleta ja esta em `assets/styles.css` e vem do site
   antigo: navy #1f2a44, azul #2E5AAC, fundo #f6f8fb, card branco, raio 16px, eyebrow em caixa alta.
   Nao troque a identidade visual, so estenda.
6. Zero scroll horizontal, mobile first, contraste AA, dark mode via `prefers-color-scheme`.
7. Cada commit fecha um case ou um passo do roadmap. Mensagem em ingles, imperativa.

## Estrutura
```
index.html          shell, render client side, toggle EN/PT, duas secoes
data/cases.js       fonte unica dos 5 cases de carreira + perfil + CTA
data/projects.js    os 4 projetos autorais migrados do portfolio anterior
assets/covers/      capas dos projetos autorais, extraidas do index.html antigo
assets/styles.css   ajustes que o Tailwind nao cobre
content/raw/*.md    briefings crus (materia prima, nao vao para o site)
scripts/check.mjs   QA automatico (paridade de idioma, TODOs, campos obrigatorios)
STATE.md            estado do loop: o que esta pronto, o que falta, score de cada case
docs/ROADMAP.md     plano do dia
.claude/agents/     subagentes do loop
.claude/commands/   comandos do loop
```

## Modelo de dados de um case (obrigatorio)
`id, order, company, role, period, location, tags[], headline{en,pt} (max 9 palavras),
hero{en,pt} (max 18 palavras), context{en,pt},
challenge{en,pt}, actions{en,pt}[], outcome{en,pt}[], learning{en,pt}, metrics[{label{en,pt}, value}]`

## Criterio de pronto de um case
- Passa em `node scripts/check.mjs` sem erro.
- Score >= 4.0 na rubrica do recruiter-critic (docs/RUBRIC.md).
- Le em 30 segundos: problema de negocio, decisao, resultado.
- Nenhum `TODO:confirmar` sem estar listado no STATE.md para o Felipe responder.
