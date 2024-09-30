import MerchantModel from "../models/Merchant.js";

const merchantResolvers = {
    Query: {
        getMerchantByShopEncode: async function (parent, {shopEncode}) {
            return MerchantModel.findOne({shopEncode: shopEncode})
        }
    },
    Mutation: {
        createMerchant: async function (parent, {input}) {
            const objMerchant = new MerchantModel(input)
            return objMerchant.save()
        },
        updateMerchant: async function (parent, {shopEncode, input}) {
            return MerchantModel.findOneAndUpdate({shopEncode: shopEncode}, input, {new: true});
        }
    }
}

export default merchantResolvers