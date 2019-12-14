const MongoClient = require('mongoose')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers/index')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: 5000})
// const app = express()

MongoClient.connect('mongodb+srv://sGurkaran:qmxWco8121TB2wS0@gurkaranmaincluster-auih8.mongodb.net/CitySocial?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));