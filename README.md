# :construction: README customizado em construção ! :construction:

<h1>Bem vindo/a ao meu projeto Campeonato Brasileiro!!</h1>

<h2>.Sobre o projeto:</h2>
  Esse projeto se trata de uma aplicação que retrata a tabela de pontos do campeonato brasileiro de futebol, com acesso de usuarios que passam por um processo de
  autorização com *JsonWebToken, para que se possa ter segurança nos dados e verificar quem é administrador para lidar com os dados. O banco de dados foi estruturado
  para qeu não haja informações faltosas sobre o times, jogos, estatisticas ou usuários, atrazés de mensagens de erros que são disparadas ao tentar adicionar dados
  invalidos.

<h2>.Construção e Features/Tecnologias:</h2
      A construção foi feita através do *Docker para que ele possa ser usado em qualquer maquina, contruido em um banco de dados relacional feito com *MySQL e
      *Sequelize, rotas com feitas com *express para facilitar a manipulação e entendimento de código, foi escrito inteiramente com *TypeScript para se ter mais
      segurança no código e facilitar a leitura do código, manutenção e escalabilidade da aplicação, todas as rotas e funções passaram por testes utilizando *chai.

<h2>.Estrutura:</h2>
      ├── app
      │   ├──🔸 backend
      │   └──🔸 frontend
      |   └──🔹 docker-compose.dev.yml
      |   └──🔹 docker-compose.yml
      |   ├── backend / src
      |       ├──🔸 controller
      |       └──🔸 database
      |       └──🔸 interface
      |       └──🔸 middlewares
      |       └──🔸 routes
      |       └──🔸 service
      |       └──🔸 tests
      |       └──🔹 app.ts
      |       └──🔸 tests
      │             ├──🔸 mocks
      |             └──🔹 change.me.test.ts
      |             └──🔹 login.test.ts
      |             └──🔹 matches.test.ts
      |             └──🔹 team.test.ts
      |    ├── frontend / src
      |        ├──🔸 components
               └──🔸 images
               └──🔸 pages
               └──🔸 services 
               └──🔸 styles
               └──🔹 App.js
               └──🔹 index.js
      Legenda:
      🔸 Diretorios
      🔹 Arquivos

<h2>.Para rodar o projeto siga as intruções:</h2>
      - Instale as dependências *npm *install
      - Para subir o projeto completo use o comando *npm *run *compose:up ou *npm *run *compose:up:dev
      (você precisa ter o docker instalado na sua maquina)

<h2>.Através desse link você testar o bancod e do=ados com o Swagger:</h2>
      - ....
