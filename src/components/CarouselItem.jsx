import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = () => {
  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src='https://images.pexels.com/photos/3633626/pexels-photo-3633626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt='imagemovie'
      />
      <div className='carousel-item__details'>
        <div>
          <img src={playIcon} alt='play' />
          <img src={plusIcon} alt='plus' />
        </div>
        <p className='carousel-item__details--title'>Descriptive Title</p>
        <p className='carousel-item__details--subtitle'>2019 16+ 114 minutes</p>
      </div>
    </div>
  );
};

export default CarouselItem;
