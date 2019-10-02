// src/js/store/index.js
import { createStore } from 'redux'
import { rootReducer } from '../reducers/index'

export const store = createStore(rootReducer)
