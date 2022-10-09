import { NextFunction, Request, Response } from 'express';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy


const authData = {
	email : 'mihnhyuk',
	password : '1234'
}

passport.serializeUser((user: String, done: Function) => {
	done(null, user);
})

passport.deserializeUser((user: String, done: Function) => {
	done(null, user);
})

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