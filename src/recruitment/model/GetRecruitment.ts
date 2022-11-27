import {AppDataSource} from '../../loaders/db'
import { Recruitment } from '../../entities/Recruitment';


export default async (community: number, pageNumber: number, filter?: string,  search?: string) => {
	let perPage = 10

	const result =  await AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruitment")
	.leftJoinAndSelect("recruitment.recruitmentToTagList", "recruitment_to_tag")
	.leftJoinAndSelect("recruitment_to_tag.tag", "tag")
	.leftJoinAndSelect("recruitment.community", "community")
	.leftJoinAndSelect("recruitment.recruitmentCommentList", "recruitment_comment")
	.leftJoinAndSelect("recruitment.author", "user")
	if (filter === "all"){
		console.log(search)
		return search === undefined ?
		result.where("recruitment.community_id = :community", {community: community})
		.take(perPage)
		.skip(perPage * (pageNumber - 1))
		.getMany()
		: result.where("recruitment.community_id = :community and recruitment.title like :search"
		, {community: community, search: "%" + search + "%"})
		.take(perPage)
		.skip(perPage * (pageNumber - 1))
		.getMany()
	}
	else {
		return search === undefined ?
		result.where("recruitment.community_id = :community and recruitment.status = :status",
		{community: community, status: filter})
		.take(perPage)
		.skip(perPage * (pageNumber - 1))
		.getMany()
		: result.where("recruitment.community_id = :community and recruitment.status = :status and recruitment.title like :search",
		{community: community, status: filter, search: ("%" + search + "%")})
		.take(perPage)
		.skip(perPage * (pageNumber - 1))
		.getMany()
	}	
}
