import { User } from '../models';

const resolvers = {
  Token: {
    expiresAt: ({ expiresAt }) => {
      const d = new Date(expiresAt);
      return d.toISOString();
    },
  },
  Query: {
    me: (__, ___, { user }) => user,
  },
  Mutation: {
    login: (__, { username, password }) => {
      return User.login({ username, password });
    },
    signUp: (__, { username, password }) => {
      return User.signUp({ username, password });
    },
  }
}

export default resolvers;
