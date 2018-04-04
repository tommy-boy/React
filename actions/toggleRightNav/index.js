import actionTypes from '../types'

const { RIGHTNAV_TOGGLE_DRAWER_OPEN } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'RIGHTNAV_TOGGLE_DRAWER_OPEN' })
}
