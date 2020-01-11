//we need to import resover:Where does this data come from and what does this data do
//in database//

const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')


function createServer(){
return new GraphQLServer({
   typeDefs: 'src/schema.graphql',
   resolvers: {
   Mutation,
   Query
   },
   resolverValidationOptions: {
       requireResolversForResolveType:false
   },
   context: req => ({...req,db }),
});
}

module.exports = createServer;