import { gql } from 'apollo-server';

const typeDefs = gql`

type User {
  _id: String!
  username: String!
  dogs: [Dog]!
}

enum Sex {
  male
  female
}

type Dog {
  _id: String!
  name: String!
  breed: String!
  "Date of birth has YYYY-MM-DD format. Example 20-08-2009"
  dob: String!
  sex: Sex!
  status: String
  "Image URL"
  image: String
}

type Token {
  token: String!
  "Expiration date in ISO-8601 format. Example: 2019-05-22T20:28:03.506Z"
  expiresAt: String!
}

"""
All queries and mutations should be authenticated with the token in the "Authorization" header. 
For example,{ "Authorization": "uuAi4B7dIAX8CtA9YFNx" }
If the token is invalid or expired, the corresponding error will be thrown by the server on authorized calls.

You can obtain your token using "login" or "signUp" mutations
"""
type Query {
  "returns current user. if there is no token or token is invalid, then it returns null"
  me: User

  "returns dogs that are in 15km radius from the point"
  dogsNearby(
    "latitude"
    lat: Float!
    "longitude"
    lng: Float! 
  ): [Dog]!
}

type Mutation {
  "Logs in existing user"
  login(
    username: String!
    password: String!
  ): Token!

  "Creates and logs a newly created user"
  signUp(
    username: String!
    password: String!
  ): Token!

  "Creates a dog"
  createDog(
    name: String!
    breed: String!
    dob: String!
    sex: Sex!
    status: String
    image: String
  ): Dog!

  "Updates a dog"
  updateDog(
    id: String!
    name: String!
    breed: String!
    dob: String!
    sex: Sex!
    status: String
    image: String
  ): Dog!
  logout: Boolean
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default typeDefs;
