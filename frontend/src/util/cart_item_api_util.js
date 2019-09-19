import axios from 'axios';

export const fetchCartItems = () => {
	return axios.get("/api/cartitems");
};

export const fetchCartItem = (id) => {
	return axios.get(`/api/cartitems/${id}`);
};

export const createCartItem = (data) => {
	return axios.post('/api/cartitems', data);
}

export const removeCartItem = (id) => {
	return axios.delete(`/api/cartitems/${id}`);
}