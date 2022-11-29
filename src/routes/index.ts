import express, {Request, Response, Router} from 'express'
import mongoose from 'mongoose'

const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => {
    res.render('index')
})

/*router.post('/', (req:Request, res:Response) => {

})*/



export default router