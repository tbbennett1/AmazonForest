import axios from 'axios';

export const fetchReviews = () => {
	return axios.get('/api/reviews');
};

export const fetchReview = (id) => {
	return axios.get(`/api/reviews/${id}`);
};

export const createReview = (data) => {
	return axios.post("/api/reviews/", data);
};

// export const updateItem 

export const deleteReview = (id) => {
	return axios.delete(`/api/reviews/${id}`);
};
