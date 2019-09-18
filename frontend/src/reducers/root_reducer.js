import { combineReducers } from 'redux';
import session from './session_reducer';
import itemsReducer from './items_reducer';
import errors from './errors_reducer'

const RootReducer = combineReducers({
  session,
  items: itemsReducer,
  errors
});

export default RootReducer;