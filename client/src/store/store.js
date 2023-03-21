import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tickersReducer from './reducer';

const store = createStore(tickersReducer, applyMiddleware(thunk));

export default store;
