import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {createHttpLink} from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    credentials: "include",
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const shopifyClient = new ApolloClient({
    link: httpLink,
    cache,
})


const appClient = new ApolloClient({
    cache: cache,
    link: new HttpLink({
        uri: `http://localhost:${import.meta.env.VITE_SHOPIFY_MONGODB_PORT}/graphql/`,
        credentials: "same-origin"
    }),
});

export {
    appClient,
    shopifyClient
}