import { connect } from 'react-redux';

import {fetchUsers} from '../../actions/user_actions';
import {fetchReview, updateReview} from '../../actions/review_actions';

import Review from './review';

const mapStateToProps = (state, ownProps) => {
    // let user = state.users[ownProps.review.userId];
    let review = ownProps.review;

    return{
        review: review,
        currentUser: state.session.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (id) => dispatch(fetchReview(id)),
        updateReview: (review, id) => dispatch(updateReview(review, id)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);