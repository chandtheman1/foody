import React from "react";
import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RESTAURANTS } from '../gql/queries';
import { checkWishlist, checkFavourite } from "../utils/helpers";

import RatingStar from '../components/RatingStar';




const Home = () => {

  const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
  console.log(loading)
  const restaurants = data?.getAllRestaurants;
  console.log(restaurants);

  if (Auth.loggedIn()) {
    return (
      <>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          restaurants && restaurants.map(restaurant => (
            <div className="ui card" key={restaurant._id}>
              <div className="content">
                {restaurant.name}
              </div>
              <div className='image'>
                <img></img>
              </div>
              <div className="content">

                <RatingStar className='item' />

                <div>
                  {checkWishlist(restaurant)} <i className="heart outline icon right item"></i>
                </div>
                <div>
                  <i class="bookmark icon right item"></i>
                </div>


              </div>

            </div>
          ))
        )}

      </>


    );
  } else {
    window.location.replace('/login')
  }

};

export default Home;
