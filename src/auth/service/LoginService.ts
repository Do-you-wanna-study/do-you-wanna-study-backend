import { getUser } from "../model";

export default async (email: string) => {
	return await getUser(email)
}