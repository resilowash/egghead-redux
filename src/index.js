import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import TodoComponent from './components/TodoComponent';

import TodoContainer from './containers/TodoContainer';
import RootReducer from './reducers/RootReducer';


console.log("In Index.js");

//Note that the TodoContainer is the tag we call here.  - Why?

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>
  , document.querySelector('.container'));


//old setup from Stephen Grider's course
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <TodoContainer />
  </Provider>
  , document.querySelector('.container'));
*/
