import { TOGGLE_LEFTNAV_OPEN, TOGGLE_LEFTNAV_DOCK, SET_LEFTNAV_OPEN, SET_LEFTNAV_RESPONSIVE } from '../actions/types';

const initialState = {
	docked: false,
	responsive: true,
	open: false,
	searching: false,
}

const openLeftNav = (state = initialState, action) => {
  switch (action.type) {
    
        case 'TOGGLE_LEFTNAV_OPEN':
        return [
          ...state,
          {
            open: !state.open
          }
        ]
        case 'TOGGLE_LEFTNAV_DOCK':
        return [
          ...state,
          {
            docked: !state.docked
          }
        ]
        case 'SET_LEFTNAV_OPEN':
        return [
          ...state,
          {
            open: action.open
          }
        ]    
        case 'SET_LEFTNAV_RESPONSIVE':
        return [
          ...state,
          {
            responsive: action.responsive
          }
        ]
    
        default:
        return state;
      }
    }

export default openLeftNav