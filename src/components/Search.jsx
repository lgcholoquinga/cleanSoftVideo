import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
  return (
    <section className='search'>
      <h2 className='search__title'>¿What do you want to see today?</h2>
      <input className='search__input' type='text' placeholder='Search...' />
    </section>
  );
};

export default Search;
