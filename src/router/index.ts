import { Router } from 'express';
import AuthRouter from '../auth/router'
import RecruitmentRouter from '../recruitment/router'
import MyPageRouter from '../myPage/router'
import MyStudyRouter from '../myStudy/router';

const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/recruitment', RecruitmentRouter)
router.use('/mypage', MyPageRouter)
router.use('/mystudy', MyStudyRouter)

export default router;