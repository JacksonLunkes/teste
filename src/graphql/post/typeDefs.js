import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
    extend type Query{
      post(id: ID!): PostResult!,
      posts(input: ApiFiltersInput): [Post!]!,
    }

    union PostResult = PostNotFoundError | Post

    interface PostError{
      statusCode:Int!
      message:String!    
    }

    type PostNotFoundError implements PostError{
      statusCode:Int!
      message:String!
    }

    type Post {
      id: ID!
      tile: String! 
      body: String! 
      userid: String! 
      indexRef: Int! 
      credentialAt:String!
    }
  `;