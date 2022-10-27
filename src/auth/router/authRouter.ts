import express from 'express';
import passport from 'passport';
import authController from '../controller/authController'


const router : express.Router = express.Router({mergeParams : true});

router.get('/login', authController.loginPage);

router.post('/login',  passport.authenticate('local', { 
	successRedirect: '/',
	failureRedirect: '/login',
 }), authController.loginPage)

router.get('/logout', authController.logout)

router.post('/signup', authController.signUpProcess)

export default router;