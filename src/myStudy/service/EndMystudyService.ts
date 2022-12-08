import { GetLeader } from "../model"
import { statusCode, util } from "../../modules"

export default async (userId : number, studyId: number) => {
	const leader = await GetLeader(studyId)
	console.log(leader)

}