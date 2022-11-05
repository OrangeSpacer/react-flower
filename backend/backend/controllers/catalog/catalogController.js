import asyncHandler from "express-async-handler"
import Catalog from "../../models/catalogModel.js"
import Cart from "../../models/cartModel.js"

// @desc Create new catalog
// @route POST /api/catalog/add
// @access Private

export const postCatalog = asyncHandler(async(req,res) => {
    let itemsCurrent = await Catalog.find({})

    const {items} = req.body
    

    if(itemsCurrent.length == 0 ){
        const catalog = await Catalog.create({
            items
        })
        res.json(catalog)
    }
    else{
        res.status(404)
        throw new Error('Каталог уже существует')
    }
})

// @desc Get catalog
// @route GET /api/catalog
// @access All

export const getCatalog = asyncHandler(async(req,res) => {
    const catalogItems = await Catalog.find({})

    
    res.json({catalogItems})
})

export const updateitemCatalogInCart = asyncHandler(async(req,res) => {
    const {inCart,id} = req.body
    
    const catalogItems = await Catalog.find({})
    const cartItems = await Cart.find({})

    if(cartItems.findIndex(item => item._id == id)>-1){
        const changeItemId = catalogItems[0].items.findIndex(item => item._id.toString() == id)
        
        catalogItems[0].items[changeItemId].inCart = true
    
        const updateItem = await catalogItems[0].save()
    
        res.json(updateItem)
    }else{
        catalogItems[0].items.forEach(item => item.inCart = false)
    
        const updateItem = await catalogItems[0].save()
    
        res.json(updateItem)
    }

})

// @desc Update Catalog
// @route POST /api/catalog/change
// @access Private


export const updateCatalog = asyncHandler(async(req,res) => {
    const currentCatalog = await Catalog.find({})

    if(!currentCatalog){
        res.status(404)
        throw new Error('Каталог не найден')
    }

    const {newItems} = req.body

    newItems.forEach(item => {
        currentCatalog[0].items.push(item)
    })


    const updateCatalog = await currentCatalog[0].save()

    res.json(updateCatalog)

})