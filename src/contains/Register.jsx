import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <div className='register__container'>
      <h2 className='register__container--title'>Register</h2>
      <form className='register__container--form'>
        <input className='register__container--input' type='text' placeholder='Name' />
        <input className='register__container--input' type='email' placeholder='E-mail' />
        <input className='register__container--input' type='password' placeholder='Password' />
        <button type='button' className='register__container--button'>Register</button>
        <Link to='/login' className='register__container--login'>
          Login
        </Link>
      </form>
    </div>
  </section>
);

export default Register;
