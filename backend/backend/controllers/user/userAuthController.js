import { generateToken } from "../../helper/generateToken.js"
import User from "../../models/userModel.js"
import asyncHandler from "express-async-handler"

export const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        const token = generateToken(user._id)
        res.json({user,token})
    }
    else{
        res.status(401)
        throw new Error("Не правильный email или пароль")
    }
})