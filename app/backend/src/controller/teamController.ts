import { Request, Response } from 'express';
import TeamsService from '../service/TeamsService';

class TeamController {
  static async getAllTeams(_req: Request, res: Response) {
    const result = await TeamsService.getAllTeams();

    res.status(200).json(result);
  }

  static async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await TeamsService.getTeamById(+id);

    res.status(200).json(result);
  }
}

export default TeamController;
