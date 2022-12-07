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
    // console.log(match);

    if (match.homeTeam === match.awayTeam) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const createdMatch = await MatchesService.createMatches(match);
    return res.status(201).json(createdMatch);
  }

  static async finishMatches(req: Request, res: Response) {
    const { id } = req.params;

    await MatchesService.finishMatches(+id);
    return res.status(200).json({ message: 'Finished' });
  }
}

export default MatchesController;
