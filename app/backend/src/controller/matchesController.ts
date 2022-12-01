import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  static async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    console.log(req.query);

    if (inProgress) {
      const matchesList = await MatchesService.getInProgressMatches(inProgress === 'true');
      return res.status(200).json(matchesList);
    }

    const matchesList = await MatchesService.getAllMatches();

    res.status(200).json(matchesList);
  }

  static async getInProgressMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const matchesList = await MatchesService.getInProgressMatches(inProgress === 'true');
      return res.status(200).json(matchesList);
    }
  }
}

export default MatchesController;
