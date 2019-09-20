import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import history from "./history";
import { Router } from "react-router-dom";

const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
let store = createStore(reducer);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>  
    </Provider>
  </I18nextProvider>, 
  document.getElementById("root"));

registerServiceWorker();