import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Share from 'material-ui/svg-icons/social/share';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import './post.css';

class Post extends Component {

  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log(typeof this.props.postData.body);
    return (
      <div className='post'>
        <div className='postContent'>
          <h1>{this.props.postData.title}</h1>
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.body)}}/>
          <section className='favoritePanel'>
            <div className='favoriteTitle'>快来支持我</div>
            <p>点击下面的按钮来让我感受一下你们的爱</p>
          </section>
          <MuiThemeProvider>
            <div>
            <div className='postActions'>
              <div className='socialBotton'>
                  <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    onCheck={new Function(this.props.postData.social_script[0].slice(0, -36))}
                    label="推荐"
                  />
              </div>
              <div className='socialBotton'>
                <Checkbox
                  checkedIcon={<Bookmark />}
                  uncheckedIcon={<BookmarkBorder />}
                  onCheck={new Function(this.props.postData.social_script[2])}
                  label="收藏"
                />
              </div>
              <div className='socialBotton'>
                <Checkbox
                  checkedIcon={<AddCircle />}
                  uncheckedIcon={<AddCircleOutline />}
                  onCheck={new Function(this.props.postData.social_script[1])}
                  label="关注"
                />
              </div>
              <div className='socialBotton'>
                <IconMenu
                  iconButtonElement={<IconButton><Share /></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="分享到微博" onClick={new Function(this.props.postData.social_script[3])}/>
                  <MenuItem primaryText="分享到微信" onClick={new Function(this.props.postData.social_script[4])}/>
                </IconMenu>
              </div>
            </div>
          </div>
          </MuiThemeProvider>

          {/* <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.next_prev)}}/> */}
          <div ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.commentDetail)}}/>

          <div className='commentEditPanel' ref={(nodeElement) => {nodeElement.appendChild(this.props.postData.comment)}}/>
        </div>
      </div>
    )
  }
}

export default Post;
