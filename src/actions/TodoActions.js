//import { dispatch } from 'redux';

//redux action-creator for todo
export const ADD_NEW = 'ADD_NEW';
export const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
export const FILTER_TODOS = 'FILTER_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//filter types
export const COMPLETE = 'COMPLETE';
export const INCOMPLETE = 'INCOMPLETE';
export const ALL = 'ALL';

//globalID for todo simulates database return of id for web session
var gID = 1;

export const addNewTodo = (id, text) => {
  console.log(ADD_NEW);
  if(id == null || id < 1 ) {
    id = gID++;
  }
    let todo = {
      id,
      text,
      completed: false
    };
    console.log(todo);
    return {
      type: ADD_NEW,
      payload: todo
    };
}

export const updateNewTodoText = (text) => {
  console.log('ACTION: ', text);
  return {
    type: UPDATE_NEW_TODO_TEXT,
    payload: text
  };
};

export const filterTodos = (filter) => {
  console.log('ACTION: ', FILTER_TODOS );
  return {
    type: FILTER_TODOS,
    payload: filter
  };
}

export const toggleTodo = (id) => {
  console.log('Toggle TODO ID: ', id);
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
/*
export const f = ( id, text ) => {
  return dispatch(addNewTodo(id, text));
}

*/
