import express from "express";
import { createMerchant, getMerchant, getMerchantByShopUrl } from "../controllers/merchantController.js";

const merchantRouter = express.Router();
merchantRouter.get('/get-merchant', getMerchant)
merchantRouter.get('/get-merchant/:shopUrl', getMerchantByShopUrl)
merchantRouter.post('/create-merchant', createMerchant)

export default merchantRouter;