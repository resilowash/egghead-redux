//redux action-creator for todo
const ADD_NEW = 'ADD_NEW';

export const addNewTodo = (id, text) => {
    let todo = {
      id,
      text,
      completed: false
    }
    return {
      type: ADD_NEW,
      payload: todo
    }

}
