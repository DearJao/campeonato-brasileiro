import { Router } from 'express';
import TeamController from '../controller/teamController';

const teamRoute = Router();

teamRoute.get('/', (req, res) => TeamController.getAllTeams(req, res));
teamRoute.get('/:id', (req, res) => TeamController.getTeamById(req, res));

export default teamRoute;
