import { AcceptApply, GetRecruitementAuthor } from "../model"
import { util, statusCode } from "../../modules"

export default async (userId : number, applyId : number) => {
	const author = await GetRecruitementAuthor(userId)
	if (author === undefined){
		return util.fail(statusCode.BAD_REQUEST, "Bad Request, no such apply")
	}
	if (author.id !== userId){
		console.log(author.id, userId)
		return util.fail(statusCode.UNAUTHORIZED, "not authorized user")
	}
	else{
		console.log(await AcceptApply(applyId))
		return util.success(statusCode.OK, "Success")
	}
	
	
}