import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant(
    $name: String!
    $address: String!
    $postcode: String!
  ) {
    addRestaurant(
      name: $name
      address: $address
      postcode: $postcode
    ) {
      _id
      name
      address
      postcode
    }
  }
`
