import { createSelector } from 'reselect';
import { getTodoItems } from './selectors/todoSelector';

export const getTodoItems = (state) => todoSelector.getTodoItems(state);
