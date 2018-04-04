
// import { SAVE_WIDGET_CONFIG } from '../types'
// wtf, why is above returning undefined?

export default (guid) => dispatch => {
    return dispatch({ type: 'SAVE_VIEWING_GUID', guid: guid })
}