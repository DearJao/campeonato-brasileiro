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

  // static async getInPrgressMatches(inProgress: boolean): Promise<IMatches[]> {
  //   const matchesList: IMatches[] = await MatchesModel.findAll({
  //     where: { inProgress },
  //     include: {
  //       all: true,
  //       attributes: {
  //         exclude: ['id'],
  //       },
  //     },
  //   });

  //   return matchesList;
  // }
}

export default MatchesService;
