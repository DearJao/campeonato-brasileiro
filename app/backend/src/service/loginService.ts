import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import IToken from '../interface/IToken';
import Users from '../database/models/Users';
import IUser from '../interface/IUser';
import ILogin from '../interface/ILogin';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class LoginService {
  static async login(user: ILogin): Promise<IToken> {
    console.log(user);
    if (user === undefined) {
      return ({ error: true, message: 'User is undefined' });
    }

    const userInfo = await Users.findOne({ where: { email: user.email } }) as IUser;

    if (!userInfo) {
      return ({ error: true, message: 'Incorrect email or password' });
    }

    if (!compareSync(user.password, userInfo.password)) {
      return ({ error: true, message: 'Incorrect email or password' });
    }

    const { id, email } = userInfo;

    const tokenGenerator = jwt.sign(
      { id, email },
      JWT_SECRET as string,
      { expiresIn: '7d' },
    );

    return { error: false, message: tokenGenerator };
  }

  static async getUserRole(email: string): Promise<{ role: string }> {
    const userInfo = await Users.findOne({ where: { email } }) as IUser;

    return { role: userInfo.role };
  }
}

export default LoginService;
