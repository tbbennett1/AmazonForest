import axios from 'axios';

export const fetchCart = (userId) => {
	return axios.get(`/${userId}/cart`);
	// return axios.get(`/api/carts/${id}`);
};

export const createCart = (userId, data) => {
	return axios.post(`/${userId}/cart`, data);
	// return axios.post('/api/carts', data);
}
