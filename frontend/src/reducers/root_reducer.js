import { combineReducers } from 'redux';
import session from './session_reducer';
import itemsReducer from './items_reducer';

const RootReducer = combineReducers({
  session,
  items: itemsReducer
});

export default RootReducer;