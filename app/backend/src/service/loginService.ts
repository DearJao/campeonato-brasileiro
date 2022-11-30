import { compareSync } from 'bcryptjs';
import IToken from '../interface/IToken';
import Users from '../database/models/Users';
import IUser from '../interface/IUser';
import ILogin from '../interface/ILogin';
import { tokenGenerator } from '../middlewares/tokenGenerator';

class LoginService {
  static async login(user: ILogin): Promise<IToken> {
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

    const { email } = userInfo;

    return { error: false, message: tokenGenerator(email) };
  }

  static async getUserRole(email: string): Promise<{ role: string }> {
    // console.log(user);
    const userInfo = await Users.findOne({ where: { email } }) as IUser;

    return { role: userInfo.role };
  }
}

export default LoginService;
