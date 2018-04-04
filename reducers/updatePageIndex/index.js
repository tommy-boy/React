
const pageIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_PAGE_INDEX':
		return action.index || 0
    default: return state
  }
}

export default pageIndex