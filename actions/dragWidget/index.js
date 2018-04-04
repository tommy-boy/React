
import actionTypes from '../types'
const { DRAG_WIDGET } = actionTypes

export default (draggedId, draggedName, draggedW, currentPage, hoveredId, hoveredName, hoveredW) => dispatch => {
    return dispatch({ type: DRAG_WIDGET, draggedId, draggedName, draggedW, currentPage, hoveredId, hoveredName, hoveredW })
}