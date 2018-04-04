import actionTypes from '../types'

const { IS_LEFTNAV_OPEN } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'IS_LEFTNAV_OPEN' })
}