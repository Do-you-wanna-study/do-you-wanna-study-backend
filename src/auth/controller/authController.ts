import { NextFunction, Request, Response } from 'express';
// import service from '../service/loginService'
import passport from 'passport'
import template from '../../lib/template'
import getUser from '../model/getUser'
import status from '../../modules/statusCode'
import crypto from 'crypto'

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
  const user = getUser("min")
  console.log(user)
  res.send("login")
}

const tryLogin = passport.authenticate('local', { 
	successRedirect: '/',
	failureRedirect: '/login',
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
  if (req.body.id){
    const {id, nickname, pwd}= req.body
    db.query('SELECT * FROM User WHERE user_id = ?', 
    [id],
    function(err, results, fields){
      if (err){
        console.log(err);
        res.send(err);
      }else{
        crypto.randomBytes(64, (err, salt) => {
          crypto.pbkdf2(pwd, salt.toString('base64'), 100000, 64, 'sha512', (err, key) => {
            console.log(key.toString('base64'));
            console.log(salt)
          });
        });
        if (results.length === 0){
          // crypto.randomBytes(64, (err, salt) => {
          //   crypto.pbkdf2(pwd, salt.toString('base64'), 100000, 64, 'sha512', (err, key) => {
          //     console.log(key.toString('base64'));
          //   });
          // });
          
          console.log('create')
          let time = new Date()
          db.query('INSERT INTO ' +
          'User(user_id, nickname, password, is_deleted, created_at, updated_at) ' +
          'VALUES(?, ?, ?, false, ?, ?)',
          [id, nickname, pwd, time, time],
          function(err, results, fields){
            if (err){
              console.log(err);
            }else{
              res.status(status.OK).redirect('/auth/login')
            }
          })
        }else{
          console.log("dup")
          
        }
      }
    })
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