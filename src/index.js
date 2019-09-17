import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));

registerServiceWorker();