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