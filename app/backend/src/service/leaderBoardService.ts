import TeamStatsgenerator, { homeTeamStats, awayTeamStats } from '../middlewares/createLeaderBoard';
import IStat from '../interface/IStats';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';

class LeaderboardService {
  static sortLeaderBoardTeams(a: IStat, b: IStat) {
    return b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsFavor;
  }

  static async getHomeLeaderboard(): Promise<IStat[]> {
    const matches = await MatchesService.getInProgressMatches(false);
    const teams = await TeamsService.getAllTeams();

    const leaderboard: IStat[] = teams.map((team) => homeTeamStats(team, matches));

    return leaderboard.sort(LeaderboardService.sortLeaderBoardTeams);
  }

  static async getAwayLeaderboard(): Promise<IStat[]> {
    const matches = await MatchesService.getInProgressMatches(false);
    const teams = await TeamsService.getAllTeams();

    const leaderboard: IStat[] = teams.map((team) => awayTeamStats(team, matches));

    return leaderboard.sort(LeaderboardService.sortLeaderBoardTeams);
  }

  static async getLeaderboard(): Promise<IStat[]> {
    const matches = await MatchesService.getInProgressMatches(false);
    const teams = await TeamsService.getAllTeams();

    const leaderboard: IStat[] = teams.map((team) => TeamStatsgenerator(team, matches));

    return leaderboard.sort(LeaderboardService.sortLeaderBoardTeams);
  }
}

export default LeaderboardService;
