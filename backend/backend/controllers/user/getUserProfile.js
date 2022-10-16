import asynchandler from "express-async-handler"
import User from "../../models/userModel.js"

export const userprofile = asynchandler(async(req,res) => {
    const user = await User.findById(req.user._id).select('-password').lean()

    res.json({
        ...user
    })
})