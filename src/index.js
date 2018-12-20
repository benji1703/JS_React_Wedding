import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Countdown from './App';

ReactDOM.render(<Countdown />, document.getElementById('root'));
serviceWorker.unregister();
