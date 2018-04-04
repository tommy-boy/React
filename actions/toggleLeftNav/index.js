import actionTypes from '../types'

const { TOGGLE_LEFTNAV_OPEN } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'TOGGLE_LEFTNAV_OPEN' })
}
