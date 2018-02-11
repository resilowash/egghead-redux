import { ADD_NEW, UPDATE_NEW_TODO_TEXT, FILTER_TODOS, TOGGLE_TODOS } from "../actions/TodoActions.js";

const defaultState ={
  newTodo: {
    id: null,
    text: null,
    completed: false
  },
  todoList: [],
  filter: null,
  filteredTodos: []

}

export default function(state = defaultState, action={type: 'default'}) {
  //console.log('REDUCER ACTION: ', action);
  switch(action.type){

    case ADD_NEW:
      return {
        newTodo: {},
        todoList: [...state.todoList, action.payload]
      };
    case UPDATE_NEW_TODO_TEXT:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          text: action.payload
        }
      };
      case FILTER_TODOS:
        return {
          ...state,
          filteredTodos: action.payload
        };
      case TOGGLE_TODOS:
        return {
          ...state,
          filter: action.payload
        };
    default:
      return state;

  }
  console.log("STATE FROM REDUCER: ", state);
  return state;
}
