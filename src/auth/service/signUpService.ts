import {addUser, getUser} from '../model'

export default async (new_email: string, new_password: string, new_nickname: string ) => {
	try{
		const [userList] = await getUser(new_email)
		// console.log("signupService: ", userList)
		if (userList){
			//중복 이메일 응답 메시지 생각좀
			return -1;
		}else{
			await addUser(new_email, new_password, new_nickname)
		}
	}catch(err){
		console.log(err)
		return err
	}
}