import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { addNewTodo, updateNewTodoText } from '../actions/TodoActions';
import { getTodoListItems, getEntireTodo, getNewTodo, getTodoText, getFilteredTodos, getFilter } from '../selectors/TodoSelectors'

//the dispatch function argument in the connect is commonly referred to as the mapDispatchToProps
const TodoContainer = connect(
  (state) => {
    return {
      todoItems: getTodoListItems(state),
      newTodo: getNewTodo(state),
      todoText: getTodoText(state),
      filteredTodos: getFilteredTodos(state),
      filter: getFilter(state)
    }
  },
  (dispatch) => {
    return {
       onFilter: (filter) => {

       },
       addTodo: (id, text) => {
         dispatch(addNewTodo(id, text));
       },
       updateNewTodoText: (text) => {
         dispatch(updateNewTodoText(text));
       }
     }
  }
)(TodoComponent);

//I forgot to do this previously and also forgot to call the function via the (TodoComponent) function call. Connect returns a function that I'm calling immediately after I execute the connect.
export default TodoContainer;
