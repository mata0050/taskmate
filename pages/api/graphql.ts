import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server-micro';
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from 'type-graphql';



@ObjectType()
export class Dog{
  @Field(()=>ID)
  name: string;
}

const apolloServer = new ApolloServer({});

export const config = {
  api: {
    bodyParser: false,
  },
};
const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
