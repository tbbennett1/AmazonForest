import { connect } from 'react-redux';

import {fetchItem} from '../../actions/item_actions';
import {fetchReviews, createReview, deleteReview} from '../../actions/review_actions';

import CommentSection from './comment_section';

const mapStateToProps = (state, ownProps) => {
  let reviews = Object.keys((state.entities.reviews))
  reviews = reviews.filter(review => review.itemId === ownProps.item.match.params.id)

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
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);