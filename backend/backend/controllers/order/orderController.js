import asyncHandler from "express-async-handler"
import Orders from "../../models/orderModel.js"
import User from "../../models/userModel.js"

// @desc Create new order
// @route POST /api/order
// @access Private

export const createOrder = asyncHandler(async(req,res) => {
    let userId = await User.findOne(req.user._id)
    const {items,orderId} = req.body

    userId = userId._id
    
    const endCost = items.reduce((acc,item) => {
        acc+=Number(item.quantity)*Number(item.cost)
        return acc
    },0)

    const order = await Orders.create({
        items,endCost,orderId,userId
    })
    
    res.json(order)
})


// @desc Get orders
// @route POST /api/order/all
// @access Private

export const getOrders = asyncHandler(async(req,res) => {
    let userId = await User.findOne(req.user._id)

    userId = userId._id

    let ordersLog = await Orders.find({})

    ordersLog = ordersLog.filter(item => item.userId == userId)

    const costAll = ordersLog.reduce((acc,item) => {
            acc += Number(item.endCost)
            return acc
    },0)

    res.json({ordersLog,costAll})
})