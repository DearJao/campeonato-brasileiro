import { Router } from 'express';
import authToken from '../middlewares/tokenValidate';
import MatchesController from '../controller/matchesController';
import matchValidations from '../middlewares/matchvalidations';

const matchesRoute = Router();

matchesRoute.get('/', (req, res) => MatchesController.getAllMatches(req, res));
matchesRoute.post('/', authToken, matchValidations, (req, res) =>
  MatchesController.createMatches(req, res));
matchesRoute.patch('/:id/finish', (req, res) => MatchesController.finishMatches(req, res));

export default matchesRoute;
