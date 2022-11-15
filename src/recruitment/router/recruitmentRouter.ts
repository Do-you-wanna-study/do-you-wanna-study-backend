import { Router } from 'express';
import { RecruitmentController, RecruitmentPostingController } from '../controller';
import isLogin from '../../middleware/AuthCheck';

const router: Router = Router({mergeParams: true});
// 로그인 정보 있어야하는 것들 2번째 파라미터에 집어 넣으면 됨
router.get('/', RecruitmentController);
router.get(['/:communityID', '/:communityID/:filter'] , RecruitmentController);
// router.get('/:communityID/proc', RecruitmentController.procStudy);
// router.get('/:communityID/done', RecruitmentController.doneStudy);

router.post('/', RecruitmentPostingController)

export default router;
