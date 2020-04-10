/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideosSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideosSource(id);
  }, []);

  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='player__back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};
const mapToSteteToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideosSource,
};
export default connect(mapToSteteToProps, mapDispatchToProps)(Player);
