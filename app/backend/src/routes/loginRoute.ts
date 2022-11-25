import { Router } from 'express';
import LoginValidation from '../middlewares/loginValidation';
import LoginController from '../controller/loginController';

const loginRoute = Router();
// const loginController = new LoginController();

loginRoute.post('/', LoginValidation, (req, res) => LoginController.login(req, res));

export default loginRoute;
