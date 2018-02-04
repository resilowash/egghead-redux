import { ADD_NEW } from "../actions/TodoActions.js";

const defaultState ={
  newTodo: {
    id: null,
    text: '',
    completed: false
  },
  todoList: []

}

export default function(state = defaultState, action={type: 'default'}) {
  //console.log('REDUCER ACTION: ', action);
  switch(action.type){

    case ADD_NEW:
      return {
          ...state,
          newTodo: {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          },
        todoList: [...state.todoList, action.payload]
      };
    default:
      return state;

  }
  console.log("STATE FROM REDUCER: ", state);
  return state;
}
