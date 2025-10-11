// graphql/TypeDefs.js
// specifies the types, queries, and mutations

const { gql } = require('apollo-server-express');

// The `gql` tag is used to parse the schema string.
// This is where you define the structure of your data.

//REMEMBER:

// An object type represents a kind of object you can fetch from your project.
//  which defines the fields and their data types.
// type Artist {
    //     id: ID!
    //     name: String!
    //     genre: String
 // }

 //The Query type defines all the available queries / data grabbing operations
    //  query GetHeroName {
    //   hero {
    //     name
    //   }
    // }

 // The Mutation type defines all the available mutations aka the changes the users can make to the data

//  type Mutation {
//   updateHumanName(id: ID!, name: String!): Human
// }

const typeDefs = gql`
    # You can add more types, queries, and mutations here.
    # For example, if you have a 'Post' and 'User' type:
    # type Post { ... }
    # type User { ... }
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
    }
    type Query {
        getAllUsers: [User]
        getUser( id: ID! ): User
        getEmail( email: String! ): User
        getPassword( password: String! ): User

        getAllApplications: [Application]
        getApplication( id: ID! ): Application
    }
    type Mutation {
        createUser( email: String!, password: String!, name: String ): User
        updateEmail( email: String! ): User
        updatePassword( password: String! ): User
        updateName( name:String ):User
        deleteUser( id: ID! ): User

        createApplication( company:String, position:String, applyDate:Date, responseDate: Date, response: String, url: String )
        updateCompany( company:String ): Application
        updatePosition( position: String ): Application
        updateApplyDate( applyDate: String ): Application
        updateResponseDate( responseDate: String ): Application
        updateReponse( reponse: String ): Application
        updateUrl( url: String ): Application
        deleteApplication( id: ID! ): Application
    }
`;

module.exports = { typeDefs };