import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default async (recruitmentId: number) => {
	return AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	.leftJoinAndSelect("recruitment.community", "community")
	.leftJoinAndSelect("recruitment.recruitmentCommentList", "recruitment_comment")
	.leftJoinAndSelect("recruitment.author", "user")
	.where("recruitment.id = :id", {id: recruitmentId})
	.getOne()
}
