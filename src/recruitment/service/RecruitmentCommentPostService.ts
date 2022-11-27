import PostComment from "../model/PostComment"

export default async (recruitmentId: number, userId: number, content: string) => {
	PostComment(recruitmentId, userId, content)
	return 
}