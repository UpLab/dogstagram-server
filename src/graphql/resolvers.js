import { User, Dog } from '../models';

const withAuth = (next) => (root, params, context) => {
  if (!context.user) {
    throw new Error('Not authorized');
  }
  return next(root, params, context);
}

const resolvers = {
  Token: {
    expiresAt: ({ expiresAt }) => {
      const d = new Date(expiresAt);
      return d.toISOString();
    },
  },
  User: {
    dogs: ({ _id }) => {
      return Dog.find({ userId: _id });
    }
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
    createDog: withAuth((__, params, { user }) => {
      const { name, breed, dob, sex, status, image } = params;
      const dog = { name, breed, dob, sex, status, image, userId: user._id };
      return Dog.create(dog);
    }),
    updateDog: withAuth(async (__, params, { user }) => {
      const { _id, name, breed, dob, sex, status, image } = params;
      const modifier = { name, breed, dob, sex, status, image };

      const dog = await Dog.findOne({ _id });
      if (!dog) throw new Error('Dog not found');
      if (String(dog.userId) !== String(user._id)) throw new Error('You are only allowed to update your own dogs');

      const updated = await dog.edit(modifier);
      return updated;
    }),
    removeDog: withAuth(async (__, { _id }, { user }) => {
      const dog = await Dog.findOne({ _id });
      if (!dog) throw new Error('Dog not found');
      if (String(dog.userId) !== String(user._id)) throw new Error('You are only allowed to update your own dogs');

      dog.remove();

      return _id;
    }),
  },
}

export default resolvers;
