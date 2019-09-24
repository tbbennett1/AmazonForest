import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CartIndexItem extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.removeCartItem(this.props.cartItem._id);
	}

	render() {
		const { item } = this.props;
		return (
			<div className="cartitem">
				<Link to={`/items/${item._id}`}><img src={item.image_url} alt="" /></Link>
				<div className="cartitem-info">
					<Link to={`/items/${item._id}`}>
						<div className="cartitem-title">{item.title}</div>
					</Link>
					<Link to="">
						<div className="cartitem-delete" onClick={this.handleClick} >Delete</div>
					</Link>
				</div>
				<div className="cartitem-price">${item.price}</div>
			</div>
		)
	}

	
}

export default withRouter(CartIndexItem);