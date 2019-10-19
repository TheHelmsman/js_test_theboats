import {
	UPDATE_USER,
	REMEMBER_USER,
	SWITCH_FORM,
} from '../constants/action-types'

const initialState = {
	email: '',
	rememberMe: true,
	showLogin: true,
	showRecover: false,
}

export function loginReducer(state = initialState, action) {
	console.log('loginReducer, action: ' + action.type + ' payload: ')
	console.log(action.payload)
	switch (action.type) {
		case UPDATE_USER:
			return { ...state, email: action.payload.email }
		case REMEMBER_USER:
			return { ...state, rememberMe: action.payload.rememberMe }
		case SWITCH_FORM:
			return {
				...state,
				showLogin: action.payload.showLogin,
				showRecover: action.payload.showRecover,
			}
		default:
			return state
	}
}
