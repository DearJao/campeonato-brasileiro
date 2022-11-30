import ITeam from '../interface/ITeam';
import TeamsModel from '../database/models/TeamsModel';

class TeamsService {
  static async getAllTeams(): Promise<ITeam[]> {
    const teamsList: ITeam[] = await TeamsModel.findAll();

    return teamsList;
  }

  static async getTeamById(id: number): Promise<ITeam | null> {
    const team: ITeam | null = await TeamsModel.findOne({ where: { id } });

    return team;
  }
}

export default TeamsService;
