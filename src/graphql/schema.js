import {gql} from 'apollo-server-core';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { apiFiltersTipeDefs } from './api-filters/typeDefs';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typeDefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typeDefs';

const rootTypeDefs = gql`
    type Query{
      _root:Boolean
    }
  `;
  
  const rootResolers = {
    Query :{
      _root: () => true
    },
  };

  export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTipeDefs];
  export const resolvers = [rootResolers, userResolvers,postResolvers, apiFiltersResolvers];
  

