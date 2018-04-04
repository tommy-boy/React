
// import { SAVE_WIDGET_CONFIG } from '../types'
// wtf, why is above returning undefined?

export default (index) => dispatch => {
    return dispatch({ type: 'SET_PAGE_INDEX', index: index })
}