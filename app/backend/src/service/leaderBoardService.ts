import IMatchesTeam from '../interface/IMtachesTeam';
import IStat from '../interface/IStats';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
import TeamStatsgenerator from '../middlewares/createLeaderBoard';

class LeaderboardService {
  static homeTeamLeaderBoard = async () => {
    const matches = await TeamsModel.findAll({
      raw: true,
      nest: true,
      include: [{
        where: { inProgress: false },
        model: MatchesModel,
        as: 'teamHome',
      }],
    });

    const findTeams = await TeamsModel.findAll({});
    const array = [];
    for (let index = 0; index < findTeams.length; index += 1) {
      const filtro = matches.filter(
        (match) => match.id === findTeams[index].id,
      ) as unknown as IMatchesTeam[];
      const maper = filtro.map((fil) => fil.teamHome);
      const obj = {
        id: filtro[0].id,
        teamName: filtro[0].teamName,
        teamHome: maper,
      };
      array.push(obj);
    }

    const leaderboard = array.map((match) =>
      TeamStatsgenerator.createLeaderboard(match as any));
    const sortTeams = TeamStatsgenerator.sortLeaderBoard(leaderboard as IStat[]);
    return sortTeams;
  };
}

export default LeaderboardService;
