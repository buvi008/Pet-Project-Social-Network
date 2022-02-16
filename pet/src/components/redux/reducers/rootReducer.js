import { combineReducers } from 'redux';
import { checkSessionReducer } from './checkSessionReducer';

export const rootReducer = combineReducers({
  checkSessionReducer,
});
