import IMatches from './IMatches';

interface ITeam {
  id?: number,
  teamName: string,
  teamHome?: IMatches[];
  teamAway?: IMatches[];
}

export default ITeam;
