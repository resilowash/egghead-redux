const defaultState ={
  newTodo: {
    id: null,
    text: '',
    completed: false
  },
  todoList: []

}

export default function(state = null, action) {
  console.log('ACTION: ', action);
  switch(action.type){

  }
}
