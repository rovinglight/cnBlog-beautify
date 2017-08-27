import React, { Component } from 'react';
import './post.css';
import bgImg from '../../asset/img/bg.jpg';

class Post extends Component {
  render () {
    console.log(typeof this.props.postData.body);
    return (
      <div className='post'>
        <img className='banner' src={bgImg} alt='banner' />
        <div className='postContent'>
          <h2>{this.props.postData.title}</h2>
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.body)}}/>
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.next_prev)}}/>
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.social_buttons)}}/>
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.comment)}}/>
        </div>
      </div>
    )
  }
}

export default Post;
