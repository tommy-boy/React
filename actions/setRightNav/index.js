import actionTypes from '../types'

const { SET_RIGHTNAV_OPEN } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'SET_RIGHTNAV_OPEN' })
}