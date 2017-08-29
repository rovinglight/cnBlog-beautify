import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import './header.css';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  }
};

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    return (
      <div>
        <header>
          <div className='profile'>
            <img src='https://rovinglight.github.io/cnBlog-beautify/build/asset/img/avatar.jpg' alt='avatar'/>
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
          <div className='mobile_header'>
            <div className='header_left'>
              <IconButton
                onClick={this.handleToggle}
                iconStyle={styles.smallIcon}
                style={styles.small}
              >
                <Menu />
              </IconButton>
            </div>
            <div className='header_right'>
              Designed By
              <FlatButton
                href="https://github.com/rovinglight/cnBlog-beautify"
                target="_blank"
                label="rovinglight"
                icon={<FontIcon className="muidocs-icon-custom-github" />}
              />
            </div>
          </div>
        </header>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            iconElementLeft=''
            title="转到" />
          <MenuItem
            href="http://www.cnblogs.com/rovinglight/"
            target="_blank"
            onClick={this.handleClose}>首页</MenuItem>
          <MenuItem
            href="https://msg.cnblogs.com/send/%E5%9D%8E%E5%A4%A7%E5%93%88%E7%9A%84%E7%99%BD%E8%A1%A3%E5%A4%A9%E4%BD%BF"
            target="_blank"
            onClick={this.handleClose}>联系</MenuItem>
          <MenuItem
            href="http://www.cnblogs.com/rovinglight/rss"
            target="_blank"
            onClick={this.handleClose}>订阅</MenuItem>
          <MenuItem
            href="https://i.cnblogs.com/"
            target="_blank"
            onClick={this.handleClose}>管理</MenuItem>
          <MenuItem
            href="http://www.cnblogs.com/"
            target="_blank"
            onClick={this.handleClose}>博客园</MenuItem>
          <MenuItem
            href="https://i.cnblogs.com/EditPosts.aspx?opt=1"
            target="_blank"
            onClick={this.handleClose}>新随笔</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Header;
