import { Router } from 'express';
import RecruitmentController from '../controller/RecruitmentController';
// import isLogin from '../../middleware/AuthCheck';

const router: Router = Router();
// 로그인 정보 있어야하는 것들 2번째 파라미터에 집어 넣으면 됨
router.get('/', RecruitmentController.mainPage);
router.get('/:communityID/all', RecruitmentController.mainPage);
router.get('/:communityID/proc', RecruitmentController.procStudy);
router.get('/:communityID/done', RecruitmentController.doneStudy);

export default router;
