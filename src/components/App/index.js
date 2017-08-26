import React, { Component } from 'react';
import Header from '../Header';
import ArticleList from '../ArticleList';
import './App.css';
import bgImg from '../../asset/img/bg.jpg'

class App extends Component {

  render() {
    return (
      <div className="App">
        <img className='banner' src={bgImg} />
        <Header />
        <div className='mainContent'>
          <ArticleList indexData={this.props.indexData} />
        </div>
      </div>
    );
  }
}

export default App;
