import React from "react";
import { connect } from 'react-redux';

import ItemIndex from './item_index';

const mapStateToProps = (state) => {
	return {
		items: state.entities.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetch: 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);