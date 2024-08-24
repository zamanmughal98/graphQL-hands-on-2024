import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import DataSet from './src/dataset.js';
import schema from './src/schema.js';
import resolversBuilder from './src/resolvers.js';

const serverPort = { port: 8000 };
const resolvers = resolversBuilder(DataSet);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: serverPort });

console.log('Starting Apollo server on port ' + serverPort.port + '...', url);


