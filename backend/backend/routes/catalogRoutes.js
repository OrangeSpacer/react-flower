import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import {deleteCatalog, getCatalog, postCatalog, updateitemCatalogInCart} from "../controllers/catalog/catalogController.js"

const router = express.Router()


router.route('/')
        .get(getCatalog)
        .delete(protect,deleteCatalog)


router.route('/add').post(postCatalog)


router.route('/change')
    .put(updateitemCatalogInCart)


export default router