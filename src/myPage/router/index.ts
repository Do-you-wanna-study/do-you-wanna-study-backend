import { Router } from 'express';
import auth from '../../middleware/auth';
import { 
	FeedbackController,
	MypageController,
	MyRecruitController,
 } from '../controller';

const router: Router = Router();

router.get('/', auth, MypageController);
router.get('/myrecruit', auth, MyRecruitController);
router.get('/feedback', auth, FeedbackController)

export default router;
