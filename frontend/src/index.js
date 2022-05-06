import { Provider } from 'react-redux';
import store from './redux/store/store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style/style.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./service/mocks/browser')
  worker.start()
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
 
