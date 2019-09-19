import { connect } from "react-redux";
import { fetchCartItems, removeCartItem } from "../../actions/cart_item_actions";
import CartIndex from "./cart_index";
// import allCartItems from "../../reducers/selectors/cart_items_selector"

const mapStateToProps = (state) => {
	// const allCartItems = Object.values(state.entities.cartItems).map(
	// 		cartItem => state.entities.items[cartItem.itemId]
	// 	);
	return { cartItems: Object.values(state.entities.cartItems), currentUser: state.session.user }
};

const mapDispatchToProps = (dispatch) => ({
	fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
	removeCartItem: (id) => dispatch(removeCartItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);