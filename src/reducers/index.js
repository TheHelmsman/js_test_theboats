// src/js/reducers/index.js
import { UPDATE_POS } from '../constants/action-types';
const initialState = {
  lat: 0,
  lng: 0,
  zoom: 13,
  markers: []
};
function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_POS) {
    return Object.assign({}, state, {
      lat: action.payload.lat,
      lng: action.payload.lng
    });
  }
  return state;
}
export default rootReducer;
