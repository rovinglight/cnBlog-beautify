import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import indexFetcher from './module/indexFetcher'

import './index.css';

let data = {};
let page = 'index';
let url = window.location;
url = url.href.split('/');
if (url.indexOf('p') === -1) {
  page = 'index'
  data = indexFetcher.fetchIndex()
} else {
  page = 'post';
  console.log('post page')
}

ReactDOM.render(<App page={page} data={data} />, document.body);
