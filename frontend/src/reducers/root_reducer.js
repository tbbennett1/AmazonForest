import { combineReducers } from 'redux';
import session from './session_reducer';
import items from './items_reducer';
import errors from './errors_reducer'
import reviews from './reviews_reducer';

const RootReducer = combineReducers({
  session,
  items,
  errors
});

export default RootReducer;