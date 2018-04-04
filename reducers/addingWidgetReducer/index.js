
const addingWidgetReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_ADDING_WIDGET':    
        return !state
    default: return state
  }
}

export default addingWidgetReducer