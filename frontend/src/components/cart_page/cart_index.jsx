import React from "react";
import { Link } from "react-router-dom";

import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {

	componentDidMount() {
		this.props.fetchCartItems();
	}

	render() {
		const { cartItems } = this.props;

		const myCart = cartItems.map((cartItem) => {
			return (
				<div>
					< CartIndexItem key={cartItem.id} cartItem={cartItem} />
				</div>
			);
		});

		return (
			<div className="board-canvas">

				<div className="create">
					<div className="create-option">
						<Link to="/create-pin">Create Pin</Link>
						<Link to="/create-board">Create Board</Link>
					</div>
				</div>

				<div className="myName">{currentUser.username}</div>

				<div className="dashboard-nav">
					<a href="">Boards</a>
					<a href="">Pins</a>
					<a href="">Topics</a>
					<a href="">Hardcode</a>
				</div>

				<div className="board-frame">
					{myBoards}
				</div>
			</div>
		)
	}
}

export default BoardIndex;