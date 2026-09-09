---
description: Executa o loop ate os cinco cases estarem prontos
---

Voce vai rodar o portfolio ate o fim, sem me pedir confirmacao entre um case e outro.

Enquanto existir case com status diferente de `pronto` no `STATE.md`:
1. Pegue o primeiro case pendente na ordem da tabela.
2. Rode o ciclo do comando `/case <slug>` para ele.
3. Atualize o `STATE.md`.
4. Siga para o proximo.

Pare e me chame apenas se: (a) um case ficou abaixo de 4.0 depois de duas rodadas de correcao,
(b) o QA falhou em algo que voce nao consegue corrigir sozinho, ou (c) voce precisa de um numero que
so eu tenho e que muda a mensagem do case. Nesses casos, deixe o resto do trabalho adiantado e me
entregue a pergunta especifica, nao um pedido generico de contexto.

Quando os cinco estiverem prontos, rode `/ship`.
