import {AppDataSource} from '../../loaders/db'
import {Recruitment} from '../../entities/Recruitment'

export default () => {
	const recruitmentRepo = AppDataSource.getRepository(Recruitment);
	return recruitmentRepo.find()
}
