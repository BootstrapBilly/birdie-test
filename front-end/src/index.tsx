import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//external
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"

//reducers
import apiReq from "./Store/Reducers/api_request_reducer"

const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  request: apiReq

})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

