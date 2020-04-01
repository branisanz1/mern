import React, { useState } from 'react';
import AuthAPI from '../../services/authAPI';

const SignUpBranis = props => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [errorRegister, setErrorRegister] = useState();
  const [successLogin, setSuccessLogin] = useState();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await AuthAPI.register(credentials);
      setErrorRegister(null);
      setSuccessLogin('Votre compte a bien été crée !');
    } catch (error) {
      setErrorRegister(error.response.data);
      setSuccessLogin(null);
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
        <p>{errorRegister}</p>
        <p>{successLogin}</p>

        <input name='email' onChange={handleChange} type='email' placeholder='Insert email' />
        <br></br>
        <input name='firstName' onChange={handleChange} type='text' placeholder='Insert firstName' />
        <br></br>
        <input name='lastName' onChange={handleChange} type='text' placeholder='Insert lastname' />
        <br></br>
        <input name='password' onChange={handleChange} type='password' placeholder='Insert password' />
        <br></br>

        <button type='submit'>Register</button>
      </form>
    </>
  );
};

export default SignUpBranis;
