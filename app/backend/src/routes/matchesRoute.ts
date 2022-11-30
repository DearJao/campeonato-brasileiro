import { Router } from 'express';
import MatchesController from '../controller/matchesController';

const matchesRoute = Router();

matchesRoute.get('/', (req, res) => MatchesController.getAllMatches(req, res));

export default matchesRoute;
