import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default async (community?: number) => {
	const repo =  await AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	if(community === undefined){
		return repo.getMany()
	}else{
		return repo
		.where("recruitment.community_id = :community", {community: community})
	}
}
