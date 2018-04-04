import { combineReducers } from 'redux'
import userAgent from './userAgent'
import widgets from './widgets'
import currentPage from './currentPage'
import level from './updateLocationFilterLevel'
import pageIndex from './updatePageIndex'
import viewingGuid from './saveViewingGuid'
import tempViewingGuid from './saveTempGuidFilterSelection'

const rootReducer = combineReducers({
    level, viewingGuid, tempViewingGuid, 
    userAgent, currentPage, pageIndex
})

export default rootReducer