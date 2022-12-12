const allMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Corinthans"
    },
    teamAway: {
      teamName: "Alemanha"
    }
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Corinthans"
    },
    teamAway: {
      teamName: "Palmeiras"
    }
  }
]

const newMatch = {
  id: 1,
  homeTeam: 1,
  homeTeamGoals: 7,
  awayTeam: 2,
  awayTeamGoals: 0,
  inProgress: false,
  teamHome: {
    teamName: "Corinthans"
  },
  teamAway: {
    teamName: "Alemanha"
  }
}

const finishedMatch = {
  id: 1,
  homeTeam: 16,
  homeTeamGoals: 2,
  awayTeam: 8,
  awayTeamGoals: 2,
  inProgress: false,
  teamHome: {
    teamName: "São Paulo"
  },
  teamAway: {
    teamName: "Grêmio"
  }
}

const matchesInProgressTrue = allMatches.filter((match) => match.inProgress)
const matchesInProgressFalse = allMatches.filter((match) => !match.inProgress)

export { matchesInProgressFalse, matchesInProgressTrue, allMatches, newMatch, finishedMatch }