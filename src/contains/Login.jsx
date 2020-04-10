/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';

import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history?.push('/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <h2 className='login__container--title'>Sign In</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='login__form--input'
            type='email'
            placeholder='E-mail'
            onChange={handleInput}
          />
          <input
            name='password'
            className='login__form--input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button
            type='submit'
            className='login__form--button'
          >
            Login
          </button>
          <div className='login__container--remember'>
            <label htmlFor='remember'>
              <input type='checkbox' />
              Remember
            </label>
            <a href='/'>I Forgot my Password</a>
          </div>
        </form>
        <div className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
            Login with Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            Login with Twitter
          </div>
        </div>
        <p className='login__container--register'>
          ¿Dont you have an account?-
          <Link to='/register'>
            Register
          </Link>
        </p>
      </div>
    </section>

  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
