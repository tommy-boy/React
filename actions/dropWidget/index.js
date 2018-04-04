
import actionTypes from '../types'
const { DROP_WIDGET } = actionTypes

export default (page, config) => dispatch => { // TODO: Save to localStorage
    return dispatch({ type: actionTypes.DROP_WIDGET, page, config })
}


  