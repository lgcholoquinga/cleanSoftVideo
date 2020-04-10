/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <div className='register__container'>
        <h2 className='register__container--title'>Register</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='register__container--input'
            type='text'
            placeholder='Name'
            onChange={handleInput}
            name='name'
          />
          <input
            name='email'
            className='register__container--input'
            type='email'
            placeholder='E-mail'
            onChange={handleInput}
          />
          <input
            name='password'
            className='register__container--input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button
            type='submit'
            className='register__container--button'
          >
            Register
          </button>
          <Link to='/login' className='register__container--login'>
            Login
          </Link>
        </form>
      </div>
    </section>
  );
};
const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
