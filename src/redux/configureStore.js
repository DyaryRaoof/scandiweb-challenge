import logger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import uiReducer from './ui/ui';
import cartReducer from './cart/cart';

const reducers = combineReducers({
    uiReducer,
    cartReducer,
})
const store = createStore(reducers, applyMiddleware(logger));

export default store;


