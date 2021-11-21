
import {ApolloServer, gql} from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query{
      user: User!
      users: [User]!
    }

    type User{
      name: String! 
      id: ID!
      age:Int
      altura:Float
      ativo:Boolean
      arrayStreing:[String]
    }
  `, 
  resolvers:{
    Query: {
      user: () => {
        return {
          name: 'Jackson Lunkes',
          id: '1343432',
          age:  33,
          altura:  1.73,
          ativo: true,
          arrayStreing: ['true', 'false'],
        };
      },
      users: () => {
        return [{
          name: 'Jackson Lunkes',
          id: '1343432',
          age:  33,
          altura:  1.73,
          ativo: true,
          arrayStreing: ['true', 'false'],
        },
        {
          name: 'Alessandra Lunkes',
          id: '87855757',
          age:  40,
          altura:  1.49,
          ativo: true,
          arrayStreing: ['true', 'false'],
        }];
      },
   },
  },
});

server.listen(4003).then(({ url }) => {  
  console.log(`Server listening o url ${url}`);
});