const express = require('express')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers/index')
const db = require('./config/connection/db')

const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

app.use('/',require('./routes/paths'))

server.listen({port: 5000})
app.listen(2000)
db.authenticate()
  .then(() => console.log('[Database Connected]'))
  .catch(err => console.log('Error: ' + err))