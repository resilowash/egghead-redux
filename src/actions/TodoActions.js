//import { dispatch } from 'redux';

//redux action-creator for todo
const ADD_NEW = 'ADD_NEW';
//globalID for todo
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

/*
export const f = ( id, text ) => {
  return dispatch(addNewTodo(id, text));
}

*/
