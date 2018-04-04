
const openLocationFilter = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOCATION_FILTER':
      return !state
    default: return state
  }
}

export default openLocationFilter