import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { ADD_WISHLIST } from '../gql/mutations';
import { checkWishlist } from "../utils/helpers";

function WishlistButton({ _id, restaurant }) {
    const [wishlist, setWishlist] = useState(false);
    const [wishlistCounter, setWishlistCounter] = useState(checkWishlist(restaurant))



    const [addWishlist] = useMutation(ADD_WISHLIST, {
        variables: { _id: restaurant._id }
    })

    useEffect(() => {
        if (_id && restaurant.wishlist.find((restaurant) => restaurant._id === _id)) {
            setWishlist(true);
        } else {
            setWishlist(false)
        }
    }, [_id, restaurant]);


    const wishlistButton = wishlist ? (
        <i className="bookmark icon right item" onClick={addWishlist}></i>
    ) : (
        <i className="bookmark outline icon right item" onClick={addWishlist}></i>
    )

    return (
        <>
            <div>
                {wishlistCounter}
                {wishlistButton}
            </div>

        </>
    )
}

export default WishlistButton;