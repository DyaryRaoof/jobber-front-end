import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './users/users';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  usersReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
