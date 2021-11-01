import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../gql/mutations';
import img from '../assets/images/banquet.jpg'
import logo from '../assets/images/foodyLogo.png'

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password
      },
    });
    const token = mutationResponse.data.addUser.token;
    const _id = mutationResponse.data.addUser.user._id;

    Auth.login(token, _id);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className='ui three column doubling stackable grid container'>
        <div className='column'>
          <img src={logo}></img>
          <h2>Sign up</h2>
          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field">
              <label htmlFor="username">Username:</label>
              <input
                placeholder="username"
                name="username"
                type="text"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className='column'>
          <img src={img} />
        </div>
      </div>
    </>
  );
}

export default Signup;
