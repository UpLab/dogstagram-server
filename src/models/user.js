import mongoose from 'mongoose';
import md5 from 'md5';
import uuid from 'uuid';

const _30_MINUTES = 30 * 60 * 1000;
const { DEFAULT_TOKEN_EXPIRATION_PERIOD = _30_MINUTES } = process.env;

const createToken = (expirationPeriod = DEFAULT_TOKEN_EXPIRATION_PERIOD) => ({
  token: uuid(),
  expiresAt: new Date(Date.now() + expirationPeriod),
});

const tokenSchema = new mongoose.Schema({
  token: String,
  expiresAt: Date,
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  tokens: [tokenSchema],
  createdAt: { type: Date, default: Date.now },
});

userSchema.methods.addToken = async function() {
  const token = createToken();
  await this.update({
    $addToSet: {
      tokens: token,
    },
  });

  return token;
}

userSchema.statics.login = async function ({ username, password }) {
  let user = await this.findOne({
    username,
    password: md5(password),
  });

  if (!user) {
    throw new Error('The username or password is incorrect.');
  }

  const token = await user.addToken();

  await user.save();

  return token;
};

userSchema.statics.signUp = async function ({ username, password }) {
  const token = createToken();
  let user = new User({
    username,
    password: md5(password),
    tokens: [token],
  });
  
  await user.save();

  return token;
};

userSchema.statics.findUserByToken = async function (token) {
  const d = new Date();
  return this.findOne({
    tokens: {
      $elemMatch: {
        expiresAt: { $gt: d },
        token,
      },
    },
  });
}

const User = mongoose.model('User', userSchema);

export default User;