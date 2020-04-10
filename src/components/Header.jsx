/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import headerIcon from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user)?.length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={headerIcon} alt='header-logo' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='profile' />
          }
          <p>Profile</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null
          }
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Logout</a></li> : (
                <li>
                  <Link to='/login'>
                    Login
                  </Link>
                </li>
              )
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
