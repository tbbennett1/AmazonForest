import { combineReducers } from 'redux';
import session from './session_reducer';
import items from './items_reducer';
import carts from './carts_reducer';
import errors from './errors_reducer'

const RootReducer = combineReducers({
  session,
  items,
  users,
  errors
});

export default RootReducer;