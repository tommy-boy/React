
const userAgent = (state = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36', action) => {
  switch (action.type) {
    case 'SAVE_USER_AGENT':
      return action.userAgent
    default: return state
  }
}

export default userAgent