import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import {deleteCatalog, getCatalog, postCatalog, updateCatalog, updateitemCatalogInCart} from "../controllers/catalog/catalogController.js"

const router = express.Router()


router.route('/')
        .get(getCatalog)
        .delete(protect,deleteCatalog)


router.route('/add').post(postCatalog)


router.route('/change')
    .post(protect,updateCatalog)
    .put(updateitemCatalogInCart)


export default router