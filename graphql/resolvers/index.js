import merchantResolvers from "./merchants.js";

const resolvers = {
    Query: {
        ...merchantResolvers.Query
    },
    Mutation: {
        ...merchantResolvers.Mutation
    }
}

export default resolvers