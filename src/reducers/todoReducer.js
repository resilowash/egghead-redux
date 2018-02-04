import { ADD_NEW } from "../actions/TodoActions.js";

const defaultState ={
  newTodo: {
    id: null,
    text: '',
    completed: false
  },
  todoList: [{id: "default", text: "Default Text"}]

}

export default function(state = defaultState, action={type: 'default'}) {
  //console.log('REDUCER ACTION: ', action);
  switch(action.type){

    case ADD_NEW:
      console.log('DEFAULT STATE FROM REDUCER: ', defaultState);
      return {
          ...defaultState,
          newTodo: {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          },
        todoList: [...defaultState.todoList, action.payload]
      };
    default:
      console.log("Default: ", defaultState);
      return defaultState;

  }
  console.log("STATE FROM REDUCER: ", state);
  return state;
}
