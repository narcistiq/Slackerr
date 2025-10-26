// this file exports all our individual resolvers
//helps with organization

// rename it according to whatever types you are using!


// here go each of the different data types:
import userResolvers from './user.js';
import applicationResolvers from './application.js';

const resolvers = {

    Query: {
        ...userResolvers.Query,
        ...applicationResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...applicationResolvers.Mutation
    }
};
export default resolvers;