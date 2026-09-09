# Estado do loop

Atualize este arquivo ao fim de cada ciclo. O comando /loop le daqui qual e o proximo case.

| # | Case | Slug | Conteudo | UI | Score critic | Status |
|---|------|------|----------|----|--------------|--------|
| 1 | Webmotors white label | webmotors-white-label | pronto | pronto | - | home + rota #/case/webmotors-white-label no ar, 1 TODO aberto |
| 2 | Whirlpool decision support | whirlpool-decision-support | pronto | pronto | 4.2 | home + rota #/case/whirlpool-decision-support no ar, sem TODO |
| 3 | Farfetch platform revamp | farfetch-platform-revamp | pronto | pronto | 4.0 | home + rota #/case/farfetch-platform-revamp no ar, sem TODO |
| 4 | PSafe dfndr monetization | psafe-dfndr-monetization | pendente | pendente | - | pendente |
| 5 | Continental predictive strategy | continental-predictive-strategy | pendente | pendente | - | pendente |

## Migracao do repo existente (github.com/felipelima2602/portfolio)
- [x] Paleta e vocabulario visual do site antigo portados para `assets/styles.css`.
- [x] Quatro projetos autorais migrados para `data/projects.js`, com PDF EN/PT e links de Figma.
- [x] Capas extraidas do HTML antigo para `assets/covers/`.
- [ ] Substituir o `index.html` antigo pelo novo (feito quando voce copiar o kit para o repo).
- [ ] Remover `Portfolio_FelipeAlmeida_PT_standalone.html` depois que o toggle EN/PT estiver no ar.

## Perguntas abertas para o Felipe
- [ ] Numeros marcados como TODO:confirmar em cada case (o loop preenche esta lista).
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
- [ ] Foto de perfil, favicon e o PDF do CV em `assets/`.

## Log de ciclos
(cada ciclo do /loop escreve uma linha aqui: data, case, o que mudou, score)
- 2026-09-09 | whirlpool-decision-support | case escrito bilingue; critic 3.7 -> correcoes (headline/hero PT
  dentro do limite, actions[4] sem lista de stack, outcomes com efeito concreto, metrica de TODO trocada
  por escopo de time) -> critic 4.2. QA limpo. Sem TODO no case.
- 2026-09-09 | farfetch-platform-revamp | case escrito bilingue (order 3); critic 3.8 -> correcoes
  (challenge com o custo recorrente na frente, trade-off concreto no lugar do cliche, outcomes enxutos,
  "0 freeze" virou metrica, hero carrega o custo) -> critic 4.0. QA limpo. TODO trocado por metrica real;
  teto do case travado ate o Felipe dar um numero de tamanho/adocao (ver perguntas abertas).
