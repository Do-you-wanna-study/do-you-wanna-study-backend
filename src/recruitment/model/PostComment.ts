import {AppDataSource} from '../../loaders/db'
import { RecruitmentComment } from '../../entities/RecruitmentComment'
import { User } from '../../entities/User'
import { Recruitment } from '../../entities/Recruitment'

export default async (recruitmentId : number, userId: number, content: string) => {
	const newComment = new RecruitmentComment()
	newComment.content = content

	const user = await AppDataSource.getRepository(User).find({
		where :{
			id : userId
		}
	})

	const recruitment = await AppDataSource.getRepository(Recruitment).find({
		where :{
			id : recruitmentId
		}
	})
	
	newComment.user = user[0]
	newComment.recruitment = recruitment[0]
	
	AppDataSource.manager.save(newComment)
	return
}
