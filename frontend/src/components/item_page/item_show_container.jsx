import { connect } from 'react-redux';
import { fetchItem } from "../../actions/item_actions";

import ItemShow from './item_show';

const mapStateToProps = (state, ownProps) => {
  let reviews = Object.values(state.entities.reviews)
  reviews = reviews.filter(review => review.id === ownProps.match.params.id)

  if(!state.entities.items[ownProps.match.params.id]){
    return {};
  }
  return {
    item: state.entities.items[ownProps.match.params.id],
    reviews: reviews,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);