import React from 'react';

import HeaderTop from './header_top';
import HeaderBottom from './header_bottom';

class Header extends React.Component {

	componentDidMount() {
        if (this.props.currentUser) {
		const userId = this.props.currentUser.id
        this.props.fetchCartItems(userId)
        }
	}

    render() {
		const { items, cartItems, fetchCartItems } = this.props
        let itemLists
        if (items && items[0]){
            itemLists = items[0]
		}
        return(
            <div className="mainBodyHeader">
                <HeaderTop items={itemLists}/>
				<HeaderBottom currentUser={this.props.currentUser} cartItems={cartItems} fetchCartItems={fetchCartItems} />
                {/* {this.handleSignedIn()} */}
            </div>
        )
    }
}

export default Header;