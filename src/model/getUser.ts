import {AppDataSource} from '../loaders/db'
import {User} from '../entities/User'
import code from '../modules/statusCode'

export default async (user_email: string) => {
	const userRepository = AppDataSource.getRepository(User)
	userRepository.find({
		where:{ email: user_email }
	}).then((data : any) => {
		console.log('data : ', data)
		return data
	}).catch((err : any)=>{
		console.log(err)
		return code.DB_ERROR
	})
}