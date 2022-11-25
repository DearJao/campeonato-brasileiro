import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import IToken from '../interface/IToken';
import UserModel from '../database/models/UserModel';
import IUser from '../interface/IUser';
import ILogin from '../interface/ILogin';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class LoginService {
  static async login(user: ILogin): Promise<IToken> {
    const userInfo = await UserModel.findOne({ where: { email: user.email } }) as IUser;

    if (!userInfo) {
      return ({ error: true, message: 'Incorrect email or password' });
    }

    if (!compareSync(user.password, userInfo.password)) {
      return ({ error: true, message: 'Incorrect email or password' });
    }

    const tokenGenerator = jwt.sign(
      { userId: userInfo.id },
      JWT_SECRET as string,
      {
        expiresIn: '7d',
      },
    );

    return { error: false, message: tokenGenerator };
  }
}

export default LoginService;
