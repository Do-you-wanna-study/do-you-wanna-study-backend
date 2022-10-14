import { Router } from 'express';
import AuthRouter from './authRouter'
import RecruitmentRouter from './recruitmentRouter'
import MyPageRouter from './myPageRouter'

const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/recruitment', RecruitmentRouter)
router.use('/mypage', MyPageRouter)

export default router;