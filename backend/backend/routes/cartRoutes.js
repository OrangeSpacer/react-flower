import express from "express";
import { addItemCart, changeQuantity, deleteItemCart, getItemCart } from "../controllers/cart/cartController.js";

const router = express.Router()

router.route('/').get(getItemCart)
router.route('/add').post(addItemCart)
router.route('/update').put(changeQuantity)
router.route('/delete').post(deleteItemCart)

export default router