
import actionTypes from '../types'

const { TOGGLE_NAV_BAR } = actionTypes

export default () => dispatch => {
    return dispatch({ type: 'TOGGLE_NAV_BAR' })
}