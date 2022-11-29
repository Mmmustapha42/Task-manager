import express, {Request, Response, Router} from 'express'
import mongoose from 'mongoose'
import UserInput from '../models/connection'
import bcrypt from 'bcrypt'

const router:Router = express.Router();


router.get('/', (req:Request, res:Response) => {
    res.render('register')
})

router.post('/', async (req:Request, res:Response) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const users = {
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        }
        const user = await UserInput.create(users);
        console.log(user)
        res.redirect('/login')
    } catch (err) {
        console.log(`you encounter this type of Error ${err}`)
    }
})

export default router