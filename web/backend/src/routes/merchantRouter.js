import express from "express";
import { getMerchant } from "../controllers/merchantController.js";

const merchantRouter = express.Router();
merchantRouter.get('/get-merchant', getMerchant)

export default merchantRouter;