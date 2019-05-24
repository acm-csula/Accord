import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var config= {
    
}

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();