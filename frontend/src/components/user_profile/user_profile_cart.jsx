import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexItem from '../item_page/item_index_item';

class UserProfileCart extends React.Component{
  render(){
    let itemLists;
    if (this.props.items) {
      itemLists = this.props.items.map(item => <ItemIndexItem key={item._id} item={item} />)
    }
    if(itemLists.length === 0){
      itemLists = <h3>You currently have 0 cart items</h3>;
    }
    return(
      <div className="user-profile-cart">
        <Link to="/cart"><h1>Your Cart</h1></Link>
        <ul className="ul-ul">
          {itemLists}
        </ul>
      </div>
    )
  }
}

export default UserProfileCart;