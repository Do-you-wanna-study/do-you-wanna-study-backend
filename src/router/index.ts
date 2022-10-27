import { Router } from 'express';
import auth from '../auth/router/authRouter'
import community from './communityRouter'
import myPage from './myPageRouter'


const router : Router = Router();

router.use('/auth', auth)
router.use('/community', community)
router.use('/mypage', myPage)


export default router;