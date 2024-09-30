import gql from "graphql-tag";

const merchantFragment = gql`
    fragment merchantFragment on Merchant{
        id
        name
        shop
        shopEncode
        email
        meta
        plan
        createdAt
        updatedAt
    }
`
export {merchantFragment}