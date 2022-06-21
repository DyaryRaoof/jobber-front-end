import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './users/users';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  usersReducer,
  categoriesReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
