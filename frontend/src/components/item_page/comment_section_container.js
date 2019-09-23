import { connect } from 'react-redux';

import {fetchItem} from '../../actions/item_actions';
import {fetchReviews, createReview, deleteReview} from '../../actions/review_actions';

import CommentSection from './comment_section';

const mapStateToProps = (state, ownProps) => {
  let reviews;
  let itemReviews;

  if(state.entities.reviews.data) {
    reviews = state.entities.reviews.data;
  }
  // reviews is coming out as empty
  return {
    item: ownProps.item,
    reviews: reviews,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id)),
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: (itemId, review) => dispatch(createReview(itemId, review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);