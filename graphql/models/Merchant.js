import mongoose from "mongoose";

const {Schema} = mongoose

const merchantSchema = new Schema({
    name: String,
    shop: String,
    shopEncode: String,
    email: String,
    meta: Object,
    plan: Object
}, {
    timestamps: true
})

const MerchantModel = mongoose.model('merchants', merchantSchema)

export default MerchantModel