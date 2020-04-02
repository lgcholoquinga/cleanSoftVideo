import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';

import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2 className='login__container--title'>Sign In</h2>
      <form className='login__container--form'>
        <input className='login__form--input' type='email' placeholder='E-mail' />
        <input className='login__form--input' type='password' placeholder='Password' />
        <button type='button' className='login__form--button'>Login</button>
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

export default Login;
