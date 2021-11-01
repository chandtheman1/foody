import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

function WishlistButton({ user, restaurant }) {
    const [wishlist, setWishlist] = useState(false);

    useEffect(() => {
        if (user && restaurant.wishlist.find((restaurant) => restaurant.wishlist === user._id)) {
            setWishlist(true);
        } else setWishlist(false);
    }, [user, restaurant]);

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