import { NextFunction, Request, Response } from 'express';
import { tokenDecoded } from './tokenGenerator';

export default async function authToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Token must be a valid token' });

    const userId = tokenDecoded(token as string);

    req.body.user = userId.email;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
