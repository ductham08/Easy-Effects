import express from "express";
import { getMerchant } from "../controllers/merchantController";

const merchantRouter = express.Router();
merchantRouter.put('/get-merchant', getMerchant)

export default merchantRouter;