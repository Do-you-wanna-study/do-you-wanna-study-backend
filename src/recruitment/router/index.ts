import { Router } from 'express';
import {
  RecruitmentController,
  RecruitmentPostingController,
  RecruitmentDetailController,
  RecruitmentCommentPostController,
  RecruitmentApplyController,
  RecruitmentReadApplyController,
  RecruitmentApplyAcceptController,
  RecruitmentCreateController
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
router.post('/detail/create', auth, RecruitmentCreateController)

router.patch('/detail/accept', auth, RecruitmentApplyAcceptController)
export default router;
