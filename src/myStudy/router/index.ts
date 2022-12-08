import { Router } from 'express';
import { 
	myStudy,
	EndMystudyController
 } from '../controller';
import {auth} from '../../middleware'

const router : Router = Router();

router.get('/', auth, myStudy)

router.patch('/detail/end', auth, EndMystudyController)


export default router;