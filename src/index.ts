import express from 'express'
import router from './router'

var app =express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/', router);


app.listen(3000, () => {
	console.log('Connected port 3000');
})
