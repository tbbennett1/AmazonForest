import React from 'react';
import {Link} from 'react-router-dom';

import HeaderTop from './header_top';
import HeaderBottom from './header_bottom';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="mainBodyHeader">
                <HeaderTop />
                <HeaderBottom currentUser={this.props.currentUser}/>
                {/* {this.handleSignedIn()} */}
            </div>
        )
    }
}

export default Header;