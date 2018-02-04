import { createSelector } from 'reselect';
import { ADD_NEW } from '../actions/TodoActions';

//import { getTodoItems } from './selectors/todoSelector';


//export const getTodoItems = (state) => todoSelector.getTodoItems(state);

//map the function here to return the part of state that we want

//TODO this our problem area 
const getTodoItemsFromState = (state) => state.todos.todoList;
const getEntireTodoFromState = (state) => state.todos;
const getNewTodoFromState = (state) => state.todos.newTodo;

//create the selector -- don't know much about why this is how this works yet... todo find out.
export const getTodoListItems = createSelector(
  [getTodoItemsFromState],
  (todoList) => {
    console.log("Called Selector 'getTodoListItems' ", ...todoList);
    return  todoList
  }
);

export const getEntireTodo = createSelector(
  [getEntireTodoFromState],
  (entireTodo) => entireTodo
);

export const getNewTodo = createSelector(
  [getNewTodoFromState],
  (newTodo) => {
    console.log("Called getNewTodo Selector");
    return newTodo;
  }
);
