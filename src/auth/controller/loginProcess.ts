import {Response, Request} from 'express'
import { LoginService } from '../service'
import status from '../../modules/statusCode'

export default async (req: Request, res: Response) =>{
	const email : string = req.body.email
	const password : string = req.body.password
	console.log(password)
	const data = await LoginService(email, password)
	res.status(status.OK).send(data)
}