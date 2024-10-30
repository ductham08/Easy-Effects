import express from "express";
import { getEffects } from "../controllers/effectController.js";

const effectRouter = express.Router();
effectRouter.get('/get-effects', getEffects)

export default effectRouter;