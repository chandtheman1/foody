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
    author: User
    wishlist: [User]
    favourite: [User]
  }

  type Review {
    _id: ID
    body: String
    score: Int
    username: String
    createdAt: String
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
    addWishlist(_id: ID!): Restaurant
    addFavourite(_id: ID!): Restaurant
  }
`;

module.exports = typeDefs;
