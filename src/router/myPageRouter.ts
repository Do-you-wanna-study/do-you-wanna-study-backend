import { Router } from 'express';
import MyPageController from '../controller/MyPageController';

const router: Router = Router();

router.get('/', MyPageController.getMyPage);

export default router;
