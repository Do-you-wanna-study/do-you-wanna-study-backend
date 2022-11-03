import passport from 'passport'

export default passport.authenticate('local', {
	failureRedirect: '/auth/login',
 })