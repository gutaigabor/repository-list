import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import './index.css';
import App from './App';
import reposReducer from "./store/reducers/repos";
import { watchRepos } from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reposReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchRepos);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
