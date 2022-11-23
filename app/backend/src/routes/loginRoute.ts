import { Router } from 'express';
import LoginController from '../controller/loginController';

const loginRoute = Router();
const loginController = new LoginController();

loginRoute.post('/', loginController.login);

export default loginRoute;

// 97630609737 and https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW
// [Sala 0][TFC][Req 0] -
// duvida -
