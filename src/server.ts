import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { routes } from 'routes';
import resolvers from './resolvers';
import typeDefs from './schemas';

mongoose.connect('mongodb://localhost:27017/express_graphql');

const app = express();

app.use(express.json());
app.use(routes);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

app.listen(4003, () => console.log('Server is running on port 4003'));
