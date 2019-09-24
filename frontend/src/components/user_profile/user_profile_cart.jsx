import React from 'react';
import { Link } from 'react-router-dom';
import CartIndexItem from '../cart_page/cart_index_item';

class UserProfileCart extends React.Component{
  render(){
    debugger
    let itemLists = this.props.items.map((cartItem) => {
      debugger
      let item = this.props.items[cartItem.itemId];
      return <CartIndexItem 
              key={cartItem._id}
              cartItem={cartItem}
              item={item}
              removeCartItem={this.props.removeCartItem} />
    });

    if(itemLists.length === 0){
      itemLists = <h3>You currently have 0 cart items</h3>;
    }
    return(
      <div className="user-profile-cart">
        <Link to="/cart"><h1>Your Cart</h1></Link>
        <ul className="ul-uc">
          {itemLists}
        </ul>
      </div>
    )
  }
}

export default UserProfileCart;