import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dataFetcher from './module/dataFetcher'

import './index.css';

let data = {};
let page = 'index';
let url = window.location;
url = url.href.split('/');
if (url.indexOf('p') === -1) {
  page = 'index'
  data = dataFetcher.fetchIndex()
} else {
  page = 'post';
  data = dataFetcher.fetchPost()
  console.log(data.post)
}

ReactDOM.render(<App page={page} data={data} />, document.body);
