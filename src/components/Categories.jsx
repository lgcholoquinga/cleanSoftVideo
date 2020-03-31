import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => {
  return (
    <div className='categories'>
      <h3 className='categories__title'>My List</h3>
      {children}
    </div>
  );
};

export default Categories;
