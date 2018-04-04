import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const initStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
}

export default initStore