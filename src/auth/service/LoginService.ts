import { getUser } from "../model";
import {statusCode, util} from "../../modules"

export default async (email: string, password: string) => {
	const user = await getUser(email)
	console.log(password)
	if (user){
		if (user[0].password === password){
			
			return util.success(statusCode.OK, "Login success", user[0]);
		}else{
			return util.fail(statusCode.FORBIDDEN, "wrong password");
		}
	}
	else{
		return util.fail(statusCode.FORBIDDEN, "no matched users");
	}
}
