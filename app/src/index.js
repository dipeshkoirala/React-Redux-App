import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {Reducer} from './Reducers/'

const logger = ({ getState }) => (next) => (action) => {
  console.log("Dispatching action:", action);
  next(action);
}
let store = createStore(Reducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

