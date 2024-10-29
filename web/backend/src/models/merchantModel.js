import mongoose from "mongoose";

const merchantSchema = mongoose.Schema({
    shopID: {
        type: String,
        required: true,
        unique: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopURL: {
        type: String,
        required: true
    },
    currencyCode: {
        type: String
    },
    ianaTimezone: {
        type: String
    },
    timezoneOffset: {
        type: String,
    },
    timezoneOffsetMinutes: {
        type: Number,
    },
    merchantProperty: {
        type: {}
    },
    merchantId: {
        type: String
    },
    plan: {
        type: {}
    },
    metaData: {
        type: {}
    },
    isJobRunning: {
        type: String
    },
}, {
    timestamps: true
})

const Merchant = mongoose.model('merchants', merchantSchema)

export default Merchant