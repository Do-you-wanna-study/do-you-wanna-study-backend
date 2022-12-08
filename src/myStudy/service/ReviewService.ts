import { findSourceMap } from "module"
import { statusCode, util } from "../../modules"
import { GetMembers } from "../model"
import Review from "../model/Review"

export default async (inputData: { userId: number, studyId: number, content: string, evaluates: any }) => {
	const members = await GetMembers(inputData.studyId)
	const userIds = []
	for (const member in members){
		userIds.push((await members[member].user).id)
	}
	//@ts-ignore
	const isIn = userIds.find(element => parseInt(element) === inputData.userId)
	if (isIn === undefined){
		return util.fail(statusCode.BAD_REQUEST, "Unauthorized User")
	}
	const result = await Review(inputData)
	if (result === -1){
		return util.fail(statusCode.DB_ERROR, "DB error")
	}
	return util.success(statusCode.OK, "success")
}