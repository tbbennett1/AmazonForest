import React from 'react';

import {ProtectedRoute } from '../../util/route_util';

import HeaderContainer from './header_container';
// import Sidebar from './sidebar';
// import FeaturedContainer from './featured_container';
import FooterOne from './footer_one';
// import FooterTwo from './footer_two';
import { Route, Switch } from 'react-router-dom';
import Item from '../item_page/item_show_container';
import ItemIndex from '../item_page/item_index_container';
import ItemCreateContainer from '../item_form/item_create_container';


class MainBody extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
    }    


    render() {
        return(
            <div className="mainPage">
                <HeaderContainer/>
                <div className="mainPageBody">
                    {/* <Sidebar /> */}
                    <div className="smoke-screen" id="smoke-screen"></div>
                    <Switch>
                        <Route exact path="/items/:id" component={Item} />
                        <Route exact path="/items" component={ItemIndex} /> 
                        <ProtectedRoute exact path="/new_item" component={ItemCreateContainer} /> 
                    </Switch>
                </div>
                <FooterOne />
                {/* <FooterTwo /> */}
            </div>
        )
    }
}

export default MainBody;