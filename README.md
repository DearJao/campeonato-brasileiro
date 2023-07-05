# :construction: README customizado em construção ! :construction:

<h1><strong>Bem vindo/a ao meu projeto Campeonato Brasileiro!!<strong></h1>

<h2><strong>.Sobre o projeto:</strong></h2>
  Esse projeto se trata de uma aplicação que retrata a tabela de pontos do campeonato brasileiro de futebol, com acesso de usuarios que passam por um processo de
  autorização com <strong>JsonWebToken</strong>, para que se possa ter segurança nos dados e verificar quem é administrador para lidar com os dados. O banco de dados
  foi estruturado para qeu não haja informações faltosas sobre o times, jogos, estatisticas ou usuários, atrazés de mensagens de erros que são disparadas ao tentar
  adicionar dados invalidos.

<h2><strong>.Construção e Features/Tecnologias:</strong></h2                                                                    
      A construção foi feita através do <strong>Docker</strong> para que ele possa ser usado em qualquer maquina, contruido em um banco de dados relacional feito com
      <strong>MySQL</strong> e <strong>Sequelize</strong>, rotas com feitas com <strong>express</strong> para facilitar a manipulação e entendimento de código, foi
      escrito inteiramente com <strong>TypeScript</strong> para se ter mais segurança no código e facilitar a leitura do código, manutenção e escalabilidade da
      aplicação, todas as rotas efunções passaram por testes utilizando <strong>chai</strong>.

<h2><strong>.Estrutura:</strong></h2>
      .app</br>
      ├───├──🔸 backend</br>
      │───└──🔸 frontend</br>
      |───└──🔹 docker-compose.dev.yml</br>
      |───└──🔹 docker-compose.yml</br>
      |──────├── backend / src</br>
      |──────────├──🔸 controller</br>
      |──────────└──🔸 database</br>
      |──────────└──🔸 interface</br>
      |──────────└──🔸 middlewares</br>
      |──────────└──🔸 routes</br>
      |──────────└──🔸 service</br>
      |──────────└──🔸 tests</br>
      |──────────└──🔹 app.ts</br>
      |──────────└──🔸 tests</br>
      │────────────────├──🔸 mocks</br>
      |────────────────└──🔹 change.me.test.ts</br>
      |────────────────└──🔹 login.test.ts</br>
      |────────────────└──🔹 matches.test.ts</br>
      |────────────────└──🔹 team.test.ts</br>
      |──────├── frontend / src</br>
      |──────────├──🔸 components</br>
      |──────────└──🔸 images</br>
      |──────────└──🔸 pages</br>
      |──────────└──🔸 services</br> 
      |──────────└──🔸 styles</br>
      |──────────└──🔹 App.js</br>
      |──────────└──🔹 index.js</br>
  .Legenda:</br>
      🔸 Diretorios</br>
      🔹 Arquivos</br>

<h2><strong>.Para rodar o projeto siga as intruções:</strong></h2>
      - Instale as dependências <strong>npm install</strong>
      </br>
      - Para subir o projeto completo use o comando <strong>npm run compose:up</strong> ou <strong>npm run compose: up:dev</strong>
      </br>
      (você precisa ter o docker instalado na sua maquina)
      </br>

<h2><strong>.Através desse link você pode testar o banco de dados com o Swagger:</strong></h2>
  </br>
      - ....
