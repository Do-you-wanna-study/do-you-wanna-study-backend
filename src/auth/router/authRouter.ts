import express from 'express';
import authController from '../controller'


const router : express.Router = express.Router({mergeParams : true});
router.get('/login', authController.loginPage);
router.post('/login',  authController.tryLogin, authController.loginPage)

router.get('/logout', authController.logout)

router.post('/signup', authController.signUpProcess)

export default router;
