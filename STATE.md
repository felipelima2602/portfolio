# Estado do loop

Atualize este arquivo ao fim de cada ciclo. O comando /loop le daqui qual e o proximo case.

| # | Case | Slug | Conteudo | UI | Score critic | Status |
|---|------|------|----------|----|--------------|--------|
| 1 | Webmotors white label | webmotors-white-label | pronto | pronto | - | home + rota #/case/webmotors-white-label no ar, 1 TODO aberto |
| 2 | Whirlpool decision support | whirlpool-decision-support | pendente | pendente | - | pendente |
| 3 | Farfetch platform revamp | farfetch-platform-revamp | pendente | pendente | - | pendente |
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
- [ ] Foto de perfil, favicon e o PDF do CV em `assets/`.

## Log de ciclos
(cada ciclo do /loop escreve uma linha aqui: data, case, o que mudou, score)
