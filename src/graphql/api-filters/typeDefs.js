import { gql } from 'apollo-server-core';

export const apiFiltersTipeDefs = gql`
  input ApiFiltersInput{
   _sort: String
   _order: ApiFiltersOrder
   _start: Int
   _limit: Int
  }

  enum ApiFiltersOrder{
    ASC
    DESC
  }
`;