import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default async (community?: number) => {
	const result =  await AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	.leftJoinAndSelect("recruitment.community", "community")
	.where("recruitment.community_id = :community", {community: community})
	.getMany()
	
	return result
	
	
}
