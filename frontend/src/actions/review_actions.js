import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const removeReview = reviewId => {
    return {
      type: REMOVE_REVIEW,
      reviewId
    }
  }

export const fetchReviews = () => dispatch => (
	ReviewApiUtil.fetchReviews().then((reviews) => dispatch({ type: RECEIVE_ALL_REVIEWS, reviews }))
);

export const fetchReview = (id) => dispatch => (
	ReviewApiUtil.fetchReview(id).then((review) => dispatch(receiveReview(review.data)))
);

export const createReview = (data) => dispatch => (
	ReviewApiUtil.createReview(data).then((review) => dispatch({ type: RECEIVE_REVIEW, review }))
);

export const deleteReview = (id) => dispatch => (
	ReviewApiUtil.deleteReview(id).then((review) => dispatch({ type: REMOVE_REVIEW, reviewId: review.id }))
);