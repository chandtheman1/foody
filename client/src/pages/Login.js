import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../gql/mutations';
import Auth from '../utils/auth';
import img from '../assets/images/banquet.jpg'
import logo from '../assets/images/foodyLogo.png'


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          <h2>Login</h2>
          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field">
              <label htmlFor="email">Email address:</label>
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
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
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

export default Login;
