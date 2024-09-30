import merchantTypeDefs from "./merchants.js";

const typeDefs = `
    scalar Cursor
	scalar JSON
    scalar Date
    scalar Any
    
    ${merchantTypeDefs.type}
    
    type Query {
        ${merchantTypeDefs.query}
    }
    
    type Mutation {
        ${merchantTypeDefs.mutation}
    }
`

export default typeDefs