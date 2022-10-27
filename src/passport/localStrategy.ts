import passport from 'passport';
import passportLocal from 'passport-local'
import { Repository } from 'typeorm';
import getUser from '../model/getUser'
import code from '../modules/statusCode'

const LocalStrategy = passportLocal.Strategy

const authData = {
	email : "mihnhyuk@naver.com",
	password: "1234"
}

export default () => {
	passport.use(new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			session: true,
			passReqToCallback: false
		},
		function verify(email : string, password : string, done : Function) {
			// console.log("local strategy")
			// 이거 타입 뭐로해야됨?
			const user : number | any = getUser(email)
			console.log('user: ', user)

			// if (user === code.DB_ERROR){
			// 	return done(null, false, {
			// 		message: 'No such ID'
			// 	})
			// }
			// else{
			// 	if (password !== user.password){
			// 		return done(null, false, {
			// 			message: 'Incorrect password'
			// 		})
			// 	}else{
			// 		return done(null, user.id)
			// 	}
			// }
	}));
}
