import getToken from "../../modules/jwtHandler";
import { getUser } from "../model";

export default async (email: string, password: string) => {
	const user = await getUser(email);
	if (user[0].password != password) {
		return 0;
	}
	const accessToken = getToken(user[0].id);

	return await getUser(accessToken);
}
