import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderBoardService';
// import AwayLeaderBoardService from '../service/awayLeaderBoardService';

class LeaderBoardController {
  static async homeTeamLeaderBoard(_req: Request, res: Response) {
    const result = await LeaderboardService.getHomeLeaderboard();

    res.status(200).json(result);
  }

  static async awayTeamLeaderBoard(_req: Request, res: Response) {
    const result = await LeaderboardService.getAwayLeaderboard();

    res.status(200).json(result);
  }

  static async getAllLearderBoard(_req: Request, res: Response) {
    const leaderboard = await LeaderboardService.getLeaderboard();

    res.status(200).json(leaderboard);
  }
}

export default LeaderBoardController;
