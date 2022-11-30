import { Router } from 'express';
import authToken from '../middlewares/tokenValidate';
import LoginValidation from '../middlewares/loginValidation';
import LoginController from '../controller/loginController';

const loginRoute = Router();

loginRoute.post('/', LoginValidation, (req, res) => LoginController.login(req, res));
loginRoute.get('/validate', authToken, (req, res) => LoginController.getUserRole(req, res));

export default loginRoute;
