const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    username: String
  }

  type Restaurant {
    _id: ID
    name: String
    address: String
    postcode: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getUser(_id: ID!): User
    getAllUsers: [User]

    getRestaurant(_id: ID!): Restaurant
    getAllRestaurants: [Restaurant]
  }

  type Mutation {
    addUser(email: String!, password: String!, username: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth

    addRestaurant(name: String, address: String, postcode:Int): Restaurant
    updateRestaurant(_id: ID! name: String, address: String, postcode: Int): Restaurant
    deleteRestaurant(_id: ID!): Restaurant
  }
`;

module.exports = typeDefs;
