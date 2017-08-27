import React, { Component } from 'react';

import './articleList.css'

class ArticleList extends Component {

  jumpToArticle (ev) {
    //Header drop down to cover the page ;
    window.location = ev.currentTarget.dataset.url;
  }

  render () {
    return (
      <div className='artListContainer'>
        <img className='banner' src='https://rovinglight.github.io/cnBlog-beautify/build/asset/img/bg.jpg' alt='banner' />
        <div className='artList'>
          <div className='aboutMe'>
            <h2>坎大哈的白衣天使</h2>
            <span>Angel in white from Kandahar</span>
          </div>
          {
            this.props.indexData.map((post, index) => {
              return (
                <div
                  data-url={post.url}
                  key={index}
                  className='artItem card'
                  onClick={this.jumpToArticle}
                  >
                  <div className='artContent'>
                    <h3>{post.title}</h3>
                    <p>{post.summ}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>

    )
  }
}

export default ArticleList;
