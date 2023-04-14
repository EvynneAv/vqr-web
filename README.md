# :checkered_flag: VQR

Sistema de venda de ingressos online para eventos de vaquejada.

## :technologist: Membros da equipe

473618, Evynne Ferreira Avelino, Engenharia de Software <br />
511329, Guilherme Damasceno Nobre, Engenharia de Software

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado
- Administrador
- Produtor

## :spiral_calendar: Entidades ou tabelas do sistema

- Ingresso
- Evento
- Usuário

## :triangular_flag_on_post: Principais funcionalidades da aplicação

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.

- O produtor pode criar eventos, e nestes definir a quantidade de ingressos disponíveis à venda, além de outras informações. O produtor pode ver um relatório dos ingressos vendidos em um evento, cancelar ou atualizar informações do mesmo.
- O usuário registrado pode vizualizar os detalhes de eventos que ocorrerão e comprar ingressos.
- O usuário não registrado pode consultar eventos e ter acesso a informações dos eventos.
- O administrador poderá ver os usuários do sistema e excluir algum usuário específico.

---

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:

---

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

## :shipit: Operações implementadas para cada entidade da aplicação

| Entidade | Criação | Leitura | Atualização | Remoção |
| -------- | ------- | ------- | ----------- | ------- |
| Ingresso | X       | X       | X           | X       |
| Evento   | X       | X       | X           | X       |
| Usuário  | X       | X       |             | X       |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL            |
| ----------- | -------------- |
| GET         | api/entidade1/ |
| POST        | api/entidade2  |
