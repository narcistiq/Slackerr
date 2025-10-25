// graphql/TypeDefs.js
// specifies the types, queries, and mutations

const { gql } = require('apollo-server-express');

/* 
MongoDB stores only references to the user, but graphql can retrieve the data 
and return the actual user object
*/
const typeDefs = gql`
    input UpdateApplicationInput {
        company: String
        position: String
        applyDate: String
        responseDate: String
        response: String
        url: String
    }
    
    type User {
        id: ID!
        email: String!
        password: String!
        name: String
    }
    type Application {
        id: ID!
        company: String
        position: String
        applyDate: String
        responseDate: String
        response: String
        url: String
        user: User!
    }
    type Query {
        getAllUsers: [User]
        getUser( id: ID! ): User
        getEmail( email: String! ): User
        getPassword( password: String! ): User
        me: User

        getUserApplications( user: String! ): [Application]
        getAllApplications: [Application]
        getApplication( id: ID! ): Application
    }
    type Mutation {
        createUser( email: String!, password: String!, name: String ): User
        updateEmail( email: String! ): User
        updatePassword( password: String! ): User
        updateName( name:String ):User
        deleteUser( id: ID! ): User
        deleteUserByEmail ( email: String! ): User

        createUserApplication( company:String, position:String, applyDate:String, responseDate: String, response: String, url: String, user: String! ): Application
        createApplication( company:String, position:String, applyDate:String, responseDate: String, response: String, url: String ): Application
        updateApplication( id: ID!, input: UpdateApplicationInput! ): Application
        deleteApplication( id: ID! ): Application
    }
`;

module.exports = typeDefs;