import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderBoardService';

class LeaderBoardController {
  static async homeTeamLeaderBoard(_req: Request, res: Response) {
    const result = await LeaderboardService.homeTeamLeaderBoard();
    // console.log('11', result);

    res.status(200).json(result);
  }
}

export default LeaderBoardController;
