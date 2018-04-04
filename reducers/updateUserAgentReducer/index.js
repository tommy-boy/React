
const updateUserAgentReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USER_AGENT':
        const { userAgent } = action
        return userAgent
    default: return state
  }
}

export default updateUserAgentReducer