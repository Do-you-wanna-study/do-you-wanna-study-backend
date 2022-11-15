import { Router } from 'express';
import { RecruitmentController, RecruitmentPostingController } from '../controller';
import isLogin from '../../middleware/AuthCheck';

const router: Router = Router({mergeParams: true});

router.get(['/', '/:communityID', '/:communityID/:filter'] , RecruitmentController);
router.post('/', RecruitmentPostingController)

export default router;
