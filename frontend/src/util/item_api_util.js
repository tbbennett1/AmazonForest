import axios from 'axios';

export const fetchItems = () => {
	return axios.get('/api/items');
};

export const fetchItem = (id) => {
	return axios.get(`/api/items/${id}`);
};

export const createItem = (data) => {
	return axios.post("/api/items", data);
};

// export const updateItem 

export const removeItem = (id) => {
	return axios.delete(`/api/items/${id}`);
};

