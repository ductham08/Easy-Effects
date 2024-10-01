import gql from "graphql-tag";
import {merchantFragment} from "./fragments.js";

const CREATE_MERCHANT = gql`
    ${merchantFragment}
    mutation createMerchant($input: merchantInput){
        createMerchant(input: $input){
            ...merchantFragment 
        }
    }
`
const UPDATE_MERCHANT = gql`
    ${merchantFragment}
    mutation updateMerchant($shopEncode: String, $input: merchantInput){
        updateMerchant(shopEncode: $shopEncode, input: $input){
            ...merchantFragment
        }
    }
`

export {CREATE_MERCHANT, UPDATE_MERCHANT}