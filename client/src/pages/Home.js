import React from "react";
import Auth from '../utils/auth';


const Home = () => {
  if (Auth.loggedIn()) {
    return (

      <h2>Hello world</h2>

    );
  } else {
    window.location.replace('/login')
  }

};

export default Home;
