import { GetRecruitmentDetail } from "../model"

export default async (recruitmentId: number) => {
	return GetRecruitmentDetail(recruitmentId)
}