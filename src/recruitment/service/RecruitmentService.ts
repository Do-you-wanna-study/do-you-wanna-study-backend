import getRecruitment from "../model/GetRecruitment"

export default async (community?: number) => {
	const recruitmentList = await getRecruitment(community)
	console.log(recruitmentList)
	return recruitmentList
}