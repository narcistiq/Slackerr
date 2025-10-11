// index.js is the entry point of your backend application.
// It sets up the Express server, connects to the MongoDB database,
// and configures the Apollo GraphQL server.



//this is calling all the libraries and APIs we will be using
require('dotenv').config({ path: '../.env' });
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Import your MongoDB connection URI from the config file.
const MONGODB_URI = process.env.MONGO_URI; // from env file
const app = express();

// Import the GraphQL schema definitions and resolvers.
const typeDefs = require('./graphql/TypeDefs');
const resolvers = require('./graphql/resolvers');

// Initialize the Express and Apollo Server instances.
// Then start the server with a function
mongoose.connect( MONGODB_URI );
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
})
const server = new ApolloServer({
    typeDefs,
    resolvers
})
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}${server.graphqlPath}`)
    });
}
startApolloServer();
