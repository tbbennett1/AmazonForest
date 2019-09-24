import React from 'react';
import ItemIndexItem from '../item_page/item_index_item';


class UserListings extends React.Component{
  render(){
    let itemLists;
    if(this.props.items){
      itemLists = this.props.items.map(item => <ItemIndexItem key={item._id} item={item} />)
    }
    return(
      <div className="user-listings">
        <h1>Your Product Listings</h1>
        <ul className="ul-ul">
          {itemLists}
        </ul>
      </div>
    )
  }
}

export default UserListings;