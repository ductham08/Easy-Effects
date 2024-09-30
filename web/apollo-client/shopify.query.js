import gql from "graphql-tag";

const GET_APP_ID = gql`
    #graphql
    query {
        currentAppInstallation {
            id
        }
    }
`

export {GET_APP_ID}