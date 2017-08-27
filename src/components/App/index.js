import React, { Component } from 'react';
import Header from '../Header';
import ArticleList from '../ArticleList';
import Post from '../Post'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className='mainContent'>
          {
            this.props.page === 'post' ?
            (<Post />) :
            (<ArticleList indexData={this.props.data} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
