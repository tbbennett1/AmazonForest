import React from "react";
import { Link } from "react-router-dom";

import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {

	componentDidMount() {
		this.props.fetchCartItems();
	}

	render() {
		const { cartItems } = this.props;

		const myCartItems = cartItems.map((cartItem) => {
			return < CartIndexItem key={cartItem.id} cartItem={cartItem} />
		});

		return (
			<div>
				<p>Saved for later - { myCartItems.length } items</p>
				{ myCartItems }
			</div>
		)
	}
}

export default CartIndex;