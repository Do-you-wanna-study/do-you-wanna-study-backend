import { Router } from 'express';
import AuthRouter from '../auth/router/authRouter'
import RecruitmentRouter from '../recruitment/router/recruitmentRouter'
import MyPageRouter from '../myPage/router/myPageRouter'
import MyStudyRouter from '../myStudy/router';

const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/recruitment', RecruitmentRouter)
router.use('/mypage', MyPageRouter)
router.use('/mystudy', MyStudyRouter)

export default router;