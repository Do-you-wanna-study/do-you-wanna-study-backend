import {AppDataSource} from '../../loaders/db'
import {Recruitment} from '../../entities/Recruitment'
import { RecruitmentToTag } from '../../entities/RecruitmentToTag';
import { Tag } from '../../entities/Tag';

export default () => {

	AppDataSource
	.createQueryBuilder()
	.select("*")
	.from(Recruitment, "R")
	.where("R.")

	const recruitmentRepo = AppDataSource.getRepository(Recruitment);
	return recruitmentRepo.find({
		relations: {
			author: true,
			recruitmentToTagList: true
		}
	})
}
