import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import TodoComponent from './components/TodoComponent';

import TodoContainer from './containers/TodoContainer';
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

console.log("In Index.js");

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <TodoContainer />
  </Provider>
  , document.querySelector('.container'));
