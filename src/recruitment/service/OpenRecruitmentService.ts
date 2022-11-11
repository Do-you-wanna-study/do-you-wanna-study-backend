import getRecruitment from "../model/GetRecruitment"

export default async () => {
	const recruitmentList = await getRecruitment()
	return recruitmentList
}