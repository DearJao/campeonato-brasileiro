import { Router } from 'express';
import LeaderBoardController from '../controller/leaderBoardController';

const leaderBoardRoute = Router();

leaderBoardRoute
  .get('/home', (req, res) => LeaderBoardController.homeTeamLeaderBoard(req, res));

export default leaderBoardRoute;
