import React, { Component } from 'react';
import Header from '../Header'
import './App.css';

class App extends Component {

  constructor (props) {
    super (props)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='mainContent'>

        </div>
      </div>
    );
  }
}

export default App;
