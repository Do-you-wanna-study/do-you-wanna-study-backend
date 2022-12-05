import getToken from "../../modules/jwtHandler";
import { getUser } from "../model";
import {statusCode, util} from "../../modules"

export default async (email: string, password: string) => {
	const user = await getUser(email)
	if (user === null) {
		return 1;
	}if (user.password === password){
		const accessToken = getToken(user.id);
		const data = {
			accessToken: accessToken,
			nickname: user.nickname,
			email: user.email
		}
		return data;
	} 
	else {
		return 0;
	}
}
