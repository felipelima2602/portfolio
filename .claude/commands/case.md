---
description: Roda um ciclo completo do loop para um case (escrever, implementar, criticar, corrigir, QA)
argument-hint: <slug do case, ex. webmotors-white-label>
---

Rode o ciclo completo para o case `$1`. Nao pule etapa e nao pare no meio para me perguntar nada que
esteja respondido no briefing.

1. Leia `CLAUDE.md`, `STATE.md`, `content/raw/00-positioning.md` e o briefing de `$1`.
2. Chame o subagente **case-writer** para escrever o case bilingue em `data/cases.js`.
3. Chame o subagente **ui-builder** para renderizar o case na home e na rota `#/case/$1`.
4. Chame o subagente **recruiter-critic** para avaliar. Anote o score.
5. Se o score for menor que 4.0, aplique as correcoes e repita os passos 2 a 4. **Maximo de duas
   rodadas de correcao.** Se depois de duas rodadas ainda estiver abaixo de 4.0, pare e escreva no
   STATE.md o que falta de informacao minha para o case ficar bom.
6. Chame o subagente **qa-runner**.
7. Atualize a linha do case no `STATE.md` com conteudo, UI, score e status, adicione os
   `TODO:confirmar` na lista de perguntas abertas e escreva uma linha no log de ciclos.
8. Faca commit: `feat(case): add <company> case study`.

Ao final, me diga em no maximo 6 linhas: score, o que ficou aberto, e qual e o proximo case.
