import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.buildDate = process.env.REACT_APP_BUILD_DATE;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
