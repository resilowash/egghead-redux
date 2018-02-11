//import { dispatch } from 'redux';

//redux action-creator for todo
export const ADD_NEW = 'ADD_NEW';
export const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';

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
    }
    console.log(todo);
    return {
      type: ADD_NEW,
      payload: todo
    }

}

export const updateNewTodoText = (text) => {
  console.log('ACTION: ', text);
  return {
    type: UPDATE_NEW_TODO_TEXT,
    payload: text
  }
}

/*
export const f = ( id, text ) => {
  return dispatch(addNewTodo(id, text));
}

*/
