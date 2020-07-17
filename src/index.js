import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducer'
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://burger-bulider-58f60.firebaseio.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  const store = createStore(reducer)
ReactDOM.render( <Provider store={store}>
                  <App />
                 </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
