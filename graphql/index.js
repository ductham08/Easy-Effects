import dotenv from "dotenv"
import mongoose from 'mongoose'
import {ApolloServer} from '@apollo/server';
import {ApolloServerPluginLandingPageDisabled} from '@apollo/server/plugin/disabled';
import {startStandaloneServer} from '@apollo/server/standalone';
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

dotenv.config({
    path: '../.env',
    override: true
})

try {
    mongoose.set('strictQuery', false)

    await mongoose.connect(process.env.SHOPIFY_MONGODB_URL);

    mongoose.set('strictQuery', true)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: process.env.SHOPIFY_MONGODB_SANDBOX === "0" ? [ApolloServerPluginLandingPageDisabled()] : [],
    });

    const {url} = await startStandaloneServer(server, {
        listen: {port: process.env.SHOPIFY_MONGODB_PORT},
    });

    console.log(`🚀 Server ready at: ${url}`);

} catch (error) {
    console.log('[ERROR] Connect database error', error.message);
}
