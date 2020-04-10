/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { searchVideo } = props;
  const handleInput = (event) => {
    searchVideo(event.target.value);
  };
  return (
    <section className='search'>
      <h2 className='search__title'>¿What do you want to see today?</h2>
      <input
        className='search__input'
        type='text'
        placeholder='Search...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};
export default connect(null, mapDispatchToProps)(Search);
