
const level = (state = 0, action) => {
  switch (action.type) {
    case 'SET_LOCATION_FILTER_LEVEL':
		return action.level || 0
    default: return state
  }
}

export default level