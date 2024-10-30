import gql from "graphql-tag";

const GET_MERCHANT_BY_SHOP_ENCODE = gql`
    query getMerchantByShopEncode($shopEncode: String){
        getMerchantByShopEncode(shopEncode: $shopEncode){
            id
            name
            shop
        }
    }
`

export {GET_MERCHANT_BY_SHOP_ENCODE}