import { createSelector } from 'reselect';
import { ADD_NEW, INCOMPLETE, COMPLETE, ALL } from '../actions/TodoActions';

//map the function here to return the part of state that we want
const getTodoItemsFromState = (state) => state.todos.todoList;
const getEntireTodoFromState = (state) => state.todos;
const getNewTodoFromState = (state) => state.todos.newTodo;
const getTodoTextFromState = (state) => state.todos.newTodo.text;
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

export const getVisibleTodos = createSelector(
  [getEntireTodoFromState],
  (todos) => {
    let filter = todos.filter;
    console.log("Called getFilteredTodos Selector FILTER: ", filter);
    console.log("Todos in the get filtered Todo before filter: ", todos);
    switch(filter) {
      case INCOMPLETE:
        return todos.todoList.filter(todo => !todo.completed);
      case COMPLETE:
        return todos.todoList.filter(todo => todo.completed);
      default:
        return todos.todoList;

    }
  }
);

// (filter) => filter is shorthand function to just return the filter.
export const getFilter = createSelector(
  [getFilterFromState],
  (filter) => filter
);
