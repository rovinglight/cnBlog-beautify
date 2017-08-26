import React, { Component } from 'react';

import avatar from '../../asset/img/avatar.jpg'
import './articleList.css'

class ArticleList extends Component {
  render () {
    return (
      <div className='artList'>
        <div className='aboutMe'>
          <h2>坎大哈的白衣天使</h2>
          <span>Angel in white from Kandahar</span>
        </div>
        {
          this.props.indexData.posts.map((post, index) => {
            return (
              <div key={index} className='artItem card'>
                {post.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList;
