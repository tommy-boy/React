const currentPage = (state = "/", action) => {

    switch (action.type) {
      case 'SAVE_CURRENT_PAGE':
        return action.currentPage
      default: return state
    }
  }
  
  export default currentPage