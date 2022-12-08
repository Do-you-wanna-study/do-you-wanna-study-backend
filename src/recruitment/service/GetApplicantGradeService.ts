
import { util, statusCode } from "../../modules"
import { GetUserId, GetApplicantGrade } from "../model"

export default async (applicantNickname : string) => {
	const applicantId = parseInt((await GetUserId(applicantNickname)).id)
	const grade = await GetApplicantGrade(applicantId)
	const avgGrade = {
		skill: Number((parseFloat(grade.skill_sum) / parseFloat(grade.skill_count)).toFixed(1)),
		kindness: Number((parseFloat(grade.kindness_sum) / parseFloat(grade.kindness_count)).toFixed(1)),
		sincerity: Number((parseFloat(grade.sincerity_sum) / parseFloat(grade.sincerity_count)).toFixed(1)),
		helpful: Number((parseFloat(grade.helpful_sum) / parseFloat(grade.helpful_count)).toFixed(1)),
	}
	let sum = avgGrade.skill + avgGrade.kindness + avgGrade.sincerity + avgGrade.helpful
	sum /= 4
	sum = Number(sum.toFixed(1))
	Object.assign(avgGrade, {total: sum})
	return util.success(statusCode.OK, "applicant data", {grade: avgGrade})
}