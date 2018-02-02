import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { addNewTodo } from '../actions/TodoActions';
import { getTodoListItems, getEntireTodo } from '../selectors/TodoSelectors'

// const TodoContainter = connect(
//   (state) => {
//
//   }
// )

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewTodo }, dispatch);
}

export default connect(null, mapDispatchToProps) (TodoComponent);
*/

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
     }
  }
)
