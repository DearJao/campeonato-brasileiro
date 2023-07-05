# :construction: README customizado em construção ! :construction:

<h1><summary><strong>Bem vindo/a ao meu projeto Campeonato Brasileiro!!<summary><strong></h1>

<h2><summary><strong>.Sobre o projeto:<summary><strong></h2>
  Esse projeto se trata de uma aplicação que retrata a tabela de pontos do campeonato brasileiro de futebol, com acesso de usuarios que passam por um processo de
  autorização com `JsonWebToken`, para que se possa ter segurança nos dados e verificar quem é administrador para lidar com os dados. O banco de dados foi estruturado
  para qeu não haja informações faltosas sobre o times, jogos, estatisticas ou usuários, atrazés de mensagens de erros que são disparadas ao tentar adicionar dados
  invalidos.

<h2><summary><strong>.Construção e Features/Tecnologias:<summary><strong></h2                                                                    
      A construção foi feita através do `Docker` para que ele possa ser usado em qualquer maquina, contruido em um banco de dados relacional feito com `MySQL` e
      </br>
      `Sequelize`, rotas com feitas com `express` para facilitar a manipulação e entendimento de código, foi escrito inteiramente com `TypeScript` para se ter mais
      </br>
      segurança no código e facilitar a leitura do código, manutenção e escalabilidade da aplicação, todas as rotas e funções passaram por testes utilizando `chai`.

<h2><summary><strong>.Estrutura:<summary><strong></h2>
  </br>
      ├── app</br>
      │   ├──🔸 backend</br>
      │   └──🔸 frontend</br>
      |   └──🔹 docker-compose.dev.yml</br>
      |   └──🔹 docker-compose.yml</br>
      |   ├── backend / src</br>
      |       ├──🔸 controller</br>
      |       └──🔸 database</br>
      |       └──🔸 interface</br>
      |       └──🔸 middlewares</br>
      |       └──🔸 routes</br>
      |       └──🔸 service</br>
      |       └──🔸 tests</br>
      |       └──🔹 app.ts</br>
      |       └──🔸 tests</br>
      │             ├──🔸 mocks</br>
      |             └──🔹 change.me.test.ts</br>
      |             └──🔹 login.test.ts</br>
      |             └──🔹 matches.test.ts</br>
      |             └──🔹 team.test.ts</br>
      |    ├── frontend / src</br>
      |        ├──🔸 components</br>
               └──🔸 images</br>
               └──🔸 pages</br>
               └──🔸 services</br> 
               └──🔸 styles<br>
               └──🔹 App.js</br>
               └──🔹 index.js</br>
      Legenda:<br>
      🔸 Diretorios</br>
      🔹 Arquivos</br>

<h2><summary><strong>.Para rodar o projeto siga as intruções:<summary><strong></h2>
      - Instale as dependências `npm install`
      </br>
      - Para subir o projeto completo use o comando `npm run compose:up` ou `npm run compose:up:dev`
      </br>
      (você precisa ter o docker instalado na sua maquina)
      </br>

<h2><summary><strong>.Através desse link você testar o bancod e do=ados com o Swagger:<summary><strong></h2>
  </br>
      - ....
