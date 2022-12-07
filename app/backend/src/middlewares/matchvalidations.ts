import { NextFunction, Request, Response } from 'express';
import TeamsModel from '../database/models/TeamsModel';

async function matchValidations(req: Request, res: Response, next: NextFunction) {
  const match = req.body;

  if (match.homeTeam === match.awayTeam) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const findHomeTeam = await TeamsModel.findOne({ where: { id: match.homeTeam } });
  const findAwayTeam = await TeamsModel.findOne({ where: { id: match.awayTeam } });

  if (!findHomeTeam || !findAwayTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
}

export default matchValidations;
