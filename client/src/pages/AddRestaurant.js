import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_RESTAURANT } from '../gql/mutations';

function AddRestaurant() {
    const [formState, setFormState] = useState({ name: '', address: '', postcode: '' });
    const [addRestaurant, { data, loading, error }] = useMutation(ADD_RESTAURANT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addRestaurant({
            variables: {
                name: formState.name,
                address: formState.address,
                postcode: formState.postcode
            }
        });
        console.log(mutationResponse)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <>
            <div>
                <h2>Add a Restaurant</h2>
                <form className="ui form" onSubmit={handleFormSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            name="name"
                            type="text"
                            id="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <div className="fields">
                            <div className="twelve wide field">
                                <input
                                    placeholder="Street Address"
                                    name="address"
                                    type="text"
                                    id="address"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="four wide field">
                                <input
                                    placeholder="Postcode"
                                    name="postcode"
                                    type="text"
                                    id="postcode"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddRestaurant;