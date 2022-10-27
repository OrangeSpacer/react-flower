import asyncHandler from "express-async-handler"
import Catalog from "../../models/catalogModel.js"


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