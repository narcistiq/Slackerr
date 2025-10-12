// this file exports all our individual resolvers
//helps with organization

// rename it according to whatever types you are using!


// here go each of the different data types:
const userResolvers = require('./user');
const applicationResolvers = require('./application');


module.exports = {

    Query: {
        ...userResolvers.Query,
        ...applicationResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...applicationResolvers.Mutation
    }
};