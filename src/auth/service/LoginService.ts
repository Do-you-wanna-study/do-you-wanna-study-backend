import getToken from "../../modules/jwtHandler";
import { getUser } from "../model";
import {statusCode, util} from "../../modules"

export default async (email: string, password: string) => {
	const user = await getUser(email)
	if (user[0].password === password){
		const accessToken = getToken(user[0].id);
		
		return accessToken;
	} else if (user.length !== 1) {
		return 1;
	} else {
		return 0;
	}
}
