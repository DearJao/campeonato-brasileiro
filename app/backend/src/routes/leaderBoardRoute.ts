import { Router } from 'express';
import LeaderBoardController from '../controller/leaderBoardController';

const leaderBoardRoute = Router();

leaderBoardRoute
  .get('/home', (req, res) => LeaderBoardController.homeTeamLeaderBoard(req, res));
leaderBoardRoute
  .get('/away', (req, res) => LeaderBoardController.awayTeamLeaderBoard(req, res));
leaderBoardRoute
  .get('/', (req, res) => LeaderBoardController.getAllLearderBoard(req, res));

export default leaderBoardRoute;
