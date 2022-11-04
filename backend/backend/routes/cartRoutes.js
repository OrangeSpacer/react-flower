import express from "express";
import { addItemCart, deleteItemCart, getItemCart } from "../controllers/cart/cartController.js";

const router = express.Router()

router.route('/').get(getItemCart)
router.route('/add').post(addItemCart)
router.route('/delete').delete(deleteItemCart)

export default router