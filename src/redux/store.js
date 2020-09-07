import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const middlewares = [thunk];

if (process.env.NODE_ENW ===  'development') {
    middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
//   ));

const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(...middlewares)
  ))

export default store;