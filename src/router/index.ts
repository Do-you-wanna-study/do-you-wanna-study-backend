import { Router } from 'express';
import AuthRouter from './AuthRouter'
import RecruitmentRouter from './RecruitmentRouter'
import MyPageRouter from './MyPageRouter'

const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/recruitment', RecruitmentRouter)
router.use('/mypage', MyPageRouter)

export default router;