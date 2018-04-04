
const tempSelectedGuid = (state = 1, action) => {
	console.log("action", action)
  switch (action.type) {
    case 'SAVE_TEMP_GUID_FILTER_SELECTION':
		return action.guid || 1
    default: return state
  }
}

export default tempSelectedGuid