import {Response, Request} from 'express'
import { LoginService } from '../service'
import status from '../../modules/statusCode'
import util from '../../modules/util'

export default async (req: Request, res: Response) =>{
	const email = req.body.email
	const password = req.body.password
	const data = await LoginService(email, password)
	res.status(status.OK).send(util.success(status.OK, "login success", data))
}