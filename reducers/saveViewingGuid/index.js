
const viewingGuid = (state = 1, action) => {
  switch (action.type) {
    case 'SAVE_VIEWING_GUID':
		return action.guid || 1
    default: return state
  }
}

export default viewingGuid