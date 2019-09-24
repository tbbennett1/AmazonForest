import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignUp from './signup_page/signup_container';
import Login from './login_page/login_container';
import MainBody from './main_page/main_body_container';
import { Route } from 'react-router-dom';
import '../stylesheets/body.css'
import '../stylesheets/footer1.css'
import '../stylesheets/header.css'
import '../stylesheets/footer2.css'
import '../stylesheets/reset.css'
import '../stylesheets/session.css'
import '../stylesheets/cart.css'
import '../stylesheets/item-show/item-show.css'
import '../stylesheets/item-index/item-index.css'
import '../stylesheets/item-form.css'
import '../stylesheets/home.css'
import '../stylesheets/user-profile.css'

const App = () => (
  <Switch>
    <AuthRoute exact path="/signup" component={SignUp} />
    <AuthRoute exact path="/login" component={Login} />
    <Route path="/" component={MainBody} />
  </Switch>
);

export default App;