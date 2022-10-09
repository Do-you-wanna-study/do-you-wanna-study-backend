import expresss from 'express';
import { NextFunction, Request, Response } from 'express';
// import passport from 'passport';
const passport = require('passport')
const LocalStrategy = require('passport-local');

// passport.use(new LocalStrategy(function verify(username, password, cb) {
	
	  
//   });

const loginPage = async (req: Request, res: Response, next: NextFunction) => {
	res.send("login page");
}

const tryLogin = (req: Request, res: Response, next: NextFunction) => {
	console.log('try login');
	res.send("try login");
};

const loginController ={
	loginPage,
	tryLogin
}

export default loginController