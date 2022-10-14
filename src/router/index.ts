import { Router } from 'express';
import AuthRouter from './authRouter'
import CommunityRouter from './communityRouter'
import MyPageRouter from './myPageRouter'

const router : Router = Router();

router.use('/auth', AuthRouter)
router.use('/community', CommunityRouter)
router.use('/mypage', MyPageRouter)

export default router;