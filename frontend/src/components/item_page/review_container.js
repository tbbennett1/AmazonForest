import { connect } from 'react-redux';

import {fetchUsers} from '../../actions/user_actions';

import Review from './review';

const mapStateToProps = (state, ownProps) => {
    // let user = state.users[ownProps.review.userId];
    let review = ownProps.review;

    return{
        review: review,
        // user: user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);