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
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const match = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true };

    const createdMatch = await MatchesService.createMatches(match);
    return res.status(201).json(createdMatch);
  }

  static async updateMatches(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;

    await MatchesService.updateMatches({ homeTeamGoals, awayTeamGoals }, +id);
    return res.status(200).json({ message: 'Goals Added' });
  }

  static async finishMatches(req: Request, res: Response) {
    const { id } = req.params;

    await MatchesService.finishMatches(+id);
    return res.status(200).json({ message: 'Finished' });
  }
}

export default MatchesController;
