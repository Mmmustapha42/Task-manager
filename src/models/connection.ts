import mongoose, {Schema} from 'mongoose'



const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
    },
    password:{
        type:String,
        required:true,
        minlength: 6,
    }
})

export default mongoose.model('UserInput', UserSchema)
