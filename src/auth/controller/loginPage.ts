import { NextFunction, Request, Response } from 'express';
import status from '../../modules/statusCode'
// import template from '../../lib/template'

export default async (req: Request, res: Response, next: NextFunction) => {
	// var title = 'WEB - login';
	// var list = "list";
	// var html = template.HTML(title, list, `
	//   <div style="color:red;"></div>
	//   <form action="/auth/login" method="post">
	//     <p><input type="text" name="email" placeholder="email"></p>
	//     <p><input type="password" name="password" placeholder="password"></p>
	//     <p>
	//       <input type="submit" value="login">
	//     </p>
	//   </form>
	// `, '');
	res.status(status.OK);
  }