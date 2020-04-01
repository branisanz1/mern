import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AuthAPI from '../../services/authAPI';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errorLogin, setErrorLogin] = useState();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await AuthAPI.authenticate(credentials);
      onLogin(true);
      setErrorLogin(null);
    } catch (error) {
      setErrorLogin(error.response.data);
    }
  };
  const handleChange = event => {
    event.preventDefault();
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{errorLogin}</p>

        <input name='email' onChange={handleChange} type='email' placeholder='Insert email' />
        <br></br>
        <input name='password' onChange={handleChange} type='password' placeholder='Insert password' />
        <br></br>

        <button type='submit'>Connect</button>
      </form>
    </>
  );
};

export default Login;
