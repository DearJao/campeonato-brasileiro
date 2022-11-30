import * as chai from 'chai';
import { Response } from 'superagent';
import App from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teams, oneTeam } from './mocks/teamsMocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('all tests for teams route', () => {

  let chaiHttpResponse: Response;

  it('verify the result of a normal request', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams')

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teams)
  });

  it('verify result without the email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1')

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(oneTeam)
  });
});