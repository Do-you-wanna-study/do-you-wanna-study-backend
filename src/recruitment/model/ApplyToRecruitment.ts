import {AppDataSource} from '../../loaders/db'
import { RecruitmentApply } from '../../entities/RecruitmentApply';
import { User } from '../../entities/User';
import { Recruitment } from '../../entities/Recruitment';

export default async (userId: number, recruitmentId: number, description : string) => {
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
	const apply = new RecruitmentApply()
	apply.content = description
	apply.recruitment = recruitment[0]
	apply.user = user[0]

	AppDataSource.manager.save(apply)
	return
}