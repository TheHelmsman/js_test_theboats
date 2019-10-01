// src/js/reducers/index.js
import { UPDATE_POS } from '../constants/action-types'
export const initialState = {
	lat: 0,
	lng: 0,
	zoom: 13,
	markers: [],
}
export function rootReducer(state = initialState, action) {
	if (action.type === UPDATE_POS) {
		return Object.assign({}, state, {
			lat: action.payload.lat,
			lng: action.payload.lng,
			markers: action.payload.markers,
		})
	}
	return state
}
