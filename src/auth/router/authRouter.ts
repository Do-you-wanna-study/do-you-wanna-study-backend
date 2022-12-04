import express from 'express';
import {loginPage} from '../controller'
import {loginProcess} from '../controller'
import { logout } from '../controller';
import {signUpProcess} from '../controller';

const router : express.Router = express.Router({mergeParams : true});

router.get('/login', loginPage);
router.post('/login', loginProcess)
router.get('/logout', logout)
router.post('/signup', signUpProcess)

export default router;
