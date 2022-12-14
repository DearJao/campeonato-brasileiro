import IMatches from './IMatches';

interface ITeam {
  id: number,
  teamName: string,
  teamHome?: IMatches[];
}

export default ITeam;
