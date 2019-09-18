import * as CartApiUtil from "../util/cart_api_util";

export const RECEIVE_CART = "RECEIVE_CART";

const receiveCart = (cart) => ({
	type: RECEIVE_CART,
	cart
});

export const fetchItemCart = (id) => dispatch => (
	CartApiUtil.fetchItemCart(id).then((cart) => dispatch(receiveCart(cart)))
);

export const createItemCart = (data) => dispatch => (
	CartApiUtil.createItemCart(data).then((cart) => dispatch(receiveCart(cart)))
);
	
