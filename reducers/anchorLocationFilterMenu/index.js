
const anchorLocationFilterMenu = (state = {}, action) => {
  switch (action.type) {
    case 'ANCHOR_LOCATION_FILTER':
      console.log("reduce anchor", action.anchor, Object.assign({}, state, {anchorLocationFilterMenu: action.anchor}))
      return Object.assign({}, state, action.anchor);
    default: return state
  }
}

export default anchorLocationFilterMenu