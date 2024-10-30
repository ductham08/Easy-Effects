import mongoose from "mongoose";

const effectSchema = mongoose.Schema({
    effectName: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    isFree: {
        type: Boolean,
        required: true,
    },
    effectContent: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const Effect = mongoose.model('effects', effectSchema)

export default Effect