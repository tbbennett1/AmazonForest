import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import { fetchCartItems } from '../../actions/cart_item_actions';
import UserListings from './user_listings';
import UserProfileCart from './user_profile_cart';

const msp = (state, ownProps) => {
  if (state.entities.items.data) {
    let usersItems = [];
    let userCartItems;
    let cartItemFilter = Object.values(state.entities.cartItems).map(item => item.itemId);
    usersItems = state.entities.items.data.filter(item => item.sellerId === ownProps.match.params.id);
    userCartItems = state.entities.items.data.filter(item => cartItemFilter.includes(item._id));
    return {
      items: usersItems,
      cartItems: userCartItems
    }
  }

  return {};
}

const mdp = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchCartItems: (userId) => dispatch(fetchCartItems(userId))
  }
}

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCartItems(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  render() {
    if(!this.props.items || !this.props.cartItems){
      return(
        <div></div>
      )
    }
    return ( 
      <div className="user-profile">
        <UserListings items={this.props.items}/>
        <UserProfileCart items={this.props.cartItems} />
      </div>
    )
  }
}

export default connect(msp, mdp)(UserProfile)