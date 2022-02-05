const express = require('express');
const {
    ApolloServer
} = require('apollo-server');
const {
    ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const typeDefs = require('./types');
const resolvers = require('./resolver');
const models = require('./models');
const databse = require('./config/database');

databse();


app.use(cors())

dotenv.config()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({
        req,
        next
    }) {
        return {
            models,
            req,
            next
        }
    },
    introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
})
server.listen({
    port: 4000
}).then(({
    url
}) => {
    console.log(`🚀 Server ready at ${url}`);
});

module.exports = app