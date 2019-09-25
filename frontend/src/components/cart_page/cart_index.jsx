import React from "react";


import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {

	componentDidMount() {
		const userId = this.props.currentUser.id;
		this.props.fetchCartItems(userId);
    window.scrollTo(0, 0);
	}

	render() {
		const { cartItems, items, removeCartItem } = this.props;
		let totalPrice = 0;
		let finalPrice;
		const myCartItems = cartItems.map((cartItem) => {
			const itemId = cartItem.itemId;
			let itemSelector;
			if (items) {
				itemSelector = items.filter(item => item._id === itemId)[0]
			
			
			if (itemSelector) {
				
				totalPrice += itemSelector.price;
				finalPrice = Math.round(totalPrice * 100) / 100;
			}
				
			return <CartIndexItem key={cartItem._id} 
								cartItem={cartItem} 
								item={itemSelector}
								removeCartItem={removeCartItem} />
			}
		});

		return (
			<div className="cart-canvas">
				
				<div className="cart-frame">
					<div className="shopping">Shopping Cart</div>
					<div className="cartitems">{ myCartItems }</div>
				</div>

				<div className="checkout">
					<div className="cart-sub">
						<p className="subtotal">Subtotal - { myCartItems.length } items:  </p>
						<p className="subtotal-price">${ finalPrice }</p>
					</div>
					
					<button type="submit" value="">Proceed to checkout</button>
				</div>
			</div>
		)
	}
}

export default CartIndex;