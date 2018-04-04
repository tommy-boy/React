import actionTypes from '../types'

const { ON_SCROLL_RESET } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'ON_SCROLL_RESET' })
}