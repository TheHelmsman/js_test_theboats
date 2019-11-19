// src/js/actions/index.js
export const UPDATE_POS = 'UPDATE_POS'
export const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT'
export const UPDATE_USER = 'UPDATE_USER'
export const REMEMBER_USER = 'REMEMBER_USER'
export const SWITCH_FORM = 'SWITCH_FORM'

export function updatePosition(payload) {
	return { type: UPDATE_POS, payload }
}
export function updateUser(payload) {
	return { type: UPDATE_USER, payload }
}
export function remeberUser(payload) {
	return { type: REMEMBER_USER, payload }
}
export function switchForm(payload) {
	return { type: SWITCH_FORM, payload }
}
