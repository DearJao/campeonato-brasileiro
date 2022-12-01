import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  static async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress) {
      const matchesList = await MatchesService.getInProgressMatches(inProgress === 'true');
      return res.status(200).json(matchesList);
    }

    const matchesList = await MatchesService.getAllMatches();

    res.status(200).json(matchesList);
  }

  static async createMatches(req: Request, res: Response) {
    const match = req.body;

    const createdMatch = await MatchesService.createMatches(match);
    return res.status(201).json(createdMatch);
  }

  static async changeStateMatches(req: Request, res: Response) {
    const { id } = req.params;

    const changedMatch = await MatchesService.changeStateMatches(+id);
    return res.status(200).json(changedMatch);
  }
}

export default MatchesController;
