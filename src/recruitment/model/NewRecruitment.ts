import {AppDataSource} from '../../loaders/db'
import {Recruitment} from '../../entities/Recruitment'
import { Community } from '../../entities/Community'

export default async (data: any, user: any) => {
	const recruitmentRepo = AppDataSource.getRepository(Recruitment)
	const communityRepo = AppDataSource.getRepository(Community)
	const [communityID] = await communityRepo.find({
							where: { id : data.community_id,}
						})
	console.log(data)
	console.log(typeof(data.deadline))
	const newPost = recruitmentRepo.create({
		title: data.title,
		description: data.description,
		recruitmentNumber: data.recruit_number,
		author: user.id,
		community: communityID,
 		status: 'recruiting',
		region: data.region,
		deadline: data.deadline,
		// recruitmentToTagList: 
	})
	// return await recruitmentRepo.save(newPost)
}