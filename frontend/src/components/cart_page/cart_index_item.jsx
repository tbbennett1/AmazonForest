import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ cartItem, item, removeCartItem }) => {
	return (
		<div>
			<p>{item.title}</p>
		</div>
	)
}

export default CartIndexItem;