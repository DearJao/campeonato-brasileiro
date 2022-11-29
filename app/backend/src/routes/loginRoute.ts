import { Router } from 'express';
import authToken from '../middlewares/tokenValidate';
import LoginValidation from '../middlewares/loginValidation';
import LoginController from '../controller/loginController';

const loginRoute = Router();

loginRoute.post('/', LoginValidation, (req, res) => LoginController.login(req, res));
loginRoute.get('/validate', authToken, (req, res) => LoginController.getUserRole(req, res));

export default loginRoute;

// [Sala 0][TFC][Req 0] - duvida sobre
// 97630609737 and https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW
// ta rodando start invés de dev, nao salva as alterações
