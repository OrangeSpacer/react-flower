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
        items.forEach(item => {
            itemsCurrent[0].items.push(item)
        })


        const updateCatalog = await itemsCurrent[0].save()

        res.json(updateCatalog)
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
    const catalogItems = await Catalog.find({})
    const cartItems = await Cart.find({})

    catalogItems[0].items.forEach((item,index) => {
        let newId = cartItems.findIndex(i => i._id.toString() == item._id.toString())
        if(newId > -1){
            catalogItems[0].items[index].inCart = true
        }else{
            catalogItems[0].items[index].inCart = false
        }
    })
    await catalogItems[0].save()
    res.json(catalogItems)
})


// @desc Delete Catalog
// @route POST /api/catalog/change
// @access Private

export const deleteCatalog = asyncHandler(async(req,res) => {
    await Catalog.findOneAndDelete()

    res.json({message:"Каталог был удален"})
})