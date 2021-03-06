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
    postcode: String
    author: User
    wishlist: [User]
    favourite: [User]
    reviews: [Review]
    img: String
  }

  type Review {
    _id: ID
    body: String
    score: Int
    author: User
    createdAt: String
    restaurantId: Restaurant
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

    getReviews(restaurantId: ID!): [Review]
  }

  type Mutation {
    addUser(email: String!, password: String!, username: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth

    addRestaurant(name: String, address: String, postcode:String, img:String): Restaurant
    updateRestaurant(_id: ID!, name: String, address: String, postcode: String): Restaurant
    deleteRestaurant(_id: ID!): Restaurant
    addWishlist(_id: ID!): Restaurant
    addFavourite(_id: ID!): Restaurant

    addReview(restaurantId: ID!, body: String, score: Int): Review
    deleteReview(_id: ID!): Review
  }
`;

module.exports = typeDefs;
