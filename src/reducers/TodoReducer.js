import { ADD_NEW, UPDATE_NEW_TODO_TEXT, FILTER_TODOS, TOGGLE_TODO, ALL, INCOMPLETE, COMPLETE } from "../actions/TodoActions.js";

const defaultState ={
  newTodo: {
    id: null,
    text: null,
    completed: false
  },
  todoList: [],
  filter: ALL
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
          filter: action.payload
        };
      case TOGGLE_TODO:
        console.log("TOGGLE_TODO state: ", ...state); 
        console.log("Toggle TODO REDUCER ", state);
        console.log("TOGGLE TODO REDUCER action.payload: ", action.payload);
        let todos = state.todoList.map(t => {
          console.log("TODO Reducer t: ", t);
          if(t.id === action.payload){
            t = {
              ...t,
              completed: !t.completed
            }
          }
          else{
            t = t;
          }});
        console.log("TODO REDUCER, state.todoList: ", state.todoList);
        console.log("TODO Reducer todos: ", todos);
          return {
            ...state,
            todoList: todos
          }
    default:
      return state;

  }
  console.log("STATE FROM REDUCER: ", state);
  return state;
}
