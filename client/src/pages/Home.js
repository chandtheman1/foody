import React from "react";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RESTAURANTS } from '../gql/queries';
import { checkWishlist, checkFavourite } from "../utils/helpers";
import logo from '../assets/images/foodyLogoHighRes.png'

import RatingStar from '../components/RatingStar';
import WishlistButton from "../components/WishlistButton";
import FavouriteButton from "../components/FavouriteButton";

const styles = {
  margin: {
    margin: '0px'
  }
}

const Home = () => {

  const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
  console.log(loading)
  const restaurants = data?.getAllRestaurants;
  console.log(restaurants);

  // console.log(Auth.getToken());
  const _id = Auth.getId();
  // console.log(_id)

  if (Auth.loggedIn()) {
    return (
      <>
        {loading ? (
          <div>
            <h2>Loading...</h2>

          </div>

        ) : (
          <div className="ui container">
            <img src={logo} style={{ width: "300px" }} className="centered"></img>
            <div className="ui two column grid">{
              restaurants && restaurants.map(restaurant => (

                <div className="ui card column equal width " key={restaurant._id} style={styles.margin} >
                  <div className="content">
                    <Link to={`/restaurant/${restaurant._id}`} style={{ textDecoration: 'none' }}>
                      <h2>{restaurant.name}</h2>
                    </Link>
                  </div>
                  <div className='image'>
                    <img></img>
                  </div>
                  <div className="content">
                    <h3>{restaurant.address}</h3>
                  </div>
                  <div className="content">




                    <WishlistButton _id={_id} restaurant={restaurant} />


                    <FavouriteButton _id={_id} restaurant={restaurant} />

                  </div>

                </div>


              ))}
            </div>
          </div>

        )}

      </>


    );
  } else {
    window.location.replace('/login')
  }

};

export default Home;
