import React from "react";
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="ui three item bottom fixed menu">
            <Link to="/" className="active item"><i className="home icon"></i> </Link>
            <Link to="/addrestaurant" className="item"><i className="plus icon"></i></Link>
            {/* <a className="item"><i className="star icon"></i></a> */}
            <Link to="/profile" className="item"><i className="user icon"></i></Link>
        </div>
    )
}

export default Nav;