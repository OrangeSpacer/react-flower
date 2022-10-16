import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const Schema = mongoose.Schema

const userModelSchema = new Schema({
    email: {
        required: true, 
        type: String
    },
    password: {
        required: true, 
        type: String
    }
},{
    minimize: false,
    timestamps: true
})

userModelSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

userModelSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userModelSchema)

export default User