import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { ADD_FAVOURITE } from '../gql/mutations';
import { checkFavourite } from "../utils/helpers";

function FavouriteButton({ _id, restaurant }) {
    const [favourite, setFavourite] = useState(false);
    const [favouriteCounter, setFavouriteCounter] = useState(checkFavourite(restaurant))

    useEffect(() => {
        if (_id && restaurant.favourite.find((restaurant) => restaurant._id === _id)) {
            setFavourite(true);
        } else {
            setFavourite(false);
        }
    }, [_id, restaurant]);

    const [addFavourite] = useMutation(ADD_FAVOURITE, {
        variables: { _id: restaurant._id }
    })

    const favouriteButton = favourite ? (
        <i className="heart icon right item" onClick={addFavourite}></i>
    ) : (
        <i className="heart outline icon right item" onClick={addFavourite}></i>
    )

    return (
        <>
            <div>
                {favouriteCounter}
                {favouriteButton}
            </div>
        </>
    )
}

export default FavouriteButton;