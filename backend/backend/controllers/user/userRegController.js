import { generateToken } from "../../helper/generateToken.js"
import User from "../../models/userModel.js"
import asyncHadler from "express-async-handler"

export const userReg = asyncHadler(async(req,res) => {
    const {email,password} = req.body
    const isHaveUser = await User.findOne({email})
    if(isHaveUser){
        res.status(400)
        throw new Error('данный пользователь уже зарегестрирован')
    }

    const user = await User.create({
        email,
        password,
    })

    const token = generateToken(user._id)

    res.json({user,token})
})