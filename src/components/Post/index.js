import React, { Component } from 'react';
import './post.css';
import bgImg from '../../asset/img/bg.jpg';

class Post extends Component {
  render () {
    return (
      <div className='post'>
        <img className='banner' src={bgImg} alt='banner' />
      </div>
    )
  }
}

export default Post;
