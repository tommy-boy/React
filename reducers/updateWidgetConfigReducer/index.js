
const updateWidgetConfigReducer = (state = false, action) => {
    switch (action.type) {
      case 'UPDATE_WIDGET_CONFIG':
        return !state
      default: return state
    }
  }
  
  export default updateWidgetConfigReducer