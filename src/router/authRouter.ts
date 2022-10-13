import express from 'express';
import { transformAuthInfo } from 'passport';
import authController from '../controller/authController'
import passport from '../middleware/passport'

const router : express.Router = express.Router({mergeParams : true});

router.get('/login', authController.loginPage);

router.post('/login',  passport.authenticate('local', { 
	successRedirect: '/',
	failureRedirect: '/login',
 }),
 
authController.tryLogin)

router.get('/logout', authController.logout)

router.post('/signup', authController.signUp)

export default router;