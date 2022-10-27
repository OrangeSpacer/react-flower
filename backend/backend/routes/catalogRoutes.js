import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import {getCatalog, postCatalog, updateCatalog} from "../controllers/catalog/catalogController.js"

const router = express.Router()


router.route('/').get(getCatalog)
router.route('/add').post(postCatalog)
router.route('/change').post(protect,updateCatalog)


export default router