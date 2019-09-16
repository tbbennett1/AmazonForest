import { combineReducers } from 'redux';
import session from './session_reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;