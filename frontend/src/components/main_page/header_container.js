import { connect } from 'react-redux';

import { fetchCartItems } from "../../actions/cart_item_actions";
import Header from './header';


const mapStateToProps = (state) => {
    let itemList
    if (state.entities.items) {
        itemList = Object.keys((state.entities.items)).map(id => state.entities.items[id])
	}
    return{
        currentUser: state.session.user,
		items: itemList,
		cartItems: Object.values(state.entities.cartItems)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
		fetchCartItems: (userId) => dispatch(fetchCartItems(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);