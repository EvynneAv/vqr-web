# :checkered_flag: VQR 

Sistema de venda de ingressos online para eventos de vaquejada.

## :technologist: Membros da equipe

473618, Evynne Ferreira Avelino, Engenharia de Software <br />
511329 - Guilherme Damasceno Nobre - Engenharia de Software

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado
- Administrador
- Produtor

## :spiral_calendar: Entidades ou tabelas do sistema

- Bilhete 
- Evento
- Comentário

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.

- O produtor pode criar eventos, e nestes definir a quantidade de bilhetes disponíveis à venda, além de outras informações. O produtor tem acesso a um relatório detalhado do evento, além de poder cancelar ou atualizar informações do mesmo.
- O usuário registrado pode vizualizar os detalhes de eventos que ocorrerão e comprar bilhetes disponíveis nos mesmos. Além disso, pode comentar em eventos futuros ou já ocorridos e vizualizar o comentário de outros usuários registrados. Em adição este pode vizualizar o perfil de produtores de evento.
- O usuário não registrado pode consultar eventos e ter acesso a informações como: Quantidade de ingressos, dia, horário, produtor etc. Além de poder ver os comentários disponíveis em cada evento.
- O administrador terá a função de autorizar ou remover a publicação ou atualização de um evento e ter acesso ao seu relatório. Além disso, o administrador pode remover comentários de publicações. 

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Bilhete | X |  X  | X | X |
| Evento | X |  X  |  X | X |
| Comentário | X |  X  | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |
