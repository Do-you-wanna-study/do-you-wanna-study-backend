import express from 'express';
import {loginProcess} from '../controller'
import { logout } from '../controller';
import {signUpProcess} from '../controller';

const router : express.Router = express.Router({mergeParams : true});

router.post('/login', loginProcess)
router.get('/logout', logout)
router.post('/signup', signUpProcess)

export default router;
