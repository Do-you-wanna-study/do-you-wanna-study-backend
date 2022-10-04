import { Router } from 'express';
import auth from './authRouter'
import community from './communityRouter'
import myPage from './myPageRouter'

const router : Router = Router();

router.use('/login', auth)
router.use('/community', community)
router.use('/mypage', myPage)


export default router;