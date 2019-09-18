import { connect } from 'react-redux';
import { fetchItem } from "../../actions/item_actions";

import ItemShow from './item_show';

const mapStateToProps = (state, ownProps) => {
  if(!state.items[ownProps.match.params.id]){
    debugger
    return {};
  }
  debugger
  return {
    item: state.items[ownProps.match.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);