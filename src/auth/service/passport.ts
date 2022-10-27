import passport from 'passport';
import passportLocal from 'passport-local'
import getUser from '../model/getUser'
import crypto from 'crypto'

const LocalStrategy = passportLocal.Strategy

passport.serializeUser((user: any, done: Function) => {
	// console.log("serialize!! : ", user)
	done(null, user);
})

passport.deserializeUser((user: any, done: Function) => {
	// console.log("deserialize called", user)
	done(null, user);
})

passport.use(new LocalStrategy(
	{
		usernameField: 'id',
		passwordField: 'pwd',
		session: true,
		passReqToCallback: false
	},
	function verify(username : any, password : any, done : Function) {
		// console.log('LocalStragegy', username, password)
		const user = getUser(username)
		console.log("user")
		done(null, false)
		// if (username == authData.email){
		// 	if (password == authData.password){
		// 		console.log('success');
		// 		return done(null, authData)
		// 	}
		// 	else{
		// 		return done(null, false, {
		// 			message: 'Incorrect password'
		// 		})
		// 	}
		// }else{
		// 	return done(null, false, {
		// 		message: 'Incorrect username'
		// 	})
		}
  ));

  export default passport