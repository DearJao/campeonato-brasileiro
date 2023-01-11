import IStat from '../interface/IStats';
import IMatches from '../interface/IMatches';
import ITeam from '../interface/ITeam';

const getHomeTeamStats = (teamHome: IMatches[]) => {
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

const getAwayTeamStats = (teamAway: IMatches[]) => {
  let defeats = 0;
  let points = 0;
  let ties = 0;
  let wins = 0;

  teamAway.forEach(({ awayTeamGoals, homeTeamGoals }) => {
    if (awayTeamGoals > homeTeamGoals) {
      points += 3; wins += 1;
    }

    if (awayTeamGoals < homeTeamGoals) {
      defeats += 1;
    }

    if (awayTeamGoals === homeTeamGoals) {
      ties += 1; points += 1;
    }
  });

  return { wins, ties, points, defeats };
};

const getTeamsData = (homeMatches: IMatches[], awayMatches: IMatches[]) => {
  const homeData = getHomeTeamStats(homeMatches);
  const awayData = getAwayTeamStats(awayMatches);

  return {
    points: homeData.points + awayData.points,
    defeats: homeData.defeats + awayData.defeats,
    wins: homeData.wins + awayData.wins,
    ties: homeData.ties + awayData.ties,
  };
};

const teamHomeGoals = (teamHome: IMatches[]) => {
  const goalsFavor = teamHome.reduce((acc: number, curr) => acc + curr.homeTeamGoals, 0);
  const goalsOwn = teamHome.reduce((acc: number, curr) => acc + curr.awayTeamGoals, 0);
  const goalsBalance = (goalsFavor - goalsOwn);
  return { goalsFavor, goalsOwn, goalsBalance };
};

const teamAwayGoals = (teamAway: IMatches[]) => {
  const goalsFavor = teamAway.reduce((acc: number, curr) => acc + curr.awayTeamGoals, 0);
  const goalsOwn = teamAway.reduce((acc: number, curr) => acc + curr.homeTeamGoals, 0);
  const goalsBalance = (goalsFavor - goalsOwn);
  return { goalsFavor, goalsOwn, goalsBalance };
};

const countGoals = (teamHome: IMatches[], teamAway: IMatches[]) => {
  const homeGoals = teamHomeGoals(teamHome);
  const awayGoals = teamAwayGoals(teamAway);

  return {
    goalsFavor: homeGoals.goalsFavor + awayGoals.goalsFavor,
    goalsOwn: homeGoals.goalsOwn + awayGoals.goalsOwn,
  };
};

const createLeaderboard = (team: ITeam, matches: IMatches[]): IStat => {
  const homeMatches = matches.filter((match) => match.homeTeam === team.id);
  const awayMatches = matches.filter((match) => match.awayTeam === team.id);
  const filtredMatches = [...awayMatches, ...homeMatches];
  const { points, wins, defeats, ties } = getTeamsData(homeMatches, awayMatches);
  const { goalsFavor, goalsOwn } = countGoals(homeMatches, awayMatches);
  return {
    name: team.teamName,
    totalPoints: points,
    totalGames: filtredMatches.length,
    totalVictories: wins,
    totalDraws: ties,
    totalLosses: defeats,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: Number(((points / (filtredMatches.length * 3)) * 100).toFixed(2)),
  };
};

const homeTeamStats = (team: ITeam, matches: IMatches[]): IStat => {
  const homeMatches = matches.filter((match) => match.homeTeam === team.id);
  const { points, wins, defeats, ties } = getHomeTeamStats(homeMatches);
  const { goalsFavor, goalsOwn } = teamHomeGoals(homeMatches);
  return {
    name: team.teamName,
    totalPoints: points,
    totalGames: homeMatches.length,
    totalVictories: wins,
    totalDraws: ties,
    totalLosses: defeats,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: Number(((points / (homeMatches.length * 3)) * 100).toFixed(2)),
  };
};

const awayTeamStats = (team: ITeam, matches: IMatches[]): IStat => {
  const awayMatches = matches.filter((match) => match.awayTeam === team.id);
  const { points, wins, defeats, ties } = getAwayTeamStats(awayMatches);
  const { goalsFavor, goalsOwn } = teamAwayGoals(awayMatches);
  return {
    name: team.teamName,
    totalPoints: points,
    totalGames: awayMatches.length,
    totalVictories: wins,
    totalDraws: ties,
    totalLosses: defeats,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: Number(((points / (awayMatches.length * 3)) * 100).toFixed(2)),
  };
};

export default createLeaderboard;
export { awayTeamStats, homeTeamStats };
