import axios from 'axios';

export const fetchReviews = () => {
	return axios.get('/api/reviews');
};

export const fetchReview = (itemId, id) => {
	return axios.get(`/api/reviews/${id}`);
};

export const createReview = (itemId, data) => {
	return axios.post(`/api/items/${itemId}/reviews/`, data);
};

// export const updateItem 

export const deleteReview = (itemId, review) => {
	return axios.delete(`/api/items/${itemId}/reviews/${review.id}`);
};
