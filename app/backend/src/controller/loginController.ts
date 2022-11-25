import { Request, Response } from 'express';
import LoginService from '../service/loginService';

class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { error, message } = await LoginService.login({ email, password });

    if (error) {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  }
}

export default LoginController;
