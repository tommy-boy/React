import actionTypes from '../types'

const { SET_LEFTNAV_OPEN } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'SET_LEFTNAV_OPEN' })
}