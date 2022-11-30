import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  static async getAllMatches(_req: Request, res: Response) {
    const matchesList = await MatchesService.getAllMatches();

    res.status(200).json(matchesList);
  }

  // static async getTeamById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const result = await MatchesService.getTeamById(+id);

  //   res.status(200).json(result);
  // }
}

export default MatchesController;
