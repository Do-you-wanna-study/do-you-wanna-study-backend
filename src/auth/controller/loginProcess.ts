import {Response, Request} from 'express'
import { LoginService } from '../service'
import {statusCode, util } from '../../modules'


export default async (req: Request, res: Response) =>{
	const email = req.body.email
	const password = req.body.password
	const data = await LoginService(email, password)
	if (data === 0){
		res.status(statusCode.FORBIDDEN).send(util.fail(statusCode.FORBIDDEN, "wrong password"));
	} else if (data === 1) {
		res.status(statusCode.OK).send(util.fail(statusCode.BAD_REQUEST, "no matched users")) ;
	}
	res.status(statusCode.OK).send(util.success(statusCode.OK,"Success" ,data));
}