// import React from "react";
import { connect } from 'react-redux';
import { fetchItems, fetchItem, removeItem } from "../../actions/item_actions";

import ItemIndex from './item_index';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.userId && state.entities.items.data){
    let usersItems = [];
    usersItems[0] = state.entities.items.data.filter(item => item.sellerId === ownProps.userId);
    return{
      items: usersItems
    }
  }
  
	return {
		items: Object.keys((state.entities.items)).map(id => state.entities.items[id])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchItem: (id) => dispatch(fetchItem(id)),
		removeItem: (id) => dispatch(removeItem(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);