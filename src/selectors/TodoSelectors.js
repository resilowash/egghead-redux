import { createSelector } from 'reselect';
import { ADD_NEW } from '../actions/TodoActions';

//import { getTodoItems } from './selectors/todoSelector';


//export const getTodoItems = (state) => todoSelector.getTodoItems(state);

//map the function here to return the part of state that we want
const getTodoItemsFromState = (state) => state.todoList;
const getEntireTodoFromState = (state) => state;

//create the selector -- don't know much about why this is how this works yet... todo find out.
export const getTodoListItems = createSelector(
  [getTodoItemsFromState],
  (todoList) => {
    console.log("Called Selector");
    return  todoList
  }
);

export const getEntireTodo = createSelector(
  [getEntireTodoFromState],
  (entireTodo) => entireTodo
);
