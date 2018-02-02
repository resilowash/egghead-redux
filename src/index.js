import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import TodoComponent from './components/TodoComponent';
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

console.log("In Index.js");

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <TodoComponent />
  </Provider>
  , document.querySelector('.container'));
