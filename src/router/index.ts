import { Router } from 'express';
import AuthRouter from '../auth/router/authRouter'
import RecruitmentRouter from './RecruitmentRouter'
import MyPageRouter from './myPageRouter'


const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/recruitment', RecruitmentRouter)
router.use('/mypage', MyPageRouter)

export default router;