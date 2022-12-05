import {AppDataSource} from '../../loaders/db'
import {User} from '../../entities/User'

export default function getUser(user_email: string) {
	const userRepository = AppDataSource.getRepository(User)
	return userRepository.findOne({
		where:{ email: user_email }
	})
}