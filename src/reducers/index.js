// src/js/reducers/index.js
import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { mapReducer } from './map'

export const rootReducer = combineReducers({
	login: loginReducer,
	map: mapReducer,
})
