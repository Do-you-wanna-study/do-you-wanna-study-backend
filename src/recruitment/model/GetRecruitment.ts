import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default () => {
	return AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	.getMany()
}
