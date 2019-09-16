import React from 'react';

import HeaderContainer from './header_container';
import Sidebar from './sidebar';
import FeaturedContainer from './featured_container';

class MainBody extends React.Component {
    render() {
        return(
            <div className="mainPage">
                <HeaderContainer />
                <div className="mainPageBody">
                    <Sidebar />
                    <FeaturedContainer />
                </div>
            </div>
        )
    }
}

export default MainBody;