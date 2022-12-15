interface IMatchesTeam {
  id: number,
  teamName: string,
  teamHome: {
    id: number,
    homeTeam: number,
    homeTeamGoals: number,
    awayTeam: number,
    awayTeamGoals: number,
    inProgress: number,
  }
}

export default IMatchesTeam;
