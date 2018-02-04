import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { addNewTodo } from '../actions/TodoActions';
import { getTodoListItems, getEntireTodo } from '../selectors/TodoSelectors'

//the dispatch function argument in the connect is commonly referred to as the mapDispatchToProps
const TodoContainer = connect(
  (state) => {
    return {
      todoItems: state
    /*  todoItems: getTodoListItems(state),
      todo: getEntireTodo(state)

      */
    }
  },
  (dispatch) => {
    return {
       onFilter: (filter) => {

       },
       addTodo: (id, text) => {
         dispatch(addNewTodo(id, text));
       }
     }
  }
)(TodoComponent);

//I forgot to do this previously and also forgot to call the function via the (TodoComponent) function call. Connect returns a function that I'm calling immediately after I execute the connect. 
export default TodoContainer;
