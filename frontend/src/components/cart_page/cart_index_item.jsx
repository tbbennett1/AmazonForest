import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ cartItem, item, removeCartItem }) => {
	return (
		<div className="cartitem">
			<Link to={`/items/${item._id}`}><img src={item.image_url} alt="" /></Link>
			<div className="cartitem-info">
				<Link to={`/items/${item._id}`}>
					<div className="cartitem-title">{item.title}</div>
				</Link>
				<Link to=""><div className="cartitem-delete">Delete</div></Link>
			</div>
			<div className="cartitem-price">${item.price}.00</div>
		</div>
	)
}

export default CartIndexItem;