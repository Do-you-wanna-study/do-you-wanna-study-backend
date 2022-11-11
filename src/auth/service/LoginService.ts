import passport from 'passport'

export default passport.authenticate('local', { 
	successRedirect: '/',
	failureRedirect: '/auth/login',
 })