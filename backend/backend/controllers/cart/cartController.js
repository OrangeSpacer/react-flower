import  asyncHandler from "express-async-handler"
import Cart from "../../models/cartModel.js"

// @desc Add new Item in Cart
// @route POST /api/cart/add
export const addItemCart = asyncHandler(async(req,res) => {
    const {cost,quantity,imageId,title,_id} = req.body

    const items = await Cart.create({
        cost,quantity,imageId,title,_id
    })

    res.json(items)
})

// @desc Get items in Cart
// @route GET /api/cart
export const getItemCart = asyncHandler(async (req,res) => {
    const cartItems = await  Cart.find()

    const totalPrice = cartItems.reduce((acc,item) => {
        acc+=parseInt(item.cost)*parseInt(item.quantity)
        return acc
    },0)

    res.json({cartItems,totalPrice})
})


export const deleteItemCart = asyncHandler(async (req,res) => {
    const {itemId} = req.body

    await Cart.findByIdAndRemove(itemId)

    res.json({"message":`Данный товар удален`})
})


export const changeQuantity = asyncHandler(async (req,res) => {
    const {itemId,quantity} = req.body

    const item = await Cart.findById(itemId)

    item.quantity = quantity

    const updateItemQunatity = await item.save()

    res.json(updateItemQunatity)
})