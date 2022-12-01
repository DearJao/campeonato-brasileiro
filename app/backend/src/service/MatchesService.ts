import IMatches from '../interface/IMatches';
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
    const creator: IMatches = await MatchesModel.create({ ...match, inProgress: true });

    return creator;
  }

  static async changeStateMatches(id: number) {
    await MatchesModel.update({ inProgress: 'false' }, {
      where: { id },
    });

    return { message: 'Finished' };
  }
}

export default MatchesService;
