import React from 'react';
import ItemIndex from '../item_page/item_index_container';

class UserListings extends React.Component{
  render(){
    return(
      <div className="user-listings">
        <h1>Your Product Listings</h1>
        <ItemIndex userId={this.props.match.params.id}/>
      </div>
    )
  }
}

export default UserListings;