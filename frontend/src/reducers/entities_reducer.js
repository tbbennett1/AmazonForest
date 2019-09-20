 
import { combineReducers } from 'redux';
import users from './users_reducer';
import cartItems from './cart_items_reducer';
import reviews from './reviews_reducer';
import items from './items_reducer';

const EntitiesReducer = combineReducers({
	// users,
	reviews,
	cartItems,
  	items
});

export default EntitiesReducer;