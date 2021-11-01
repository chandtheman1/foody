import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

function WishlistButton({ _id, restaurant }) {
    const [wishlist, setWishlist] = useState(false);

    useEffect(() => {
        if (_id && restaurant.wishlist.find((restaurant) => restaurant._id === _id)) {
            setWishlist(true);
        } else setWishlist(false);
    }, [_id, restaurant]);

    const wishlistButton = wishlist ? (
        <i className="bookmark icon right item"></i>
    ) : (
        <i className="bookmark outline icon right item"></i>
    )

    return (
        <>
            {wishlistButton}
        </>
    )
}

export default WishlistButton;