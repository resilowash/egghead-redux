import { createSelector } from 'reselect';
import { ADD_NEW } from '../actions/TodoActions';

//map the function here to return the part of state that we want
const getTodoItemsFromState = (state) => state.todos.todoList;
const getEntireTodoFromState = (state) => state.todos;
const getNewTodoFromState = (state) => state.todos.newTodo;
const getTodoTextFromState = (state) => state.todos.newTodo.text;
const getFilteredTodosFromState = (state) => state.todos.filteredTodos;
const getFilterFromState = (state) => state.todos.filter;

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

export const getTodoText = createSelector(
  [getTodoTextFromState],
  (todoText) => {
    console.log("Called getTodoText ");
    return todoText;
  }
);

export const getFilteredTodos = createSelector(
  [getFilteredTodosFromState],
  (filteredTodos) => {
    console.log("Called getFilteredTodos Selector");
    return filteredTodos;
  }
);

// (filter) => filter is shorthand function to just return the filter.  
export const getFilter = createSelector(
  [getFilterFromState],
  (filter) => filter
);
