import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { version } = require('../package.json');

window.version = `${version}-${process.env.REACT_APP_BUILD_DATE}`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
