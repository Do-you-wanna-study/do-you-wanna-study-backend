import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default async (community?: number, filter?: string) => {
	const result =  await AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	.leftJoinAndSelect("recruitment.community", "community")
	.leftJoinAndSelect("recruitment.author", "user")
	if (filter === "all"){
		return result
		.where("recruitment.community_id = :community", {community: community})
		.getMany()
	}
	else{
		return result
		.where("recruitment.community_id = :community and recruitment.status = :status", {community: community, status: filter})
		.getMany()
	}	
}
