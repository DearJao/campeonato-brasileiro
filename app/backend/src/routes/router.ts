import { Router } from 'express';
import loginRouter from './loginRoute';

const router = Router();

router.use('/login', loginRouter);

export default router;
