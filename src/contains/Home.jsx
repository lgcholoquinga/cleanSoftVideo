/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals, search }) => {

  return (
    <>
      <Search />
      {search?.length > 0 && (
        <Categories title='Search'>
          <Carousel>
            {search.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {
        mylist?.length > 0 && (
          <Categories title='My List'>
            <Carousel>
              {
                mylist?.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Trends'>
        <Carousel>
          {
            trends?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
      <Categories title='Originals of CleanSoftVideo'>
        <Carousel>
          {
            originals?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
