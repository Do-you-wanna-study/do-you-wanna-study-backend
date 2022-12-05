import { RecruitmentApply } from '../../entities/RecruitmentApply'
import {AppDataSource} from '../../loaders/db'

export default async (applyId : number) => {
	return AppDataSource
	.createQueryBuilder()
	.update(RecruitmentApply)
	.set({status: true})
	.where("id = :id", {id : applyId})
	.execute()
}