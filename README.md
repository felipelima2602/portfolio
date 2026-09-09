# Portfolio - Felipe de Almeida

Pagina unica, estatica e bilingue (EN/PT): cinco case studies de carreira e quatro projetos autorais
de AI e estrategia. Sem build step e sem dependencia externa.

## Rodar local
```bash
python3 -m http.server 8000   # http://localhost:8000
```
O site usa ES modules, entao precisa ser servido por http, nao aberto como arquivo.

## Editar conteudo
Cases de carreira em `data/cases.js`, projetos autorais em `data/projects.js`. Cada campo de texto
tem `{ en, pt }`. Os PDFs dos projetos ficam na raiz do repo, em versao EN e PT.
Depois de editar:
```bash
node scripts/check.mjs
```

## Fluxo com o Claude Code
- `/case <slug>` roda um ciclo completo em um case: escrever, implementar, criticar, corrigir, QA.
- `/loop` roda os cases pendentes do `STATE.md` em sequencia.
- `/ask` junta tudo que depende de informacao sua em uma lista.
- `/ship` fecha, publica no GitHub Pages e escreve o post de anuncio.

Regras de conteudo e de codigo estao no `CLAUDE.md`. Plano do dia em `docs/ROADMAP.md`.

## Editar um case pelo Claude Code
`/case <slug>` roda o ciclo inteiro num case (escrever, renderizar, criticar, corrigir, QA) e faz o
commit. Os slugs estao no `STATE.md`. A ordem de exibicao na home vem do campo `order` de cada case
em `data/cases.js`, nao da ordem do array.

## Publicar
1. Trabalho em andamento na branch `portfolio-v2`. A `main` ainda serve o site antigo.
2. Antes do merge: `assets/felipe-de-almeida-cv.pdf` precisa existir (o hero linka para ele).
3. `git checkout main && git merge portfolio-v2 && git push`.
4. GitHub: Settings > Pages > Source = branch `main`, pasta `/` (raiz).
5. URL: `https://felipelima2602.github.io/portfolio/`.
6. Depois do merge, apague `Portfolio_FelipeAlmeida_PT_standalone.html` (o toggle EN/PT o substitui).

Nota: a paleta vem do portfolio anterior e vive em `assets/styles.css` como CSS variables. Dark mode
sai de graca pelo `prefers-color-scheme`.
