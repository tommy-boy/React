
import actionTypes from '../types'

const { CHANGE_FILTER } = actionTypes

export default (filtername, filtervalue) => dispatch => {
    return dispatch({ type: CHANGE_FILTER, filtername, filtervalue })
}