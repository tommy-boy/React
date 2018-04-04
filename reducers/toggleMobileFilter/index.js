
const openMobileMenu = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_FILTER':
      return !state
    default: return state
  }
}

export default openMobileMenu