import { Request, Response } from 'express';
import LoginService from '../service/loginService';
// teste do teste
class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { error, message } = await LoginService.login({ email, password });

    if (error) {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  }

  static async getUserRole(req: Request, res: Response) {
    const email = req.body.user;
    const { role } = await LoginService.getUserRole(email);

    res.status(200).json({ role });
  }
}

export default LoginController;
