 
import { combineReducers } from 'redux';
import users from './users_reducer';
import cartItems from './cart_items_reducer';

const EntitiesReducer = combineReducers({
	users,
	cartItems
});

export default EntitiesReducer;