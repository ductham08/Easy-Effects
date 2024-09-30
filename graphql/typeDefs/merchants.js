const merchantTypeDefs = {
    type: `
        type Merchant {
            id: ID!
            name: String
            shop: String
            shopEncode: String
            email: String
            meta: JSON
            plan: JSON
            createdAt: Date
            updatedAt: Date
        }
        
        input merchantInput {
            name: String
            shop: String
            shopEncode: String
            email: String
            meta: JSON
            plan: JSON
        }
    `,
    query: `
        getMerchantByShopEncode(shopEncode: String): Merchant
    `,
    mutation: `
        createMerchant(input: merchantInput ): Merchant
        updateMerchant(shopEncode: String, input: merchantInput ): Merchant
    `
}

export default merchantTypeDefs