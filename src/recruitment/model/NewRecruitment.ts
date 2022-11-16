import {AppDataSource} from '../../loaders/db'
import {Recruitment} from '../../entities/Recruitment'
import { Community } from '../../entities/Community'
import { RecruitmentToTag } from '../../entities/RecruitmentToTag'
import { Tag } from '../../entities/Tag'

export default async (data: any, user: any) => {
	const recruitmentRepo = AppDataSource.getRepository(Recruitment)
	const communityRepo = AppDataSource.getRepository(Community)
	const [communityID] = await communityRepo
	.find({
		where: { id : data.community_id,}
	})
	console.log(data)
	const newPost = recruitmentRepo.create({
		title: data.title,
		description: data.description,
		recruitmentNumber: data.recruitment_number,
		author: user.id,
		community: communityID,
		status: 'recruiting',
		region: data.region,
		deadline: data.deadline,
		// recruitmentToTagList: 
	})
	const result = await
	AppDataSource.manager.save(newPost)
	let tag = AppDataSource.getRepository(Tag)
	let newTagList = []
	for (let val of data.hashtag){
		let newTag
		let list = await tag.find({ where:{ name: val } })
		if (list.length === 0 ){
			newTag = tag.create({
				name : val
			})
			AppDataSource.manager.save(newTag)
		}else{
			newTag = list[0]
		}
		newTagList.push(newTag)
	}
	for (var t of newTagList){
		let rToTag = new RecruitmentToTag()
		rToTag.recruitment = result
		rToTag.tag = t
		AppDataSource.manager.save(rToTag)
	}
	//놀시간이 잇니>?
	return 1
}