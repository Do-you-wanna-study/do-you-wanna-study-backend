import {addUser, getUser} from '../model'

export default async (new_email: string, new_password: string, new_nickname: string ) => {
	try{
		const userList = await getUser(new_email)
		// console.log("signupService: ", userList)
		if (userList){
			return 0
		}else{
			await addUser(new_email, new_password, new_nickname)
			return 1
		}
	}catch(err){
		console.log(err)
		return err
	}
}