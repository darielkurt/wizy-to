import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const middlewares = [thunk];

if (process.env.NODE_ENW ===  'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;