import express, {Request, Response, Router} from 'express'
import mongoose from 'mongoose'
import UserInput from '../models/connection'
import bcrypt from 'bcrypt'

const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => {
    res.render('login')
})

router.post('/', async (req:Request, res:Response) => {
    try {
        const {username, password} = req.body
        const user = await UserInput.findOne({username})
        if (user){
           const auth = await bcrypt.compare(password, user.password)
           if (auth){
            return res.redirect('/home-page')
           } throw Error('where e dey')
        } throw Error('everywhere hard')

    } catch (err){
        console.log(`this ${err}`)
        res.redirect('/login')
    } 
})

/*router.post('/login', (req:Request, res:Response) => {
    res.render('login')
})*/


export default router