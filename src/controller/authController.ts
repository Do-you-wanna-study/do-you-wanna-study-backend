import expresss from 'express';
import { NextFunction, Request, Response } from 'express';
// import passport from 'passport';
import template from '../lib/template'

const loginPage = async (req: Request, res: Response, next: NextFunction) => {
	var feedback = '';
    var title = 'WEB - login';
    var list = "list";
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/login" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="password" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
    `, '');
    res.send(html);
}

const tryLogin = (req: Request, res: Response, next: NextFunction) => {
	console.log('try login');
	res.send("try login");
};

const logout = (req: Request, res: Response, next: NextFunction) => {
	req.logout(function(err){
		if (err) { return next(err); }
		res.redirect('/');
	});
}

const loginController ={
	loginPage,
	tryLogin,
	logout
}


export default loginController