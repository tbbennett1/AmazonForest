import React from 'react';

import HeaderContainer from './header_container';
import Sidebar from './sidebar';
import FeaturedContainer from './featured_container';
import FooterOne from './footer_one';
import FooterTwo from './footer_two';

class MainBody extends React.Component {
    render() {
        return(
            <div className="mainPage">
                <HeaderContainer />
                <div className="mainPageBody">
                    <Sidebar />
                    <FeaturedContainer />
                </div>
                <FooterOne />
                <FooterTwo />
            </div>
        )
    }
}

export default MainBody;