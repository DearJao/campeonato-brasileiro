import IMatches from '../interface/IMatches';
import IGoals from '../interface/IGoals';
import MatchesModel from '../database/models/MatchesModel';

class MatchesService {
  static async getAllMatches(): Promise<IMatches[]> {
    const matchesList: IMatches[] = await MatchesModel.findAll({
      include: {
        all: true,
        attributes: {
          exclude: ['id'],
        },
      },
    });

    return matchesList;
  }

  static async getInProgressMatches(inProgress: boolean): Promise<IMatches[]> {
    const matchesList: IMatches[] = await MatchesModel.findAll({
      where: { inProgress },
      include: {
        all: true,
        attributes: {
          exclude: ['id'],
        },
      },
    });

    return matchesList;
  }

  static async createMatches(match: IMatches): Promise<IMatches> {
    const creator: IMatches = await MatchesModel.create({ ...match });

    return creator;
  }

  static async finishMatches(id: number): Promise<void> {
    await MatchesModel.update({ inProgress: 'false' }, {
      where: { id },
    });
  }

  static async updateMatches(goals: IGoals, id: number): Promise<void> {
    await MatchesModel.update(goals, {
      where: { id },
    });
  }
}

export default MatchesService;
