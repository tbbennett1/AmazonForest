import React from 'react';
import {Link} from 'react-router-dom';

import HeaderTop from './header_top';
import HeaderBottom from './header_bottom';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { items } = this.props
        let itemLists
        if (items && items[0]){
            itemLists = items[0]
        }
        return(
            <div className="mainBodyHeader">
                <HeaderTop items={itemLists}/>
                <HeaderBottom currentUser={this.props.currentUser}/>
                {/* {this.handleSignedIn()} */}
            </div>
        )
    }
}

export default Header;