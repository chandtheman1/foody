import React from "react";
import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RESTAURANTS } from '../gql/queries';
import { checkWishlist, checkFavourite } from "../utils/helpers";

import RatingStar from '../components/RatingStar';
import WishlistButton from "../components/WishlistButton";
import FavouriteButton from "../components/FavouriteButton";



const Home = () => {

  const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
  console.log(loading)
  const restaurants = data?.getAllRestaurants;
  console.log(restaurants);

  // console.log(Auth.getToken());
  const _id = Auth.getId();
  console.log(_id)

  if (Auth.loggedIn()) {
    return (
      <>
        {loading ? (
          <div>
            <h2>Loading...</h2>

          </div>

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
                  <WishlistButton _id={_id} restaurant={restaurant} />
                </div>
                <div>
                  <FavouriteButton _id={_id} restaurant={restaurant} />
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
