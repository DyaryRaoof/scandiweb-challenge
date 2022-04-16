import logger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import uiReducer from './ui/ui';

const reducers = combineReducers({
    uiReducer,
})
const store = createStore(reducers, applyMiddleware(logger));

export default store;


