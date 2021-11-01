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

const Favourite = () => {
    return (
        <div className="ui">
            <img src={logo} style={{ width: "300px" }} className="centered"></img>
            <div>

            </div>
        </div>
    )
}

export default Favourite;