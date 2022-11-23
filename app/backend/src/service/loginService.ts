import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import IToken from '../interface/IToken';
import UserModel from '../database/models/UserModel';
import IUser from '../interface/IUser';
import ILogin from '../interface/ILogin';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class LoginService {
  public model = UserModel;

  async login(user: ILogin): Promise<IToken> {
    const userInfo = await this.model.findOne({ where: { email: user.email } }) as IUser;

    if (!user) {
      throw new Error('User not found');
    }

    if (!compareSync(user.password, userInfo.password)) {
      throw new Error('Incorrect password');
    }

    const tokenGenerator = jwt.sign(
      { userId: userInfo.id },
      JWT_SECRET as string,
      {
        expiresIn: '7d',
      },
    );

    return { message: tokenGenerator };
  }
}

export default LoginService;
