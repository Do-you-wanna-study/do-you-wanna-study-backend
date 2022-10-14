import passport from 'passport';
import passportLocal from 'passport-local'
import db from '../db/config'
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
		db.query('SELECT * FROM User WHERE user_id = ?',
		[username], (err, results, field) => {
			if (err){
				console.log(err)
				return done(null, false, {
					message: 'db error'
				})
			}
			else{
				if (results.length !== 0){
					if (results[0].password === password){
						return done(null, results[0].user_id)
					}
					else{
						return done(null, false, {
							message: 'pwd error'
						})
					}
				}
				return done(null, false, {
					message: 'id error'
				})
			}
		})
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