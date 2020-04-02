import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import headerIcon from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={headerIcon} alt='header-logo' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='profile' />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href='/'>Account</a></li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
