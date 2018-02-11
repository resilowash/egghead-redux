//import { dispatch } from 'redux';

//redux action-creator for todo
export const ADD_NEW = 'ADD_NEW';
export const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
export const FILTER_TODOS = 'FILTER_TODOS';
export const TOGGLE_TODOS = 'TOGGLE_TODOS';

//filter types
export const COMPLETE = 'COMPLETE';
export const INCOMPLETE = 'INCOMPLETE';

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
}

//it might be better to do this in the selector?
const sortTodos = (filterType, todos) => {
  switch(filterType) {
    case INCOMPLETE:
      todos = todos.filter(todo => todo.completed === false);
    case COMPLETE:
      todos = todos.filter(todo => todo.completed === true);

    filterTodos(todos);
  }
}

export const filterTodos = (filteredTodos) => {
  console.log('ACTION: ', FILTER_TODOS );
  return {
    type: FILTER_TODOS,
    payload: filteredTodos
  };
}

export const toggleFilter = (currentFilter) => {
  let newFilter = '';
  if(currentFilter === COMPLETE) {
    newFilter = INCOMPLETE;
  }
  else {
    newFilter = COMPLETE;
  }

  return {
    type: TOGGLE_TODOS,
    payload: newFilter
  };
}

/*
export const f = ( id, text ) => {
  return dispatch(addNewTodo(id, text));
}

*/
