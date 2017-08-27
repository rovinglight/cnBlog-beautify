import React, { Component } from 'react';
import './header.css';
import avatar from '../../asset/img/avatar.jpg'

class Header extends Component {

  render () {
    return (
      <header>
        <div className='profile'>
          <img src='https://rovinglight.github.io/cnBlog-beautify/build/static/media/avatar.jpg' alt='avatar'/>
          <span>Designed By Rovinglight</span>
        </div>
        <ul>
          <li><a href='https://i.cnblogs.com/EditPosts.aspx?opt=1'>新随笔</a></li>
          <li><a href='https://msg.cnblogs.com/send/%E5%9D%8E%E5%A4%A7%E5%93%88%E7%9A%84%E7%99%BD%E8%A1%A3%E5%A4%A9%E4%BD%BF'>联系</a></li>
          <li><a href='http://www.cnblogs.com/rovinglight/rss'>订阅</a></li>
          <li><a href='https://i.cnblogs.com/'>管理</a></li>
          <li><a href='http://www.cnblogs.com/'>博客园</a></li>
          <li><a href='http://www.cnblogs.com/rovinglight/'>首页</a></li>
        </ul>
      </header>
    )
  }
}

export default Header;
