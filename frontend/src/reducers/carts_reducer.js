import { RECEIVE_CART } from "../actions/cart_actions";

const cartsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_CART:
			return Object.assign({}, state, {[action.cart._id]: action.cart});
		default:
			return state;
	}
}
entities.itemCarts
[] 
itemsId 
userId = 
// itemCart


export default cartsReducer;