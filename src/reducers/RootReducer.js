import { combineReducers } from 'redux';

import TodoReducer from './TodoReducer';

const RootReducer = combineReducers({
  todos: TodoReducer
});

export default RootReducer;
