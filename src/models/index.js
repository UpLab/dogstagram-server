import mongoose from 'mongoose';

import User from './user';
import Dog from './dog';

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const models = { User, Dog };

export { connectDb, User, Dog };

export default models;