import express from "express";
import { userprofile } from "../controllers/user/getUserProfile.js";
import { authUser } from "../controllers/user/userAuthController.js";
import { userReg } from "../controllers/user/userRegController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router()

router.route('/profile').get(protect,userprofile)
router.route('/login').post(authUser)
router.route('/').post(userReg)

export default router