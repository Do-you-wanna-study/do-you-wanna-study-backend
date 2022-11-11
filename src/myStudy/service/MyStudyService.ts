import { getMyStudy } from "../model"

export default (userId : number) => {
	return getMyStudy(userId)
}