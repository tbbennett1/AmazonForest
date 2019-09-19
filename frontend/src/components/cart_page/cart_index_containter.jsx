import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_actions";
import CartIndex from "./cart_index";
import allCartItems from "../../reducers/selectors/cart_items_selector"

const mapStateToProps = (state) => ({
	// cartItems: state.entities.cartItems
	cartItems: allCartItems,
	currentUser: state.session.user
	// need currentUser
});

const mapDispatchToProps = (dispatch) => ({
	fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);