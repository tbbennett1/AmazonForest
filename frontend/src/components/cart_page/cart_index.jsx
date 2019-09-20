import React from "react";
import { Link } from "react-router-dom";

import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {

	componentDidMount() {
		const userId = this.props.currentUser.id
		this.props.fetchCartItems(userId);
	}

	render() {
	
		const { cartItems, items, removeCartItem } = this.props;
		const myCartItems = cartItems.map((cartItem) => {
			const itemId = cartItem.itemId;
			let itemSelector
			if (items) {itemSelector = items.filter(item => item._id === itemId)[0]}
			
			return <CartIndexItem key={cartItem._id} 
								cartItem={cartItem} 
								item={itemSelector}
								removeCartItem={removeCartItem} />
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