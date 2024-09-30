import fetch from "cross-fetch"
import {print} from "graphql";

const shopifyApiClient = function (session, shopify) {
    return new shopify.api.clients.Graphql({
        session,
    })
}
const useQuery = async (operationName = '', query, variables = {}) => {
    try {
        const result = await fetch(`http://localhost:${process.env.SHOPIFY_MONGODB_PORT}/graphql/`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            },
            body: JSON.stringify({
                operationName: operationName,
                query: printGraphql(query),
                variables: variables,
            })
        });
        const rsJson = await result.json()

        return rsJson?.data ? rsJson.data.hasOwnProperty(operationName) ? rsJson.data[operationName] : null : null
    } catch (error) {
        return error.message
    }
}

const useShopifyQuery = async function (client, query) {
    const {data} = await client.request(printGraphql(query))

    return data
}

const printGraphql = function (query) {
    return print(query)
}

export {shopifyApiClient, useQuery, useShopifyQuery, printGraphql}