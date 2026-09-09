# Estado do loop

Atualize este arquivo ao fim de cada ciclo. O comando /loop le daqui qual e o proximo case.

Os cinco cases estao PRONTOS. Ordem de exibicao na home (campo `order` em `data/cases.js`), definida
no /ship pela leitura de narrativa: 1 Whirlpool, 2 Farfetch, 3 Webmotors, 4 Continental, 5 PSafe.
A tabela abaixo esta na ordem em que os cases foram escritos, nao na ordem da home.

| # | Case | Slug | Conteudo | UI | Score critic | Status |
|---|------|------|----------|----|--------------|--------|
| 1 | Webmotors white label | webmotors-white-label | pronto | pronto | - (base do padrao) | pronto, home order 3, sem TODO de conteudo (metrica 3 opcional) |
| 2 | Whirlpool decision support | whirlpool-decision-support | pronto | pronto | 4.2 | pronto, home order 1, sem TODO |
| 3 | Farfetch platform revamp | farfetch-platform-revamp | pronto | pronto | 4.0 | pronto, home order 2, sem TODO |
| 4 | PSafe dfndr monetization | psafe-dfndr-monetization | pronto | pronto | 4.0 | pronto, home order 5, metrica 3 opcional |
| 5 | Continental predictive strategy | continental-predictive-strategy | pronto | pronto | 4.1 | pronto, home order 4, sem TODO |

Narrativa dos cinco juntos (recruiter-critic sobre a home): 3.4/5 na primeira leitura -> ajustes do
/ship (reordenacao por prova, headline da Farfetch pelo custo duplicado, Webmotors perde a clausula
"sem parar a operacao" que era do Farfetch, faixas de KPI reordenadas para nao mostrar dois "0"
adjacentes). O teto da narrativa fica preso ate os numeros de delta chegarem (ver perguntas abertas).

## Migracao do repo existente (github.com/felipelima2602/portfolio)
- [x] Paleta e vocabulario visual do site antigo portados para `assets/styles.css`.
- [x] Quatro projetos autorais migrados para `data/projects.js`, com PDF EN/PT e links de Figma.
- [x] Capas extraidas do HTML antigo para `assets/covers/`.
- [x] `index.html` novo ja e o do repo, na branch `portfolio-v2`.
- [ ] Remover `Portfolio_FelipeAlmeida_PT_standalone.html` depois do merge de `portfolio-v2` na `main`
      (o toggle EN/PT ja substitui esse arquivo).

## Bloqueios para publicar (precisam de voce)
1. `assets/felipe-de-almeida-cv.pdf` NAO existe. O botao "Download CV" no hero aponta para 404.
   Coloque o PDF nesse caminho exato. Sem ele o /ship nao faz o merge na `main`.
2. `og:image` / foto de compartilhamento: o card do LinkedIn sai sem imagem. Precisa de um PNG
   (1200x630) em `assets/` e uma linha `og:image` no `index.html` + na funcao `seo()`. Opcional para
   o primeiro dia, mas e o canal de entrada do publico.
3. Favicon: coloquei um provisorio (monograma "F" em navy, inline no `index.html`). Troque se quiser
   outro.
4. Foto de perfil no hero: hoje o hero nao tem foto. Se quiser uma, e trabalho de UI + o arquivo.

## Perguntas abertas para o Felipe
- [ ] Numeros marcados como TODO:confirmar em cada case (o loop preenche esta lista).
- [ ] `profile.pitch` promete "payments" e nenhum dos cinco cases e de payments (o PayPal do seu
      historico nao virou case; o unico artefato de payments na pagina e o Giro, que e projeto autoral).
      Um recrutador liga os pontos e conclui que sua experiencia de payments e side project. Decisao
      sua: (a) tirar "payments" do pitch, ou (b) escrever um case curto de PayPal depois. Nao bloqueia.
- [ ] Prioridade de retorno: os dois numeros que mais mudam a home sao o de adocao/tamanho da Farfetch
      e o de tempo de sessao/retencao da PSafe. Enquanto nenhum delta real existir, a faixa de KPI da
      home so mostra escala e escopo, nunca "moveu X".
- [ ] Webmotors: volume de dealers ou de anuncios ativos no rollout dos cinco paises.
      Fica em `cases[webmotors-white-label].metrics[2].value`. Sem esse numero a metrica sai do ar
      ou vira qualitativa. Se nao houver dado confiavel, removo a terceira metrica e deixo duas.
      Enquanto o valor for TODO:confirmar a UI simplesmente nao renderiza essa metrica, entao hoje
      o case mostra duas: 5 mercados Latam e Santander.
- [ ] Whirlpool: um numero de resultado da correcao de atribuicao. O case hoje passa (4.2) com tres
      metricas (US$15.5B em vendas apoiadas, ~27% de visitas com atribuicao distorcida, 12 pessoas em
      quatro frentes) e nenhuma delas e resultado proprio. Se voce tiver UM destes, ele entra como
      metrica e sobe a nota: (a) fatia do budget de midia que mudou de canal depois da correcao, ou
      (b) numero de canais com verba realocada, ou (c) movimento de conversao/CAC nos meses seguintes.
      Sem isso, fica como esta. Nao bloqueia o ship.
- [ ] Farfetch: um numero de tamanho ou de adocao. O case passa (4.0) mas trava nesse teto: o criterio
      de impacto verificavel fica abaixo de 4 ate voce entregar UM destes, que vira a terceira metrica no
      lugar de "2 times liderados": (a) quantas marcas ou empresas do grupo rodavam na plataforma no
      handover (02/2023), (b) GMV ou volume de pedidos que passava pelo checkout, ou (c) reducao do lead
      time de integracao de uma nova empresa do grupo. Metricas de hoje: 4 capacidades reescritas como
      servicos, 0 freeze de operacao, 2 times liderados. Nao bloqueia o ship.
- [ ] PSafe: um numero de resultado do redesenho da monetizacao. Fica em
      `cases[psafe-dfndr-monetization].metrics[2].value`. Basta UM: variacao do tempo medio de sessao
      antes e depois, ou retencao D7. O case passa (4.0) e hoje renderiza duas metricas (6M+ usuarios
      ativos, 0 ads na frente da primeira acao util); o criterio de impacto verificavel fica abaixo de 4
      ate esse numero chegar. Se voce nao tiver nenhum, a terceira metrica sai e o outcome de engagement
      vira mais conservador. Nao bloqueia o ship.
- [ ] Continental: um numero de escopo ou de investimento. O case passa (4.1) com duas metricas
      ("Predictive" como nova direcao de portfolio, <1mm de erro do piloto). O criterio de impacto
      verificavel fica abaixo de 4 ate voce dar UM destes, que vira a terceira metrica: (a) quantos
      mercados ou paises o planejamento anual de Digital Tire Solutions cobria, (b) volume ou % de
      investimento realocado da inspecao periodica para o preditivo, ou (c) em qual ano/foro global a
      direcao foi adotada. Extra util para a entrevista: ter pronto quem defendia o orcamento de inspecao
      periodica e o que voce cedeu para a virada passar. Nao bloqueia o ship.
- [ ] Assets pendentes: ver a secao "Bloqueios para publicar" acima (CV PDF e o unico que trava o merge).

## Log de ciclos
(cada ciclo do /loop escreve uma linha aqui: data, case, o que mudou, score)
- 2026-09-09 | whirlpool-decision-support | case escrito bilingue; critic 3.7 -> correcoes (headline/hero PT
  dentro do limite, actions[4] sem lista de stack, outcomes com efeito concreto, metrica de TODO trocada
  por escopo de time) -> critic 4.2. QA limpo. Sem TODO no case.
- 2026-09-09 | farfetch-platform-revamp | case escrito bilingue (order 3); critic 3.8 -> correcoes
  (challenge com o custo recorrente na frente, trade-off concreto no lugar do cliche, outcomes enxutos,
  "0 freeze" virou metrica, hero carrega o custo) -> critic 4.0. QA limpo. TODO trocado por metrica real;
  teto do case travado ate o Felipe dar um numero de tamanho/adocao (ver perguntas abertas).
- 2026-09-09 | psafe-dfndr-monetization | case escrito bilingue (order 4); critic 3.7 -> correcoes (hero
  lidera pela decisao de modelo, nao por "redesenhei"; tag lider virou Monetization; outcome abre pelo
  mecanismo; actions[4] nomeia ad ops e growth como contraparte; action de AI/ML cortada por nao servir a
  tese; metricas viraram 6M+ ativos e "0 ads na frente da primeira acao util") -> critic 4.0. QA limpo.
  1 TODO aberto: metrica de tempo de sessao/retencao (ver perguntas abertas).
- 2026-09-09 | continental-predictive-strategy | case escrito bilingue (order 5); critic 3.8 ("soava a
  narracao de tendencia") -> correcoes (headline/hero reivindicam a autoria da leitura, challenge sem o
  "mercado ja ia pra la", actions[0] entrega a conclusao dos tres eixos, actions[2] vira recomendacao de
  realocacao de verba, outcome[0] ativo e com perimetro Digital Tire Solutions, outcome[1] deixa claro
  que ele usou o piloto como evidencia, AGV amarrado a tese) -> critic 4.1. QA limpo. TODO trocado por
  metrica "Predictive"; teto travado ate numero de escopo/investimento (ver perguntas abertas).
- 2026-09-09 | /ship | QA final do site: check.mjs limpo, 5 cases com paridade EN/PT, toggle e rotas hash
  ok em browser (1280 e mobile), sem erro de console do site, PDFs e capas dos projetos ok. Critic da
  narrativa 3.4/5 -> uma rodada de ajuste: `order` reordenado por prova (Whirlpool, Farfetch, Webmotors,
  Continental, PSafe), headline da Farfetch pelo custo duplicado ("One checkout for the group..."),
  Webmotors perde "sem parar a operacao brasileira", faixas de KPI de Farfetch e Continental reordenadas.
  Favicon provisorio adicionado, CSS morto (.metric .v.todo) removido. Branch `portfolio-v2` commitada e
  pushada. NAO fiz merge na `main` nem habilitei Pages: bloqueado pelo CV PDF ausente (ver "Bloqueios
  para publicar"). Post de LinkedIn rascunhado e entregue ao Felipe.
