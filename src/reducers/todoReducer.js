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

  }
}
