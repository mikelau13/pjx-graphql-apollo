
import { ApolloServer, gql, IResolvers } from 'apollo-server';

// The GraphQL schema sample
const typeDefs = gql`
  # A simple schema Book to start
  type Book {
    title: String
    author: String
  }

  # A simple query books to start
  type Query {
    books: [Book]
  }
`;


const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


  const resolvers: IResolvers  = {
    Query: {
      books: () => books,
    },
  };

// The ApolloServer constructor
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
