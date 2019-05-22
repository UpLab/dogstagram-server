import server from './graphql';
import { connectDb } from './models';

connectDb()
  .then(() => console.log('💾 Connected to the database'))
  .then(() => server.listen())
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
  .catch((error) => console.error(error));
