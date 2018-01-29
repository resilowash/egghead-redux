import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { addNewTodo } from '../actions/TodoAction';

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
      todoItems: getTodoItems(state),
    }
  },
  (dispatch) => {
    return {
       onFilter: (filter) => {

       },
     }
  }
)
