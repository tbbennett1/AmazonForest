import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignUp from './signup_page/signup_container';
import Login from './login_page/login_container';
import MainBody from './main_page/main_body';
import { Route, Redirect, withRouter } from 'react-router-dom';
import '../stylesheets/body.css'
import '../stylesheets/footer1.css'
import '../stylesheets/header.css'
import '../stylesheets/footer2.css'
import '../stylesheets/reset.css'
import '../stylesheets/session.css'

const App = () => (
  <Switch>
    <AuthRoute exact path="/signup" component={SignUp} />\
    <AuthRoute exact path="/login" component={Login} />
    <Route exact path="/" component={MainBody} />
  </Switch>
);

export default App;