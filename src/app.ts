import dotenv from 'dotenv'

dotenv.config()
import express, {Application, Request, Response} from 'express'
import mongoose from 'mongoose'
import layouts from 'express-ejs-layouts'
import expressLayouts from 'express-ejs-layouts';
import ejs from 'ejs'
import indexRouter from './routes/index'
import loginRouter from './routes/login'
import registerRouter from './routes/register'
import homepageRouter from './routes/home-page'

mongoose.connect('mongodb+srv://lordlonso:ozavizezlatan@nodeexpressproject.purussx.mongodb.net/Task-manager?retryWrites=true&w=majority')
.then(data => app.listen(3000, () => console.log('now listening on port 3000...')) )
.catch(err => console.log(err))

const app:Application = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/home-page', homepageRouter)