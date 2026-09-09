# Roadmap: portfolio no ar hoje

Escopo fechado: cinco cases, bilingue EN/PT, site estatico, GitHub Pages. Nada alem disso entra hoje.
Estimativa total: cerca de 4h30 de execucao, sendo a maior parte rodando o loop enquanto voce faz
outra coisa.

## Bloco 0 - Setup no repo existente (25 min, manual)
1. `git clone https://github.com/felipelima2602/portfolio.git` e crie a branch `git checkout -b
   portfolio-v2`. Trabalhe nela ate o `/ship`, para o site atual continuar no ar enquanto isso.
2. Copie o kit por cima. Ele substitui `index.html` e adiciona `data/`, `assets/`, `scripts/`,
   `.claude/`, `content/`, `docs/`. Os PDFs da raiz ficam onde estao, os links ja apontam para eles.
3. Coloque o PDF do CV em `assets/felipe-de-almeida-cv.pdf`.
4. Rode `python3 -m http.server 8000` num terminal a parte e abra `localhost:8000`. Confira que os
   quatro projetos autorais aparecem com capa, PDF e Figma, nos dois idiomas.
5. Abra o Claude Code na pasta e confira que `/case`, `/loop`, `/ship` e `/ask` aparecem nos
   comandos e que os quatro subagentes aparecem em `/agents`.

**Criterio de pronto:** `node scripts/check.mjs` passa, a home abre com o case da Webmotors em cima
e os quatro projetos de AI embaixo.

## Bloco 1 - Calibrar o primeiro case (40 min, com voce junto)
Rode `/case webmotors-white-label`. Este e o unico ciclo que voce acompanha de perto, porque ele
define o padrao de voz e de layout que os outros quatro vao seguir.

Ajuste o que incomodar agora: tom, densidade, tamanho de bloco, hierarquia visual. Cada correcao
feita aqui economiza quatro correcoes depois.

**Criterio de pronto:** score >= 4.0 do recruiter-critic e voce olhando a pagina e reconhecendo a
sua voz.

## Bloco 2 - Loop nos quatro restantes (90 min, rodando sozinho)
Rode `/loop`. Ele vai fechar Whirlpool, Farfetch, PSafe e Continental em sequencia, parando so se
precisar de um numero que so voce tem.

Enquanto roda, faca a sua parte em paralelo: levante os numeros que os briefings marcaram como
`TODO:confirmar` (dealers na Webmotors, resultado de conversao na Whirlpool, times consumindo a
plataforma na Farfetch, retencao no dfndr). Numero real vale mais que qualquer melhoria de layout.

**Criterio de pronto:** cinco linhas do `STATE.md` com status pronto.

## Bloco 3 - Responder o que ficou aberto (30 min, com voce)
Rode `/ask`. Responda a lista de uma vez. Depois rode `/case <slug>` so nos cases que mudaram com
as suas respostas.

Numero que voce nao conseguir confirmar com seguranca sai do site. Metrica errada em portfolio de
produto e o tipo de coisa que aparece na entrevista.

**Criterio de pronto:** zero `TODO:confirmar` em `data/cases.js`.

## Bloco 4 - Fechar e publicar (40 min)
Rode `/ship`. Ele faz o QA final, pede ao critic uma leitura da narrativa dos cinco juntos, escreve
o README, publica no GitHub Pages e devolve a URL mais um rascunho de post.

Depois, manualmente: adicione a URL no LinkedIn em Contact info e no destaque do perfil, e publique
o post no fim da tarde ou no comeco da manha seguinte, que e quando recrutador esta no feed.

**Criterio de pronto:** URL abrindo em celular e desktop, toggle EN/PT funcionando em todas as
rotas, LinkedIn e CV clicaveis, PDFs e prototipos de Figma dos projetos autorais abrindo.

Depois do merge na `main`, apague o `Portfolio_FelipeAlmeida_PT_standalone.html`: o toggle substitui
aquele arquivo.

## Fora do escopo de hoje (backlog)
- Dominio proprio.
- Reescrever os quatro projetos autorais no mesmo formato profundo dos cases de carreira (hoje eles
  entram como card mais PDF, que ja e o formato atual do seu site).
- Analytics de visita.
- Versao imprimivel de cada case.
