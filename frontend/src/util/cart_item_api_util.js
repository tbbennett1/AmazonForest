import axios from 'axios';

export const fetchCartItems = (userId) => {
	return axios.get("/api/cartitems", { userId: userId} );
};

export const fetchCartItem = (id) => {
	return axios.get(`/api/cartitems/${id}`);
};

export const createCartItem = (data) => {
	// debugger;
	return axios.post('/api/cartitems', data);
}

export const removeCartItem = (id) => {
	return axios.delete(`/api/cartitems/${id}`);
}