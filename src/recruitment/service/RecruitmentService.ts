import getRecruitment from "../model/GetRecruitment"

export default async (community?: number) => {
	const recruitmentList = await getRecruitment(community)
	return recruitmentList
}