import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret' as string;

export function tokenGenerator(email: string) {
  const token = jwt.sign(
    { email },
    JWT_SECRET,
    { expiresIn: '7d' },
  );

  return token;
}

export function tokenDecoded(token: string) {
  const data = jwt.verify(token as string, JWT_SECRET) as jwt.JwtPayload;

  return data;
}
