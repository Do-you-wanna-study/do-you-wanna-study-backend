import { Router } from 'express';
import auth from '../../middleware/auth';
import { 
	MypageController,
	MyRecruitController,
 } from '../controller';

const router: Router = Router();

router.get('/', auth, MypageController);
router.get('/myrecruit', auth, MyRecruitController);

export default router;
