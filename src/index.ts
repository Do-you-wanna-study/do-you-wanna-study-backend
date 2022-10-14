import express, { Request, Response, NextFunction } from 'express'
import router from './router'
import session from 'express-session'
import db from './db/config'
import dotenv from 'dotenv';

const app = express();
// const bodyParser = require('body-parser');

db.connect()

app.use(express.json())
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
}));
import passport from 'passport'
app.use(passport.initialize())
app.use(passport.session())
app.use('/', router);
app.get('/', (req: Request, res : Response) => {
	console.log(req.user);
	res.send("redir")
})

app.listen(3000, () => {
	console.log('Connected port 3000');
})
