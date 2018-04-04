
import actionTypes from '../types'
const { SAVE_USER_AGENT } = actionTypes

export default (userAgent) => dispatch => {
    return dispatch({ type: SAVE_USER_AGENT, userAgent })
}