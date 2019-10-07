// src/js/reducers/index.js
import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { mapReducer } from './map'
import { reducer as forms } from 'redux-form'

export const rootReducer = combineReducers({
	login: loginReducer,
	map: mapReducer,
	form: forms,
})
