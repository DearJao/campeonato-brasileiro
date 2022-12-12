import * as chai from 'chai';
import * as sinon from 'sinon';
import { Response } from 'superagent';
import App from '../app';
import MatchesModel from '../database/models/MatchesModel';
import UserModel from '../database/models/Users';
import {
  allMatches,
  matchesInProgressFalse,
  matchesInProgressTrue,
  newMatch
} from './mocks/matchesMocks';
import users from '../tests/mocks/loginMocks';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches routes tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore)

  it('verify if route GET /matches works', async () => {
    sinon.stub(MatchesModel, "findAll").resolves(allMatches as unknown as MatchesModel[]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allMatches)
  })

  it('vefify if route GET /matches?inProgress=true works', async () => {
    sinon.stub(MatchesModel, "findAll")
      .resolves(matchesInProgressTrue as unknown as MatchesModel[]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matchesInProgressTrue);
  })

  it('vefify if route GET /matches?inProgress=false works', async () => {
    sinon.stub(MatchesModel, "findAll")
      .resolves(matchesInProgressFalse as unknown as MatchesModel[]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matchesInProgressFalse);
  })

  it('requisição POST para /matches', async () => {
    sinon.stub(UserModel, "findOne").resolves(users[0] as UserModel)
    sinon.stub(MatchesModel, "create").resolves(newMatch as unknown as MatchesModel);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });

    const match = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', chaiHttpResponse.body.token)
      .send({
        homeTeam: 1,
        awayTeam: 2,
        homeTeamGoals: 7,
        awayTeamGoals: 0,
      });

    expect(match.status).to.be.equal(201);
    expect(match.body).to.be.deep.equal(newMatch)
  });

  it('vefify if you can create a match with two equals teams', async () => {
    sinon.stub(UserModel, "findOne").resolves(users[0] as UserModel)
    sinon.stub(MatchesModel, "create")
      .resolves(allMatches[0] as unknown as MatchesModel);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });

    const creator = await chai
      .request(app)
      .post('/matches')
      .set('Autorizathion', chaiHttpResponse.body.token)
      .send({
        homeTeam: 1, awayTeam: 1,
        homeTeamGoals: 0, awayTeamGoals: 0
      })

    expect(chaiHttpResponse.status).to.be.equal(422);
    expect(creator.body).to.be.deep.equal({
      message: "It is not possible to create a match with two equal teams"
    });
  })

  it('vefify if you can create a matche with a team that no exists', async () => {
    sinon.stub(UserModel, "findOne").resolves(users[0] as UserModel)
    sinon.stub(MatchesModel, "findOne").resolves(null);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });

    const creator = await chai
      .request(app)
      .post('/matches')
      .set('Autorizathion', chaiHttpResponse.body.token)
      .send({
        homeTeam: 3, awayTeam: 1,
        homeTeamGoals: 0, awayTeamGoals: 0
      })

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(creator.body).to.be.deep.equal({
      message: "There is no team with such id!"
    });
  })

  it('vefify if you can create a matche with a team that no exists', async () => {
    const creator = await chai
      .request(app)
      .post('/matches')
      .send({
        homeTeam: 2, awayTeam: 1,
        homeTeamGoals: 1, awayTeamGoals: 1
      })

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(creator.body).to.be.deep.equal({
      message: "Token must be a valid token"
    });
  })
})
