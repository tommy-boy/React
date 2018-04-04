
import actionTypes from '../types'
const { SAVE_CURRENT_PAGE } = actionTypes

export default (currentPage) => dispatch => {
    return dispatch({ type: SAVE_CURRENT_PAGE, currentPage })
}