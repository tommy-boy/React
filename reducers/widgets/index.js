import mock from '@/mock'
import _ from 'lodash'

const widgets = (state = mock, action) => {
    switch (action.type) {
      case 'DRAG_WIDGET':
        const { draggedId, draggedName, draggedW, currentPage, hoveredId, hoveredName, hoveredW } = action
        return {
          ...state,
          [currentPage]: state[currentPage].map((item, i) => {
            if (draggedW === hoveredW) {
              if (i === draggedId) {
                return state[currentPage][hoveredId]
              } else if (i === hoveredId) {
                return state[currentPage][draggedId]
              } else {
                return item
              }
            } else {
              return item
            } 
          })
        }
      default: return state
    }
  }
  
  export default widgets