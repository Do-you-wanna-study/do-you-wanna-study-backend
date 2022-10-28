import { NextFunction, Request, Response } from 'express';
import {signUpService} from '../service'
import passport from 'passport'
import status from '../../modules/statusCode'


const loginPage = async (req: Request, res: Response, next: NextFunction) => {
  // var title = 'WEB - login';
  // var list = "list";
  // var html = template.HTML(title, list, `
  //   <div style="color:red;"></div>
  //   <form action="/login" method="post">
  //     <p><input type="text" name="email" placeholder="email"></p>
  //     <p><input type="password" name="password" placeholder="password"></p>
  //     <p>
  //       <input type="submit" value="login">
  //     </p>
  //   </form>
  // `, '');
  // res.send(html);
  res.send("login")
}

const tryLogin = passport.authenticate('local', { 
	successRedirect: '/recruitment',
	failureRedirect: '/auth/login',
 })

const logout = (req: Request, res: Response, next: NextFunction) => {
	req.logout(function(err){
		if (err) { return next(err); }
		res.redirect('/');
	});
}

const signUpPage = (req: Request, res: Response, next: NextFunction) => {

  res.status(status.OK).send('sign up page');
}

/**
 * post body id, pwd
 */
const signUpProcess = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.email && req.body.nickname && req.body.password){
    const {email, nickname, password}= req.body
    signUpService(email, password, nickname)
    res.send('good')
  }else{
    res.send('bad');
  }
}

const loginController ={
	loginPage,
	tryLogin,
	logout,
  signUpPage,
  signUpProcess
}


export default loginController