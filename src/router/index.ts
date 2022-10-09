import { Router } from 'express';
import login from './loginRouter'
import community from './communityRouter'
import myPage from './myPageRouter'

const router : Router = Router();

router.use('/login', login)
router.use('/community', community)
router.use('/mypage', myPage)


export default router;