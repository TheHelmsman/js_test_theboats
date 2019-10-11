import { UPDATE_USER } from '../constants/action-types'

const initialState = {
	user: '',
	rememberMe: false,
	showLogin: true,
	showRecover: false,
}

export function loginReducer(state = initialState, action) {
	if (action.type === UPDATE_USER) {
		console.log('store, update user, email: ' + action.payload.email)
		return Object.assign({}, state, {
			email: action.payload.email,
		})
	}
	return state
}
