
import actionTypes from '../types'
const { MOUSE_OUT_OF_TOOLTIP } = actionTypes

export default (tooltip) => dispatch => {
    return dispatch({ type: actionTypes.MOUSE_OUT_OF_TOOLTIP, tooltip })
}


  