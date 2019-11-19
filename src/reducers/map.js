import { UPDATE_POS, UPDATE_VIEWPORT } from '../actions'
import i18n from '../i18n'

const initialState = {
	center: [0, 0],
	lat: 0,
	lng: 0,
	zoom: 13,
	markers: [
		{
			key: 'marker1',
			position: [0, 0],
			children: i18n.t('marker'),
		},
	],
}

export function mapReducer(state = initialState, action) {
	if (action.type === UPDATE_POS) {
		return Object.assign({}, state, {
			lat: action.payload.lat,
			lng: action.payload.lng,
			markers: action.payload.markers,
		})
	}
	if (action.type === UPDATE_VIEWPORT) {
		return Object.assign({}, state, {
			lat: action.payload.lat,
			lng: action.payload.lng,
			markers: action.payload.markers,
		})
	}
	return state
}
