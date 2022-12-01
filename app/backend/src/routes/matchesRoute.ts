import { Router } from 'express';
import authToken from '../middlewares/tokenValidate';
import MatchesController from '../controller/matchesController';

const matchesRoute = Router();

matchesRoute.get('/', (req, res) => MatchesController.getAllMatches(req, res));
matchesRoute.post('/', authToken, (req, res) => MatchesController.createMatches(req, res));
matchesRoute.patch('/:id', (req, res) => MatchesController.changeStateMatches(req, res));

export default matchesRoute;
