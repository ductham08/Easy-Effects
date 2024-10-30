import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import http from "http";
import { Server } from "socket.io";
import merchantRouter from "./routes/merchantRouter.js";
import effectRouter from "./routes/effectRouter.js";

dotenv.config({
    path: '../../.env',
    override: true
})

const app = express();

const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET"],
    },
});

mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());

app.use("/api", merchantRouter);
app.use("/api", effectRouter);

mongoose.connect(process.env.SHOPIFY_MONGODB_URL)
    .then(() => {
        console.log("Connect to database success!")
    })
    .catch((erorr) => {
        console.log(err)
    });

app.listen(process.env.SHOPIFY_MONGODB_PORT, () => {
    console.log("Server listening port " + process.env.SHOPIFY_MONGODB_PORT);
});