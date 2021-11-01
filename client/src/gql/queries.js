import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      email
    }
  }
`;

export const QUERY_ALL_RESTAURANTS = gql`
  {
    getAllRestaurants{
      _id
      name
      address
      postcode
      reviews{
        _id
        body
        score
        author{
          _id
          username
        }
      }
      wishlist{
        _id
        email
      }
      favourite{
        _id
        email
        username
      }
    }
  }
`

export const QUERY_RESTAURANT = gql`
  query getRestaurant($_id: ID!) {
    getRestaurant(
      _id: $_id
    ){
      _id
      name
      address
      postcode
      reviews {
        _id
        body
        score
        author{
          _id
          username
        }
      }
      wishlist{
        _id
        email
      }
      favourite{
        _id
        email
        username
      }
    }
  }
`