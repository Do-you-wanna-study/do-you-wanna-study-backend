import express from 'express'
import router from './router'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/', router);


app.listen(3000, () => {
	console.log('Connected port 3000');
})

export default app;