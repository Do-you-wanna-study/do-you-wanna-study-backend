import { Router } from 'express';
import RecruitmentController from '../controller/RecruitmentController';
import AuthCheck from '../middleware/AuthCheck';

const router: Router = Router();

router.get('/', RecruitmentController.mainPage);
router.get('/:communityID/all', RecruitmentController.mainPage);
router.get('/:communityID/proc', RecruitmentController.procStudy);
router.get('/:communityID/done', RecruitmentController.doneStudy);

export default router;
