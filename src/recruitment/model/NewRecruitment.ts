import {AppDataSource} from '../../loaders/db'
import {Recruitment} from '../../entities/Recruitment'
import { Community } from '../../entities/Community'

export default async (data: any, user: any) => {
	const recruitmentRepo = AppDataSource.getRepository(Recruitment)
	const communityRepo = AppDataSource.getRepository(Community)
	const [communityID] = await communityRepo.find({
							where: { id : 1,}
						})
	console.log("data: ", data, parseInt(data.recruit_number))
	const newPost = recruitmentRepo.create({
		title: data.title,
		description: data.description,
		recruitmentNumber: data.recruit_number,
		author: user.id,
		community: communityID,
 		status: 'recruiting',
		// region: ,
	})
	// return await recruitmentRepo.save(newPost)
}