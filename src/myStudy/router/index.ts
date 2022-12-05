import { Router } from 'express';
import { myStudy } from '../controller';
import {auth} from '../../middleware'

const router : Router = Router();

router.get('/', auth, myStudy)



export default router;