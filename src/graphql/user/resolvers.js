import fetch from 'node-fetch';

const users = async (_, {input}, {getUsers}) => {
  const apiFiltersInput = new URLSearchParams(input)
  const users = await getUsers('/?' + apiFiltersInput);
  return users.json();
};


const user =  async (_, {id}, {getUsers}) => {
  const users = await getUsers('/' + id);
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};