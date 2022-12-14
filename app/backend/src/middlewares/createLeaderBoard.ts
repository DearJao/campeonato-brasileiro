import IStat from '../interface/IStats';
import IMatches from '../interface/IMatches';
import ITeam from '../interface/ITeam';

class TeamStatsGenerator {
  static scoreRules = (teamHome: IMatches[]) => {
    let defeats = 0;
    let points = 0;
    let ties = 0;
    let wins = 0;

    teamHome.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals > awayTeamGoals) {
        points += 3; wins += 1;
      }

      if (homeTeamGoals < awayTeamGoals) {
        defeats += 1;
      }

      if (homeTeamGoals === awayTeamGoals) {
        ties += 1; points += 1;
      }
    });

    return { wins, ties, points, defeats };
  };

  static teamHomeGoals = (teamHome: IMatches[]) => {
    const goalsFavor = teamHome.reduce((acc: number, curr) => acc + curr.homeTeamGoals, 0);
    const goalsOwn = teamHome.reduce((acc: number, curr) => acc + curr.awayTeamGoals, 0);
    const goalsBalance = (goalsFavor - goalsOwn);
    return { goalsFavor, goalsOwn, goalsBalance };
  };

  static teamEfficiency = (points: number, games: number) => {
    const efficiency = ((points / (games * 3)) * 100).toFixed(2);
    return efficiency;
  };

  static createLeaderboard = ({ teamName, teamHome }: ITeam) => {
    if (teamHome) {
      const ranking = {
        name: teamName,
        totalPoints: this.scoreRules(teamHome).points,
        totalGames: teamHome.length,
        totalVictories: this.scoreRules(teamHome).wins,
        totalDraws: this.scoreRules(teamHome).ties,
        totalLosses: this.scoreRules(teamHome).defeats,
        goalsFavor: this.teamHomeGoals(teamHome).goalsFavor,
        goalsOwn: this.teamHomeGoals(teamHome).goalsOwn,
        goalsBalance: this.teamHomeGoals(teamHome).goalsBalance,
        efficiency: this.teamEfficiency(this.scoreRules(teamHome).points, teamHome.length),
      };
      return ranking;
    }
  };

  static sortRankings = (ranking: IStat[]) => {
    ['goalsOwn', 'goalsFavor', 'goalsBalance', 'totalVictories', 'totalPoints'].forEach((x) => {
      ranking.sort((a: any, b: any) => {
        if (a[x] === undefined || b[x] === undefined) {
          return 0;
        }
        if (a[x] < b[x]) {
          return 1;
        }
        if (a[x] > b[x]) {
          return -1;
        }
        return 0;
      });
    });
    return ranking;
  };
}

export default TeamStatsGenerator;
