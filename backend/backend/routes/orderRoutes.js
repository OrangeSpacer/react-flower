import express from "express"
import { createOrder,getOrders } from "../controllers/order/orderController.js"
import { protect } from "../middleware/authMiddleWare.js"

const router = express.Router()

router.route('/').post(protect,createOrder)
router.route('/all').get(protect,getOrders)

export default router