import { RecruitmentApply } from '../../entities/RecruitmentApply'
import {AppDataSource} from '../../loaders/db'

export default async (applyId : number) => {
	return (await AppDataSource.getRepository(RecruitmentApply)
	.findOne({
		relations:{
			user: true
		},
		select:{
			id: false,
			content: false,
			createdAt: false,
			updatedAt: false,
			user:{
				id: true
			}
		},
		where:{
			id: applyId
		}
	}))?.user
}