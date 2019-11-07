import { connect } from 'react-redux';

import {fetchItem} from '../../actions/item_actions';
import {fetchReviews, createReview} from '../../actions/review_actions';

import CommentSection from './comment_section';

const mapStateToProps = (state, ownProps) => {
  let reviews;

  if(state.entities.reviews.data) {
    reviews = state.entities.reviews.data;
  }

  return {
    item: ownProps.item,
    reviews: reviews,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);