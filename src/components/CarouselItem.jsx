/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import removeIcon from '../assets/images/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorites = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handelDeletefavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item' key={id}>
      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              src={playIcon}
              alt='play'
            />
          </Link>
          {
            isList ? (
              <img
                src={removeIcon}
                alt='remove'
                onClick={() => handelDeletefavorite(id)}
              />
            ) : (

              <img
                src={plusIcon}
                alt='plus'
                onClick={handleSetFavorites}
              />
            )
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutes`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
