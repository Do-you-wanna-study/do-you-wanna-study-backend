import { CreateStudy, GetRecruitmentDetail } from "../model"
import { util, statusCode } from "../../modules"

export default async (userId : number, recruitmentId : number, groupName: string, period : number, startDate : Date) => {
	const recruitment = await GetRecruitmentDetail(recruitmentId)
	if (recruitment === undefined){
		return util.fail(statusCode.BAD_REQUEST, "no match post")
	}
	const author = await recruitment?.author
	if (author === undefined || recruitment?.community === undefined){
		return util.fail(statusCode.DB_ERROR, "DB error")
	}
	if (author.id !== userId){
		console.log(author)
		return util.fail(statusCode.BAD_REQUEST, "Unauthorized User")
	}
	CreateStudy(recruitmentId, groupName, recruitment?.community, period, startDate)
	return util.success(statusCode.OK, "OK")
}