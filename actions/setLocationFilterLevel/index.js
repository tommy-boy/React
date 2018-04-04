
// import { SAVE_WIDGET_CONFIG } from '../types'
// wtf, why is above returning undefined?

export default (level) => dispatch => {
    return dispatch({ type: 'SET_LOCATION_FILTER_LEVEL', level: level })
}