const init = {
  widgetBeingDragged: {}
}

const ui = (state = {mobile: false, isFullWidth: true, isScroll: false, isOpen: true}, action) => {
    const {type} = action
    switch (type) {
      case 'TOGGLE_LOCATION_FILTER':
        const {mobile} = action;
        return {
          ...state,
          mobile
        }
      case 'TOGGLE_NAV_BAR':      
        return {
          ...state,
          isFullWidth: !state.isFullWidth
        }
      case 'ON_SCROLL_TOP':      
        return {
          ...state,
          isScroll: true
        }
        case 'ON_SCROLL_RESET':      
        return {
          ...state,
          isScroll: false
        }
        case 'IS_LEFTNAV_OPEN':            
        return {
          ...state,
          isOpen: !state.isOpen
        }
      default: return state
    }
  }
  
  export default ui