import ITeam from '../interface/ITeam';
import IStat from '../interface/IStats';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
import TeamStatsgenerator from '../middlewares/createLeaderBoard';

class LeaderboardService {
  static homeTeamLeaderBoard = async () => {
    const matches = await TeamsModel.findAll({
      include: [{
        model: MatchesModel,
        as: 'homeTeam',
        where: { inProgress: false },
      }],
    });
    console.log('18', this.homeTeamLeaderBoard);

    const leaderboard = matches.map((team) =>
      TeamStatsgenerator.createLeaderboard(team as ITeam));

    const sortTeams = TeamStatsgenerator.sortRankings(leaderboard as IStat[]);
    console.log('24', sortTeams);

    return sortTeams;
  };
}

export default LeaderboardService;
