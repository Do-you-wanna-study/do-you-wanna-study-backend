import { Router } from 'express';
import { 
	myStudy,
	EndMystudyController,
	ReviewPostController,
	ReviewPageController
 } from '../controller';
import {auth} from '../../middleware'

const router : Router = Router();

router.get('/', auth, myStudy)
router.get('/detail/review', auth, ReviewPageController)

router.post('/detail/review', auth, ReviewPostController)
 
router.patch('/detail/end', auth, EndMystudyController)

export default router;