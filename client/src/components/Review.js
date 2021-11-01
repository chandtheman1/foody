import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import RatingStar from '../components/RatingStar';
import RatingExampleOnRate from '../components/RatingSlider';
import Auth from "../utils/auth";
import { ADD_REVIEW } from '../gql/mutations';
import { QUERY_RESTAURANT } from '../gql/queries'

const styles = {
    padding: {
        padding: '10px'
    }
}
const Review = ({ restaurantId }) => {
    // console.log(restaurantId);
    const [formState, setFormState] = useState({ body: '', score: null });
    const [addReview] = useMutation(ADD_REVIEW);

    const { data, loading } = useQuery(QUERY_RESTAURANT, {
        variables: { _id: restaurantId }
    })



    const reviews = data?.getRestaurant?.reviews
    console.log(reviews);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addReview({
            variables: {
                restaurantId: restaurantId,
                body: formState.body,
                score: parseInt(formState.score)

            }
        })
        window.location.reload(); // will need to remove this
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name)
        // console.log(value)
        setFormState({

            ...formState,
            [name]: value,
        })
    }

    const handleRate = (e, { rating, maxRating }) => {
        console.log(e.target);
        setFormState({
            ...formState,
            [rating]: maxRating,
        })
    }


    return (
        <>
            <h2>Reviews</h2>
            <div>
                <form className="ui form" onSubmit={handleFormSubmit}>
                    <input
                        placeholder="Add Review..."
                        name="body"
                        type="text"
                        id="body"
                        onChange={handleChange}
                    />
                    {/* <RatingStar id="score" onChange={handleRate} /> */}
                    {/* <RatingExampleOnRate /> */}
                    <input
                        placeholder="Out of 5"
                        name="score"
                        type="text"
                        id="score"
                        onChange={handleChange}
                    />

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
                <div className="ui container">
                    {
                        reviews && reviews.map(review => (
                            <div className="column divided" key={review._id} style={styles.padding}>
                                <h2>{review.body}</h2>
                                <p>Score: {review.score}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Review;