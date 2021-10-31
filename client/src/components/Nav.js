import React from "react";



function Nav() {
    return (
        <div className="ui four item bottom fixed menu">
            <a className="active item"><i className="home icon"></i></a>
            <a className="item"><i className="plus icon"></i></a>
            <a className="item"><i className="star icon"></i></a>
            <a className="item"><i className="user icon"></i></a>
        </div>
    )
}

export default Nav;