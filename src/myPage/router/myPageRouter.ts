import { Router } from 'express';
import myPageController from '../controller';
import { isLogin } from '../../middleware/AuthCheck';

const router: Router = Router();

router.get('/', isLogin, myPageController.getMyPage);

export default router;
