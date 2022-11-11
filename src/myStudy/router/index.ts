import { Router } from 'express';
import { myStudy } from '../controller';
import {authCheck} from '../../middleware'

const router : Router = Router();

router.get('/', authCheck, myStudy)



export default router;