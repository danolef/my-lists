import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ListProvider } from './context/listState'
import { ListIdProvider } from './context/listIdState'
import { SiteProvider } from './context/siteState'
import { ListNameProvider } from './context/listNameState'
import './index.css';
import App from './App';


ReactDOM.render(
  <ListNameProvider>
  <SiteProvider>
  <ListProvider>
  <ListIdProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ListIdProvider>
  </ListProvider>
  </SiteProvider>
  </ListNameProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
