import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './fonts/Lekton-Regular.ttf';
import './fonts/Lekton-Bold.ttf';
import './fonts/Lekton-Italic.ttf';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

const trackingCode = 'UA-179609093-1';

ReactGA.initialize(trackingCode);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
