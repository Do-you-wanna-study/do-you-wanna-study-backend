import { Router } from 'express';
import {
  RecruitmentController,
  RecruitmentPostingController,
  RecruitmentDetailController,
  RecruitmentCommentPostController,
  RecruitmentApplyController,
  RecruitmentReadApplyController,
} from '../controller';
import { auth } from '../../middleware';

const router: Router = Router({ mergeParams: true });

// /recruitment
router.get(['/', '/community/:communityID', '/community/:communityID/:filter'], RecruitmentController);
router.get('/detail', RecruitmentDetailController);
router.get('/detail/readapply', auth, RecruitmentReadApplyController);

router.post('/', auth, RecruitmentPostingController);
router.post('/detail/comment', auth, RecruitmentCommentPostController);
router.post('/detail/apply', auth, RecruitmentApplyController);

export default router;
