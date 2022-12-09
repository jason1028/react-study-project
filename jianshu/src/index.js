import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
// import './statics/iconfont/iconfont.css';
import { GolobalIconFont } from './statics/iconfont/iconfont.js';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GolobalIconFont/>
    <App />
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
