import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_RESTAURANT } from '../gql/mutations';
import logo from '../assets/images/foodyLogoHighRes.png'


function AddRestaurant() {
    const [formState, setFormState] = useState({ name: '', address: '', postcode: '', image: '' });
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
        window.location.assign('/');
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

    if (Auth.loggedIn()) {

        return (
            <div className="ui container">
                <img src={logo} style={{ width: "300px" }} className="centered"></img>
                <div className="container">
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
                        <div className="field">
                            <label htmlFor="image">Upload Image</label>
                            <input type="file" id="image"
                                name="image" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )

    } else {
        window.location.replace('/login')
    }


}

export default AddRestaurant;