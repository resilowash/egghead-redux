import { ADD_NEW } from "../actions/TodoAction.js";

const defaultState ={
  newTodo: {
    id: null,
    text: '',
    completed: false
  },
  todoList: []

}

export default function(state = defaultState, action={type: 'default'}) {
  console.log('ACTION: ', action);
  switch(action.type){
    case ADD_NEW:
      return {
        ...defaultState,
        newTodo: {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        },
        todoList: [...data]
      }
    default: return defaultState;

  }
}
