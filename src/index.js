import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import indexFetcher from './module/indexFetcher'

import './index.css';

const indexData = indexFetcher.fetch()

ReactDOM.render(<App indexData={indexData} />, document.body);
