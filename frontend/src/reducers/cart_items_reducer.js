import {
	RECEIVE_CART_ITEMS,
	RECEIVE_CART_ITEM,
	REMOVE_CART_ITEM
} from "../actions/cart_item_actions";

const cartItemsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_CART_ITEMS:
			let nextState = Object.assign({}, state);
			action.cartItems.data.forEach((item) => {
				nextState[item._id] = item
			});
			return nextState;
		case RECEIVE_CART_ITEM:
			return Object.assign({}, state, { [action.cartItem._id]: action.cartItem });
		case REMOVE_CART_ITEM:
			let newState = Object.assign({}, state);
			delete newState[action.cartItemId];
			return newState;
		default:
			return state;
	}
}

export default cartItemsReducer;