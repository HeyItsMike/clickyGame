import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//This is the index.js section where I would code in the functions to tell the game how to react when icons are clicked
//After importing every component to structure the app this will essentially act as the "brain" of my app