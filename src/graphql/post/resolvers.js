import fetch from 'node-fetch';
import { typeDefs } from '../schema';

const posts = async (_, {input},{getPosts}) => {
  const apiFiltersInput = new URLSearchParams(input)
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

const post = async (_, {id},{getPosts}) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (typeof post.id == 'undefined'){
   return{
    statusCode: 400,
     message: 'post not found'
   };
  }

  return post;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  PostResult: {
    __resolveType: (obj) =>{
      if (typeof obj.statusCode != 'undefined') return 'PostNotFoundError';
      if (typeof obj.id != 'undefined') return 'Post';
      return null;
    }, 
  }, 
};