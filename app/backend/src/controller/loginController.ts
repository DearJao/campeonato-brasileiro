import { Request, Response } from 'express';
import LoginService from '../service/loginService';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response): Promise<Response> => {
    console.log('oiiiiiiii');
    const { email, password } = req.body;

    const result = await this.loginService.login({ email, password });

    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ token: result });
  };
}

export default LoginController;
