import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";


function AuthNav() {
	if (Auth.loggedIn()) {
		return (
			<div>
				{/* this is not using the Link component to logout or user and then refresh the application to the start */}
				<a href="/" onClick={() => Auth.logout()}>
					Logout
				</a>

			</div>

		);
	} else {
		return (

			<div>
				<Link to="/signup">
					Signup
				</Link>


				<Link to="/login">
					Login
				</Link>
			</div>


		);
	}
}

function Nav() {
	return (


		<div>
			<Link to="/">
				Home
			</Link>

		</div>



	);
}

export default Nav;
