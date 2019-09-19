import * as CartItemApiUtil from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = (cartItems) => ({
	type: RECEIVE_CART_ITEMS,
	cartItems
});

const receiveCartItem = (cartItem) => ({
	type: RECEIVE_CART_ITEM,
	cartItem
});

export const fetchCartItems = () => dispatch => (
	CartItemApiUtil.fetchCartItems().then((cartItems) => dispatch(receiveCartItems(cartItems)))
);

export const fetchCartItem = (id) => dispatch => (
	CartItemApiUtil.fetchCartItem(id).then((cartItem) => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = (data) => dispatch => (
	CartItemApiUtil.createCartItem(data).then((cartItem) => dispatch(receiveCartItem(cartItem)))
);

export const removeCartItem = (id) => dispatch => (
	CartItemApiUtil.removeCartItem(id).then((cartItem) => dispatch({ type: REMOVE_CART_ITEM, cartItemId: cartItem.id }))
);
	
