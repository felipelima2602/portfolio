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

## Publicar
GitHub Pages, branch `main`, pasta raiz.

Nota: a paleta vem do portfolio anterior e vive em `assets/styles.css` como CSS variables. Dark mode
sai de graca pelo `prefers-color-scheme`.
