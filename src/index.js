const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Post = require("./resolvers/Post");
const Subscription = require("./resolvers/Subscription");
const Community = require("./resolvers/Community");
const Comment = require("./resolvers/Comment");
const Event = require("./resolvers/Event");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Post,
  Community,
  Comment,
  Event
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => {
  console.log(`Server is running on 4000 maybe???`);
});
