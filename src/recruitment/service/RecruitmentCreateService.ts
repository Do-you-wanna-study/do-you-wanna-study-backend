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
		return util.fail(statusCode.BAD_REQUEST, "Unauthorized User")
	}
	const result = await CreateStudy(recruitmentId, groupName, recruitment?.community, period, startDate)
	if (result === -1){
		return util.fail(statusCode.DB_ERROR, "can't find author")
	}
	return util.success(statusCode.OK, "OK", result)
}