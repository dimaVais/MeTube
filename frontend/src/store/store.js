import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { songReducer } from './reducers/songReducer.js';
import { favReducer } from './reducers/favReducer.js';

const rootReducer = combineReducers({
    songReducer,
    favReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))