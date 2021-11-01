import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RESTAURANT } from '../gql/queries';

import RatingStar from '../components/RatingStar';
import WishlistButton from "../components/WishlistButton";
import FavouriteButton from "../components/FavouriteButton";
import Review from "../components/Review";
import logo from '../assets/images/foodyLogoHighRes.png'


const Restaurant = () => {

    const url = window.location.href
    const array = url.split('/')
    const _id = array[array.length - 1]


    const { loading, data } = useQuery(QUERY_RESTAURANT, {
        variables: { _id: _id }
    });

    const restaurant = data?.getRestaurant;

    const addressQuery = restaurant?.address.split(' ').join('+')
    // console.log(restaurant._id);
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="ui container">
                    <img src={logo} style={{ width: "300px" }} className="centered"></img>
                    <h1>{restaurant.name}</h1>
                    <img></img>
                    <h2>Address:
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}+${restaurant.postcode}`}
                            target="_blank"
                        > {restaurant.address} {restaurant.postcode}
                        </a>
                    </h2>

                    <Review restaurantId={restaurant._id} />
                </div>
            )}

        </>
    )
}

export default Restaurant;