import express from 'express';
import loginController from '../controller/loginController'
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const router : express.Router = express.Router({mergeParams : true});

const authData = {
	email : 'mihnhyuk',
	password : '1234'
}

passport.use(new LocalStrategy(
	{
		usernameField: 'name',
		passwordField: 'pwd'
	},
	function verify(username : String, password : String, cb : Function) {
		console.log('LocalStragegy', username, password)
		if (username === authData.email){
			if (password === authData.password){
				console.log('??');
				return cb(null, authData)
			}else{
				return cb(null, false, {
					message: 'Incorrect password'
				})
			}
		}else{
			return cb(null, false, {
				message: 'Incorrect username'
			})
		}
  }));



router.get('/', loginController.loginPage)

router.post('/',  passport.authenticate('local', { 
	successRedirect: '/',
	failureRedirect: '/login',
	failureMessage: false
 }),
loginController.tryLogin)

export default router;