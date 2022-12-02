import { Router } from 'express';
import {
  RecruitmentController,
  RecruitmentPostingController,
  RecruitmentDetailController,
  RecruitmentCommentPostController,
  RecruitmentApplyController,
  RecruitmentReadApplyController,
} from '../controller';
import isLogin from '../../middleware/AuthCheck';

const router: Router = Router({ mergeParams: true });

// /recruitment
router.get(['/', '/community/:communityID', '/community/:communityID/:filter'], RecruitmentController);
router.get('/detail', RecruitmentDetailController);
router.get('/detail/readapply', isLogin, RecruitmentReadApplyController);

router.post('/', isLogin, RecruitmentPostingController);
router.post('/detail/comment', isLogin, RecruitmentCommentPostController);
router.post('/detail/apply', isLogin, RecruitmentApplyController);

export default router;
