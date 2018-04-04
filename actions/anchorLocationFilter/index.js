
// import { SAVE_WIDGET_CONFIG } from '../types'
// wtf, why is above returning undefined?

export default (anchor) => dispatch => {
	console.log("Anchor", anchor);
    return dispatch({ type: 'ANCHOR_LOCATION_FILTER', anchor: anchor })
}