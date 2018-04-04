const initialState = {
	docked: false,
	responsive: true,
	open: false,
	searching: false,
}

const openRightNav = (state = initialState, action) => {
  switch (action.type) {
    
        case 'RIGHTNAV_TOGGLE_DRAWER_OPEN':
        return {
          open: !state.open
        };
    
        case 'RIGHTNAV_TOGGLE_DRAWER_DOCK':
        return {
          docked: !state.docked
        };
    
        case 'RIGHTNAV_SET_DRAWER_OPEN':
        return {
          open: action.open
        };
    
        case 'RIGHTNAV_SET_RESPONSIVE':
        return {
          responsive: action.responsive
        };
    
        default:
        return state;
      }
    }

export default openRightNav