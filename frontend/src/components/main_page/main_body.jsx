import React from 'react';

import {AuthRoute, ProtectedRoute } from '../../util/route_util';

import HeaderContainer from './header_container';
import Sidebar from './sidebar';
import FeaturedContainer from './featured_container';
import FooterOne from './footer_one';
import FooterTwo from './footer_two';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Item from '../item_page/item_show_container';
import ItemIndex from '../item_page/item_index_container';
import ItemCreateContainer from '../item_form/item_create_container';

class MainBody extends React.Component {
    render() {
        return(
            <div className="mainPage">
                <HeaderContainer />
                <div className="mainPageBody">
                    {/* <Sidebar /> */}
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