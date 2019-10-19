// src/js/actions/index.js
export function updatePosition(payload) {
	return { type: 'UPDATE_POS', payload }
}
export function updateUser(payload) {
	return { type: 'UPDATE_USER', payload }
}
export function remeberUser(payload) {
	return { type: 'REMEMBER_USER', payload }
}
export function switchForm(payload) {
	return { type: 'SWITCH_FORM', payload }
}
