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
    const items = await  Cart.find()

    const totalPrice = items.reduce((acc,item) => {
        acc+=parseInt(item.cost)
        return acc
    },0)

    res.json({items,totalPrice})
})


export const deleteItemCart = asyncHandler(async (req,res) => {
    const {itemId} = req.body

    const item = await CartItem.findById(itemId)

    await item.remove()

    res.json({"message":`Данный товар удален ${itemId}`})

})