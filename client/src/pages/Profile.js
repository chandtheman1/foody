import React from "react";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from '../gql/queries';
import { checkWishlist, checkFavourite } from "../utils/helpers";
import logo from '../assets/images/foodyLogoHighRes.png'

const Profile = () => {

    const id = Auth.getId();
    console.log(id);
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { _id: id }
    });

    const user = data?.getUser
    // console.log(data)

    if (Auth.loggedIn()) {
        return (
            <div className="ui container">
                <img src={logo} style={{ width: "300px" }} className="centered"></img>
                <div className="ui column grid">
                    <form className="ui form">
                        <div className="field">
                            <label htmlFor="email">Username:</label>
                            <input
                                placeholder={user?.username}
                                name="username"
                                type="text"
                                id="username"
                                disabled="disabled"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="pwd">Email:</label>
                            <input
                                placeholder={user?.email}
                                name="email"
                                type="email"
                                id="email"
                                disabled="disabled"
                            />
                        </div>
                        <button onClick={() => Auth.logout()}>Logout</button>

                    </form>

                </div>
            </div>
        )
    } else {
        window.location.replace('/login')
    }

}

export default Profile;