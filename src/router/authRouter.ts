import { Router } from 'express';
import AuthController from '../controller/AuthController';
import authCheck from '../middleware/authCheck';

const router: Router = Router();

router.post('/login', AuthController.login);
router.get('/logout', authCheck, AuthController.logout);
router.post('/signup', AuthController.signUpProcess);

export default router;
